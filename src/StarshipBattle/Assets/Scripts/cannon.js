#pragma strict

public var rotateY:float = 0;
private var currentRotation:int = 0;
private var Alles_drehbare:GameObject;
private var shooting:boolean = false;

function Start () {
	Alles_drehbare = transform.FindChild("Alles_drehbare").gameObject;
}

function Update () {
	if (currentRotation != rotateY){
		if (currentRotation > rotateY){
			Alles_drehbare.transform.Rotate(0,0,-1);
			currentRotation -= 1;
		}
		if (currentRotation < rotateY){
			Alles_drehbare.transform.Rotate(0,0,1);
			currentRotation += 1;
		}
	}
	else {
		if (shooting){
			
		}
	}
}