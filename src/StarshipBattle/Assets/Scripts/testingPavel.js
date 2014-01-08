#pragma strict

public var raum: int = 1;

function Start () {
	
}

function Update() {

	if (Input.GetKeyDown(KeyCode.V)){
		schildController.enabling("playerLeft");
	}
	if (Input.GetKeyDown(KeyCode.B)){
		schildController.enabling("playerRight");
	}
}

function OnGUI(){
	if (Debug.isDebugBuild){
		if(GUI.Button(Rect(10,10,100,20),"cannon test")){
			Debug.Log(raum);
			cannon.shootingTo("playerLeft","Back",raum);
			cannon.shootingTo("playerLeft","Front",raum);
			cannon.shootingTo("playerRight","Back",raum);
			cannon.shootingTo("playerRight","Front",raum);
			raum = (raum + 1) % 4;
		}
	}
}