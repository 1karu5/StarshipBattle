#pragma strict

var posX:float = 0.05;
var posY:float = 0.95;

var posXR:float = 0.55;

var sizeX:float = 0.5;
var sizeY:float = 0.05;

private static var schildLeft:GameObject;
private static var schildRight:GameObject;

private static var schildLeftOn:boolean = true;
private static var schildRightOn:boolean = true;

public static var schildLeftHealth:float = 100.0;
public static var schildRightHealth:float = 100.0;

public var schildPerUpdatePlus:float = 0.1;
public var schildPerUpdateMinus:float = 0.1;

function Start () {
	schildLeft = GameObject.Find("schildLeft");
	schildRight = GameObject.Find("schildRight");
}

function Update () {
	if (schildLeftHealth == 0){
		schildLeftOn = false;
	}
	
	if (schildRightHealth == 0){
		schildRightOn = false;
	}

	if (schildLeftOn){
		schildLeft.active = true;
		schildLeftHealth = Mathf.Max(schildLeftHealth - schildPerUpdateMinus, 0.0);
	}
	else {
		schildLeft.active = false;
		schildLeftHealth = Mathf.Min(schildLeftHealth + schildPerUpdatePlus, 100.0);
	}

	if (schildRightOn){
		schildRight.active = true;
		schildRightHealth = Mathf.Max(schildRightHealth - schildPerUpdateMinus, 0.0);
	}
	else {
		schildRight.active = false;
		schildRightHealth = Mathf.Min(schildRightHealth + schildPerUpdatePlus, 100.0);
	}
}

static function sichtbar(playerName) {
	if (playerName == "playerLeft"){
		schildLeftOn = !schildLeftOn;
		schildLeft.active = schildLeftOn;
	}
	if (playerName == "playerRight"){
		schildRightOn = !schildRightOn;
		schildRight.active = schildRightOn;
	}
	
}

function OnGUI()
{	
 	var X = Screen.width * posX;
 	var XR = Screen.width * posXR;
 	var Y = Screen.height * posY;
 	var sX = Screen.height * sizeX;
 	var sY = Screen.height * sizeY;
 	
    GUI.backgroundColor = Color.green;
 	GUI.HorizontalScrollbar(Rect (X,Y,sX,sY), 0, schildController.schildLeftHealth, 0, 100);
 	
 	GUI.HorizontalScrollbar(Rect (XR,Y,sX,sY), 0, schildController.schildRightHealth, 0, 100);
}