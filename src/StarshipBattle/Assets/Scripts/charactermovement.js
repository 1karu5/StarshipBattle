// Click To Move script
// Moves the object towards the mouse position on left mouse click

var speed:int; // Determines how quickly object moves towards position
var player:boolean;

private var targetPosition:Vector3;
private static var activeObject:GameObject;

function Start(){
	enabled=false;
}

function OnMouseDown(){
	if(Network.isClient == player){
		activeObject = gameObject;
	}
}

function OnPlayerConnected(){
	startGame();
}

function OnConnectedToServer(){
	startGame();
}

function startGame(){
	
	if(Network.isClient == player){
    	enabled=true;
    	//Network.Instantiate(gameObject,gameObject.position,Quaternion.identity,0);
    }
}

function Update () {
	if(Network.isClient == player){
		if(Input.GetKeyDown(KeyCode.Mouse0) && activeObject==gameObject)
		    {
		        var playerPlane = new Plane(Vector3.up, transform.position);
		        var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		        var hitdist = 0.0;
		        
		        if (playerPlane.Raycast (ray, hitdist)) {
		            var targetPoint = ray.GetPoint(hitdist);
		            targetPosition = ray.GetPoint(hitdist);
		            var targetRotation = Quaternion.LookRotation(targetPoint - transform.position);
		            transform.rotation = targetRotation;
		        }
		    }
    	transform.position = Vector3.MoveTowards(transform.position, targetPosition, Time.deltaTime * speed);
    }
}