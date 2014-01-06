#pragma strict

public var rotateY:float = 0;
private var startRotateY:float;
private var Alles_drehbare:GameObject;

function Start () {
	Alles_drehbare = transform.FindChild("Alles_drehbare").gameObject;
	startRotateY = Alles_drehbare.transform.eulerAngles.y;
}

function Update () {
	if (Mathf.Abs(Alles_drehbare.transform.eulerAngles.y - startRotateY) > rotateY){
		Alles_drehbare.transform.eulerAngles.y += 1;
	}
	if (Mathf.Abs(Alles_drehbare.transform.eulerAngles.y - startRotateY) < rotateY){
		Alles_drehbare.transform.eulerAngles.y -= 1;
	}
}