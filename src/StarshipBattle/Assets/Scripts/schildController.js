#pragma strict

var posX:float = 0.05;
var posY:float = 0.95;

var sizeX:float = 0.5;
var sizeY:float = 0.05;

private var schildRandom:float = 0.2;

public var updatePlus:float = 0.025;
public var updateMinus:float = 0.025;
public var updateMinusOnCollision:float = 2.5;


private var isEnabled:boolean = true;
private var ownerName:String;
private var health:float = 100.0;


function getSchild(player){
	return GameObject.Find(player).transform.FindChild("schild").gameObject;
}

function Start () {
	ownerName = transform.parent.gameObject.name;
	if (ownerName == "playerRight"){
		posX = 0.6;
	}
}

function Update () {
	
	if (health == 0){
		isEnabled = false;
	}

	if (isEnabled){
		health = Mathf.Max(health - updateMinus, 0.0);
	}
	else {
		health = Mathf.Min(health + updatePlus, 100.0);
	}
	transform.renderer.enabled = isEnabled;
}

function changeIsEnabled(){
	isEnabled = !isEnabled;
}

public static function enabling(playerName) {
	var schildObj = GameObject.Find(playerName).transform.FindChild("schild").gameObject;
	var script:schildController = schildObj.GetComponent("schildController");
	script.changeIsEnabled();
}

function OnCollisionEnter(collision:Collision) {
	if (isEnabled && collision.collider.name == "laser(Clone)" && collision.collider.transform.parent.name != ownerName){
		if (Random.value > schildRandom){
			Debug.Log("Destroy laser");
			Destroy(collision.collider.gameObject);
			health = Mathf.Max(health - updateMinusOnCollision, 0.0);
		}
	}
}

function OnGUI()
{	
 	var X = Screen.width * posX;
 	var Y = Screen.height * posY;
 	var sX = Screen.height * sizeX;
 	var sY = Screen.height * sizeY;
 	
    GUI.backgroundColor = Color.green;
 	GUI.HorizontalScrollbar(Rect (X,Y,sX,sY), 0, health, 0, 100);
}