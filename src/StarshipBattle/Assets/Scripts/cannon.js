#pragma strict

private static var rotateToRaum:Array = [0,-15,-30,-45];
private static var rotateToRaumFront:Array = [45,30,15,0];
public var shootingEnabled:boolean = false;
public var rotateY:float = 0;
public var shootingToPlayer:String;
public var shootingRaum:String;

private var ownerName:String;
private var ownerObject:GameObject;
private var currentRotation:int = 0;
private var Alles_drehbare:GameObject;

private var timer : float = 0;
private var prefab : GameObject;
private var freq : int = 3;

function Start () {
	Alles_drehbare = transform.FindChild("Alles_drehbare").gameObject;
	prefab = GameObject.Find("laser");
	
	ownerObject = transform.parent.gameObject;
	ownerName = ownerObject.name;
}

function Update () {
	if (currentRotation != rotateY){
		if (currentRotation > rotateY){
			Alles_drehbare.transform.Rotate(0,0,-1);
			currentRotation -= 1;
		}
		if (currentRotation < rotateY){
			Alles_drehbare.transform.Rotate(0,0,1);
			currentRotation += 1;
		}
	}
	else {
		if (shootingEnabled){
			// KanonenRohrSegment
			timer += Time.deltaTime;
 			//Debug.Log(timer);
			if(timer > freq){
				var laser:GameObject = Instantiate(prefab, Alles_drehbare.transform.position, Quaternion.identity);
				var toPosition = GameObject.Find(shootingToPlayer).transform.Find(shootingRaum).transform.position;
				var laserFly:laserFly = laser.GetComponent("laserFly");
				laserFly.toPosition = toPosition;
				laser.gameObject.transform.parent = ownerObject.transform;
				timer = 0;	
			}
		}
	}
}
// Player: 	
// 			playerLeft
// 			playerRIght
// Cannon:
// 			Front
//			Back
// Raum 0-3
// 	 	front to back
public static function shootingTo(player:String, cannon:String, raum:int){	
	var cannonObject = GameObject.Find(player).transform.FindChild("Cannon" + cannon).gameObject;
	var scriptA:cannon = cannonObject.GetComponent("cannon");
	
	if (cannon == "Front"){
		scriptA.rotateY = rotateToRaumFront[raum];
	}
	else {
		scriptA.rotateY = rotateToRaum[raum];
	}
	
	scriptA.shootingEnabled = true;
	
	scriptA.shootingToPlayer = (player == "playerLeft" ? "playerRight": "playerLeft");
	scriptA.shootingRaum = "r" + (raum + 1);
}

public static function shootingDisable(player:String, cannon:String){	
	var cannonObject = GameObject.Find(player).transform.FindChild("Cannon" + cannon).gameObject;
	var scriptA:cannon = cannonObject.GetComponent("cannon");
	scriptA.shootingEnabled = false;
}


