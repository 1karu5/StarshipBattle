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
	if (Input.GetKeyDown(KeyCode.C)){
		cannonController.rotateTo("playerLeft","Back",3);
	}
	if (Input.GetKeyDown(KeyCode.X)){
		cannonController.rotateTo("playerLeft","Back",0);
	}
}