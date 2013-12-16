#pragma strict

var objectName:String = "empty";
var player:String = "playerLeft";
var posX:float = 0.5;
var posY:float = 0.5;
var sizeX:float = 60;
var sizeY:float = 20;
var progressBarEmpty : Texture2D;
var progressBarFull : Texture2D;

function Start () {
	if (true || !progressBarEmpty){
		progressBarEmpty = new Texture2D(2, 2, TextureFormat.ARGB32, false);
		progressBarEmpty.SetPixel(0, 0, Color(1, 0, 0, 1));
	}
	if (true || !progressBarFull){
		progressBarFull = new Texture2D(2, 2, TextureFormat.ARGB32, false);
		progressBarFull.SetPixel(0, 0, Color(0, 1, 0, 1));
	}
}

function Update () {
	
}


 
function OnGUI()
{
 	var X = Screen.width * posX;
 	var Y = Screen.height * posY;
 	var sX = Screen.height * sizeX;
 	var sY = Screen.height * sizeY;
    // draw the background:
    GUI.BeginGroup (new Rect (X, Y, sX, sY));
        GUI.Box (Rect (0,0, sX, sY),progressBarEmpty);
 
        // draw the filled-in part:
        GUI.BeginGroup (new Rect (0, 0, sX * health.health, sY));
            GUI.Box (Rect (0,0, sX, sY), progressBarFull);
        GUI.EndGroup ();
 
    GUI.EndGroup ();
 
} 