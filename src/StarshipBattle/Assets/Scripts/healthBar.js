#pragma strict

var objectName:String = "empty";
var player:String = "playerLeft";
var posX:float = 0.5;
var posY:float = 0.5;
var sizeX:float = 60;
var sizeY:float = 20;


function OnGUI()
{	
 	var X = Screen.width * posX;
 	var Y = Screen.height * posY;
 	var sX = Screen.height * sizeX;
 	var sY = Screen.height * sizeY;
 	
    GUI.backgroundColor = Color.green;
 	GUI.HorizontalScrollbar(Rect (X,Y,sX,sY), 0, health.health, 0, 100);
} 