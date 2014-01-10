#pragma strict

var endPoint : Vector3;
private var player;
private var corridorCoord : int;
private var moveSpeed : float = 0.1;

//0 is moving out of the room, 1 is moving to the corridor position, 2 is moving in the room
private var moveStep : int;

function Start () {
	endPoint = transform.position;
	
	if(transform.parent.gameObject.name == "playerLeft") {
		corridorCoord = -2;
	} else {
		Debug.Log("is right");
	}
	
}

function Update () {
	var temp : Vector3;

	if(endPoint != transform.position) {
		//Debug.Log(moveStep);
	
		//move to the corridor
		if(moveStep == 0) {
			temp = transform.position;
			temp.x =  corridorCoord;

		    transform.position = Vector3.Lerp(transform.position, temp, moveSpeed);
			
			if(temp == transform.position) {
				moveStep++;
			}
		} else if (moveStep == 1) {
			temp = endPoint;
			temp.x =  corridorCoord;
			
			transform.position = Vector3.Lerp(transform.position, temp, moveSpeed);
			
			if(temp == transform.position) {
				moveStep++;
			}
		} else if (moveStep == 2) {

		    transform.position = Vector3.Lerp(transform.position, endPoint, moveSpeed);
			
			if(endPoint == transform.position) {
				moveStep = 0;
			}
		}
		
	} else {
		moveStep = 0;
	}
}