#pragma strict
import System.Collections.Generic;
public class cannon extends actionClass
{

	//private static var rotateToRaum:Array = [0,-15,-30,-45];
	//private static var rotateToRaumFront:Array = [45,30,15,0];
	private static var rotateTo = new Dictionary.<String,Array>();
	public var shootingEnabled:boolean = false;
	public var rotateY:float = 0;
	public var shootingToPlayer:String;
	public var shootingRaum:String;
	public var waypoint:GameObject;

	public var cannonName:String;

	private var ownerName:String;
	private var ownerObject:GameObject;
	private var currentRotation:int = 0;
	private var Alles_drehbare:GameObject;

	private var timer : float = 0;
	private var prefab : GameObject;
	private var freq : int = 3;
	
	private var gunnerCount : int = 0;

	function Start () {
		
		/*rotateTo["playerLeftBack"]=[0,-15,-30,-45];
		rotateTo["playerLeftFront"]=[45,30,15,0];
		rotateTo["playerRightBack"]=[0,15,30,45];
		rotateTo["playerRightFront"]=[-45,-15,-30,0];*/
		
		rotateTo["playerLeftBack"]=[-45,-15,-30,0];
		rotateTo["playerLeftFront"]=[0,15,30,45];
		rotateTo["playerRightBack"]=[45,30,15,0];
		rotateTo["playerRightFront"]=[0,-15,-30,-45];

		Alles_drehbare = transform.FindChild("Alles_drehbare").gameObject;
		prefab = GameObject.Find("laser");
		
		ownerObject = transform.parent.gameObject;
		ownerName = ownerObject.name;
	}

	function Update () {
		countGunners();
	
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
		else if (shootingEnabled && gunnerCount > 0){
			// KanonenRohrSegment
			timer += Time.deltaTime;
 			//Debug.Log(timer);
			if(timer > freq){
				var laser:GameObject = Instantiate(prefab, Alles_drehbare.transform.position, Quaternion.identity);
				var toPosition = GameObject.Find(shootingToPlayer).transform.FindChild("Ship").transform.FindChild(shootingRaum).transform.position;
				var laserFly:laserFly = laser.GetComponent("laserFly");
				laserFly.toPosition = toPosition;
				laser.gameObject.transform.parent = ownerObject.transform;
				timer = 0;	
			}
			
		}
	}
	
	//umschreiben
	public static function shootingDisable(player:String, cannon:String){	
		var cannonObject = GameObject.Find(player).transform.FindChild("Cannon" + cannon).gameObject;
		var scriptA:cannon = cannonObject.GetComponent("cannon");
		scriptA.shootingEnabled = false;
	}
	
	public function countGunners() {
		var parent : Transform;
		parent = GameObject.Find(ownerName).transform;
		gunnerCount = 0;
		
	
		if(parent.FindChild("gunner1").transform.position == waypoint.transform.position) {
			gunnerCount++;
		}
		if(parent.FindChild("gunner2").transform.position == waypoint.transform.position) {
			gunnerCount++;
		}
	}

	public override function action(shootTo:int){
		Debug.Log(shootTo);
		
		rotateY = rotateTo[ownerName+cannonName][shootTo-1];
		
		shootingEnabled = true;
		
		shootingToPlayer = (ownerName == "playerLeft" ? "playerRight": "playerLeft");
		shootingRaum = "r" + shootTo;
	}
}
