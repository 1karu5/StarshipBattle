#pragma strict

private var characters:Array = new Array();
private var recover:float = 0.25;
private var ownerName:String;
private var prefab : GameObject;

private var freq:float = 1.5;
private var timer : float = 0;

function Start () {
	var ownerObj:GameObject = transform.root.gameObject;
	ownerName = ownerObj.name;
	for (var i:String in ["engineer", "gunner1", "gunner1"]){
		characters.push(ownerObj.Find(i).transform);
	}
	
	prefab = GameObject.Find("spawnLight");
}

function Update () {
	for (var i:Transform in characters){
		var dist = Vector3.Distance(i.position, transform.position);
		if (dist < 2){
			healthController.updateHealth(ownerName, i.name, recover);
			timer += Time.deltaTime;
			if (timer > freq){
			
				var l:GameObject = Instantiate(prefab, i.position, Quaternion.identity);
				l.light.color = Color.white;
				
				var laserFly:laserFly = l.GetComponent("laserFly");
				laserFly.toPosition = i.position + Vector3(0,10,0);
				
				Destroy(l,2.0);
				timer = 0;
			}
		}
	}
}