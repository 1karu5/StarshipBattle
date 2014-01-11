#pragma strict
public class characterMovement extends actionClass
{
	public var toPosition:Vector3;
	public var speed = 1;
	private var ownerObject:GameObject;
	private var ownerName:String;

	//movement
	private var targetRoom:String="";
	private var nextWaypoint:Vector3;

	//waypoints
	private var waypoints = new Dictionary.<String,Vector3>();

	function Start () {
		ownerObject = transform.parent.gameObject;
		
		ownerName = ownerObject.name;
		
		Debug.Log(ownerName);
		
		//find all waypoints
		for(var i=1;i<=4;i++){
			waypoints["Waypoint_"+i]=GameObject.Find(ownerName).transform.FindChild("waypoints").transform.FindChild("Waypoint_"+i).transform.position;
			waypoints[("Waypoint_"+i)+i]=GameObject.Find(ownerName).transform.FindChild("waypoints").transform.FindChild("Waypoint_"+i+i).transform.position;
		}
		
	}

	function Update () {
		if(targetRoom!=""){
			move();
		}
	}

	private function move(){
		var m = Vector3.MoveTowards(transform.position, nextWaypoint, Time.deltaTime*speed);
		
		if(transform.position == m){
			Debug.Log("move to next Waypoint");
			//calc next waypoint
			calcNextWaypoint();
		}else{
			transform.position = m;
			transform.rotation = Quaternion.LookRotation(nextWaypoint - transform.position);
		}
	}


	private function whereAmI(){
		
		var distance=10000000;	//distance to nearest waypoint
		var w = -1;	//nearest waypoint
		
		for(var i=1;i<=4;i++){
			if(distance > (transform.position - waypoints["Waypoint_"+i]).magnitude){
				distance = (transform.position - waypoints["Waypoint_"+i]).magnitude;
				w = i;
			}
			if(distance > (transform.position - waypoints[("Waypoint_"+i)+i]).magnitude){
				distance = (transform.position - waypoints[("Waypoint_"+i)+i]).magnitude;
				w = 10*i+i;
			}
		}
		if(w == -1){
			Debug.Log("Error");
		}
		return w;
	}


	private function calcNextWaypoint(){
		var where = whereAmI();
		//Debug.Log("calcNext: where="+where);
		if("Waypoint_"+where==targetRoom){	//arived
			Debug.Log("arived");
			targetRoom="";
			//TODO: stop walk animation	
		}else{
			if("Waypoint_"+where==targetRoom+targetRoom.Substring(targetRoom.length-1,1)){	//move inside the room
				nextWaypoint = waypoints[targetRoom];
				Debug.Log("move inside the room: "+targetRoom);
			}
			else if(where>10){	//somewhere on the corridor, move in front of the room
				nextWaypoint = waypoints[targetRoom+targetRoom.Substring(targetRoom.length-1,1)];
				Debug.Log("somewhere on the corridor, move in front of the room: "+targetRoom+targetRoom.Substring(targetRoom.length-1,1));
			}else{		//in some room, move outside in the corridor
				nextWaypoint = waypoints[("Waypoint_"+where)+where];
				Debug.Log("in some room, move outside in the corridor: "+("Waypoint_"+where)+where);
			}
		}
		
	}

	public override function action(raumTo:int){
		targetRoom = "Waypoint_"+raumTo;
		
		calcNextWaypoint();
		
		//TODO: start walk animation
	}
}