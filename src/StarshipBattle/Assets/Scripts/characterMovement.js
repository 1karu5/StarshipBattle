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
	private var waypoints = new Dictionary.<String,Transform>();
	private var playWalkAnimation:boolean = false;
	public var isGunner:boolean = false;
	
	private var end:boolean=false;

	function Start () {
		ownerObject = transform.root.gameObject;
		ownerName = ownerObject.name;	
		animation.Play("stehen");
	}

	function Update () {
		//find all waypoints
		for(var i=1;i<=4;i++){
			waypoints["Waypoint_"+i]=GameObject.Find(ownerName).transform.FindChild("waypoints").transform.FindChild("Waypoint_"+i);
			waypoints[("Waypoint_"+i)+i]=GameObject.Find(ownerName).transform.FindChild("waypoints").transform.FindChild("Waypoint_"+i+i);
		}
		if(targetRoom!=""){
			move();
			animation.Play("run_001");
		}
		else {
			animation.Play("stehen");
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
			if(distance > (transform.position - waypoints["Waypoint_"+i].transform.position).magnitude){
				distance = (transform.position - waypoints["Waypoint_"+i].transform.position).magnitude;
				w = i;
			}
			if(distance > (transform.position - waypoints[("Waypoint_"+i)+i].transform.position).magnitude){
				distance = (transform.position - waypoints[("Waypoint_"+i)+i].transform.position).magnitude;
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
		if(end){
			targetRoom="";
			return;
		}
		
		if("Waypoint_"+where==targetRoom){	//arived
			//Debug.Log("arived");
			nextWaypoint = waypoints[targetRoom].FindChild(transform.name).transform.position;
			end=true;
			//targetRoom="";
			//TODO: stop walk animation	
		}else{
			if("Waypoint_"+where==targetRoom+targetRoom.Substring(targetRoom.length-1,1)){	//move inside the room
				if(healthController.getHealth(ownerName,"r"+targetRoom.Substring(targetRoom.length-1,1))==0.0){	//room destroyed
					targetRoom="";
					return;	
				}
				nextWaypoint = waypoints[targetRoom].transform.position;
				Debug.Log("move inside the room: "+targetRoom);
			}
			else if(where>10){	//somewhere on the corridor, move in front of the room
				nextWaypoint = waypoints[targetRoom+targetRoom.Substring(targetRoom.length-1,1)].transform.position;
				Debug.Log("somewhere on the corridor, move in front of the room: "+targetRoom+targetRoom.Substring(targetRoom.length-1,1));
			}else{		//in some room, move outside in the corridor
				nextWaypoint = waypoints[("Waypoint_"+where)+where].transform.position;
				Debug.Log("in some room, move outside in the corridor: "+("Waypoint_"+where)+where);
			}
		}
		
	}

	public override function action(raumTo:int){
		targetRoom = "Waypoint_"+raumTo;
		end=false;
		calcNextWaypoint();
		
		//TODO: start walk animation
	}
}