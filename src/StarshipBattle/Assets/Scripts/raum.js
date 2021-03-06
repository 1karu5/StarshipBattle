﻿#pragma strict


public var damageMax:int = 30.0;
public var damageMin:int = 15.0;
public var roomDamage : AudioClip;

private var repairSpeed:float = 0.25;
private var engineer:Transform;
private var raumName:String;
private var prefab : GameObject;

private var characters:Array = new Array();
private var ownerName:String;
private var isDestroyed:boolean = false;

function Start () {
	
	engineer = transform.root.FindChild("engineer");
	prefab = GameObject.Find("spawnLight");
	raumName = transform.name;
	
	// find all characters
	var ownerObj:GameObject = transform.root.gameObject;
	ownerName = ownerObj.name;
	for (var i:String in ["engineer", "gunner1", "gunner2"]){
		characters.push(ownerObj.transform.Find(i).transform);
	}
}

function Update () {
	if (isDestroyed){
		//make room black
		GameObject.Find(ownerName).transform.FindChild("Raeume").transform.FindChild("deckel"+raumName).renderer.material.color = Color (0,0,0,0.8);
		return;
	}
	
	var roomHealth:float = healthController.getHealth(ownerName, transform.name);
	if (roomHealth == 0.0 && !isDestroyed){
		isDestroyed = true;
		for (var i:Transform in characters){
			if(i != null) {
				var iHealth:float = healthController.getHealth(ownerName, i.name);
				if (iHealth > 0.0){
					var distI = Vector3.Distance(i.position, transform.position);
					
					if (distI < 3){
						healthController.updateHealth(ownerName, i.name, -100);
					}
				}
			}
		}
	}


	if (engineer != null){
		var engineerHealth:float = healthController.getHealth(ownerName, engineer.name);
		if (engineerHealth > 0 && roomHealth < 100.0){
			var dist = Vector3.Distance(engineer.position, transform.position);
			if(dist < 3) {
					healthController.updateHealth(ownerName, raumName, repairSpeed);
			}
		}
	}
	/*
	if (health > 50){
		// set texture
	
	}
	else if (health > 15){
		// set texture
	
	}
	else {
		// set texture
	
	}
	*/
}

function OnCollisionEnter(collision:Collision) {
	if (collision.collider.name == "laser(Clone)"){
		//play sound
		AudioSource.PlayClipAtPoint(roomDamage, transform.position);
	
		Destroy(collision.collider.gameObject);
		
		var damage:float = Random.RandomRange(damageMin, damageMax);
		
		healthController.updateHealth(ownerName, raumName, -damage);
		
		if (isDestroyed){
			return;
		}
		
		var l:GameObject = Instantiate(prefab, transform.position, Quaternion.identity);
		l.light.color = Color.red;
		Destroy(l,0.5);
		
		for (var i:Transform in characters){
			if(i != null) {
				var iHealth:float = healthController.getHealth(ownerName, i.name);
				if (iHealth > 0.0){
					var dist = Vector3.Distance(i.position, transform.position);
					
					if (dist < 3){
						healthController.updateHealth(ownerName, i.name, -damage * 1.0);
					}
				}
			}
		}
	}
}