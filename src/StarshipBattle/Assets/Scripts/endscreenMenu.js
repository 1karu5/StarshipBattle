#pragma strict

private var border : float;
private var buttonWidth : float;
private var buttonHeight : float;
public var winner : String;

function Start () {
	
	border = Screen.width / 10;
	buttonWidth = Screen.width / 5;
	buttonHeight = buttonWidth * 0.382;
	
}

function Update () {

}

function OnGUI() {
	
	var buttonPosY = Screen.height - border * 2;
	
	GUI.Label(Rect(border,border,border * 8,border*3), "<color=white><size=60>Winner is: "+winner+"</size></color>");
	
	if(GUI.Button(Rect(border, buttonPosY, buttonWidth, buttonHeight),"Back to Main Menu")){
		Application.LoadLevel("StarshipBattle"); 
	}
	if(GUI.Button(Rect(border * 2 + buttonWidth, buttonPosY, buttonWidth, buttonHeight),"New Game")){
		Application.LoadLevel("main"); 
	}
	if(GUI.Button(Rect(border * 3 + buttonWidth * 2, buttonPosY, buttonWidth, buttonHeight),"Exit")){
		Application.Quit();
	}
	
}