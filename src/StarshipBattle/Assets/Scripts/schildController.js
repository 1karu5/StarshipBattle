#pragma strict

var posX:float = 0.05;
var posY:float = 0.95;

var sizeX:float = 0.5;
var sizeY:float = 0.05;

private var schildRandom:float = 0.2;

public var updatePlus:float = 0.025;
public var updateMinus:float = 0.025;
public var updateMinusOnCollision:float = 20;
public var shieldDamage : AudioClip;

private var prefab : GameObject;

private var isEnabled:boolean = true;
private var ownerName:String;
private var health:float = 100.0;

public var laserExplodeColor:Color;

function Start () {
	ownerName = transform.root.gameObject.name;
	Debug.Log("Owner:" + ownerName);
	if (ownerName == "playerRight"){
		posX = 0.6;
	}
	if (laserExplodeColor == null){
		laserExplodeColor = Color.blue;
	}
	
	prefab = GameObject.Find("spawnLight");
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
	var schildObj = GameObject.Find(playerName).transform.FindChild("Ship").transform.FindChild("schild").gameObject;
	var script:schildController = schildObj.GetComponent("schildController");
	script.changeIsEnabled();
}

function OnCollisionEnter(collision:Collision) {
	if (isEnabled && collision.collider.name == "laser(Clone)" && collision.collider.transform.parent.name != ownerName){
		if (Random.value > schildRandom){
			Debug.Log("Destroy laser");
			//if(collision.gameObject.rigidbody) {
		    //    for(var contact in collision.contacts) {
		    //        collision.gameObject.rigidbody.AddExplosionForce(5, contact.point, 5, 10);
		    //    }
		    //}
			health = Mathf.Max(health - updateMinusOnCollision, 0.0);
		
			//play sound
			AudioSource.PlayClipAtPoint(shieldDamage, collision.collider.gameObject.transform.position);
			
			var l:GameObject = Instantiate(prefab, collision.collider.gameObject.transform.position, Quaternion.identity);
			l.light.color = laserExplodeColor;
			Destroy(collision.collider.gameObject);
			
			Destroy(l,0.5);
		}
	}
}

function OnGUI()
{	
 	var X = Screen.width * posX;
 	var Y = Screen.height * posY;
 	var sX = Screen.width * sizeX;
 	var sY = Screen.height * sizeY;
 	
    GUI.backgroundColor = Color.green;
 	GUI.HorizontalScrollbar(Rect (X,Y,sX,sY), 0, health, 0, 100);
}