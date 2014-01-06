#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKeyDown(KeyCode.V)){
		schildController.sichtbar("playerLeft");
	}
	if (Input.GetKeyDown(KeyCode.B)){
		schildController.sichtbar("playerRight");
	}
}