#pragma strict

public var ownerName : String;
public var character:String;
public var healthTex:Texture;

private var healthBarHeight : int= 5;
private var healthBarLeft : int= 50;
private var barTop : int= 1;
private var healthBarLength : float= 100;

function Update () {
	var hTemp:float = healthController.getHealth(ownerName, character);
	healthBarLength = (hTemp / 250) * 100;
}

function OnGUI () {
	var screenPosition = Camera.main.WorldToScreenPoint(new Vector3(transform.position.x, transform.position.y,transform.position.z));
	GUI.Box(new Rect(screenPosition.x - healthBarLeft / 2, Screen.height - screenPosition.y - barTop,healthBarLength, healthBarHeight), "");
	GUI.DrawTexture(new Rect(screenPosition.x - healthBarLeft / 2,Screen.height - screenPosition.y - barTop,healthBarLength, healthBarHeight), healthTex);	
}	