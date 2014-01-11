#pragma strict

public var damageMax:int = 30.0;
public var damageMin:int = 15.0;
public var repairSpeed:int = 0.25;

private var health:float = 100.0;
private var healthMax:float = 100.0;
private var healthMin:float = 0.0;
private var engineer:Transform;

private var prefab : GameObject;

function Start () {
	engineer = transform.root.FindChild("engineer");
	prefab = GameObject.Find("spawnLight");
}

function Update () {
	var dist = Vector3.Distance(engineer.position, transform.position);

	if(dist < 2 && health < 100) {
		Mathf.Min(health + repairSpeed, healthMax);
		Debug.Log("repair health:" + health);
	}
	
	if (health > 50){
		// set texture
	
	}
	else if (health > 15){
		// set texture
	
	}
	else {
		// set texture
	
	}
}

function OnCollisionEnter(collision:Collision) {
	if (collision.collider.name == "laser(Clone)"){
		Destroy(collision.collider.gameObject);
		health = Mathf.Max(health - Random.RandomRange(damageMin, damageMax), healthMin);
		Debug.Log("Current health:" + health);
		
		var l:GameObject = Instantiate(prefab, transform.position, Quaternion.identity);
		l.light.color = Color.red;
		Destroy(l,0.5);
	}
}