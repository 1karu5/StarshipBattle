#pragma strict

public var raum: int = 1;

function Start () {
	
}

function Update() {

	if (Input.GetKeyDown(KeyCode.V)){
		schildController.sichtbar("playerLeft");
	}
	if (Input.GetKeyDown(KeyCode.B)){
		schildController.sichtbar("playerRight");
	}
}

function OnGUI(){
	if (Debug.isDebugBuild){
		if(GUI.Button(Rect(10,10,100,20),"cannon test")){
			cannonController.rotateTo("playerLeft","Back",raum);
			cannonController.rotateTo("playerLeft","Front",raum);
			cannonController.rotateTo("playerRight","Back",raum);
			cannonController.rotateTo("playerRight","Front",raum);
			raum = (raum + 1) % 4;
		}
	}
}