#pragma strict

public var rotateY:float = 0;
private var startRotateY:float;
private var Alles_drehbare:GameObject;

function Start () {
	Alles_drehbare = transform.FindChild("Alles_drehbare").gameObject;
	startRotateY = Alles_drehbare.transform.rotation.y;
}

function Update () {
	var diff = Mathf.FloorToInt(Mathf.Abs(Alles_drehbare.transform.rotation.y - startRotateY));
	if (diff > rotateY){
		Alles_drehbare.transform.Rotate(0,0,-1);
		//Alles_drehbare.transform.eulerAngles.y += 1;
	}
	if (diff < rotateY){
		Alles_drehbare.transform.Rotate(0,0,1);
		//Alles_drehbare.transform.eulerAngles.y -= 1;
	}
}