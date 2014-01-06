#pragma strict

private var health:float = 100.0;
private var healthMax:float = 100.0;
private var healthMin:float = 0.0;
public var damageMax:int = 30.0;
public var damageMin:int = 15.0;
public var repairSpeed:int = 1;
public var isRepair:boolean = false;

function Start () {
	
}

function Update () {
	if (isRepair){
		Mathf.Min(health + repairSpeed, healthMax);
	}
}

function OnCollisionEnter(collision:Collision) {
	if (collision.collider.name == "laser(Clone)"){
		Destroy(collision.collider.gameObject);
		health = Mathf.Max(health - Random.RandomRange(damageMin, damageMax), healthMin);
		Debug.Log("Current health:" + health);
		
	}
}

public function repair(val:boolean){
	isRepair = val;
}