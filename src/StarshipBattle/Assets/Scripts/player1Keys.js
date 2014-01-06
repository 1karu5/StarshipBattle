#pragma strict

public static var prevObject:KeyCode = KeyCode.Q;
public static var nextObject:KeyCode = KeyCode.W;

public static var prevStep:KeyCode = KeyCode.Y;
public static var nextStep:KeyCode = KeyCode.X;

public static var shield:KeyCode = KeyCode.C;



function Start () {

}

function Update () {
	if (Input.GetKeyDown(shield)){
		schildController.sichtbar("playerLeft");
	}
}