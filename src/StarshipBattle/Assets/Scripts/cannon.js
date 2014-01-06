#pragma strict

public var rotateY:float = 0;
private var currentRotation:int = 0;
private var Alles_drehbare:GameObject;
private var shooting:boolean = false;

private var timer : float = 0;
private var prefab : GameObject;
private var freq : int = 1;

function Start () {
	Alles_drehbare = transform.FindChild("Alles_drehbare").gameObject;
	prefab = GameObject.Find("laser");
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
		if (shooting){
			// KanonenRohrSegment
			timer += Time.deltaTime;
 			//Debug.Log(timer);
			if(timer > freq){
				Debug.Log("shoot");
				var laser:GameObject = Instantiate(prefab, Alles_drehbare.transform.position, Quaternion.identity);
				
				var toPosition = GameObject.Find("playerRight").transform.Find("r1").transform.position;
				
				laser.rigidbody.AddForce((laser.transform.position - toPosition).normalized * 100);
				timer =0;	
			}
		}
	}
}