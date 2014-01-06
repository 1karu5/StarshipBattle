#pragma strict

private static var rotateToRaum:Array = [0,15,30,45];

// Player: 	
// 			playerLeft
// 			playerRIght
// Cannon:
// 			Front
//			Back
// Raum 0-3
// 	 	front to back
public static function rotateTo(player:String, cannon:String, raum:int){
	
	var cannonObject = GameObject.Find(player).transform.FindChild("Cannon" + cannon).gameObject;
	var bbb:int = (cannon == "Front"? 1: -1);
	var aaa:int = rotateToRaum[raum];
	var scriptA:cannon = cannonObject.GetComponent("cannon");
	scriptA.rotateY = aaa * bbb;
}