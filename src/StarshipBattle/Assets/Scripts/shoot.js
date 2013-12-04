#pragma strict

public var prefab : GameObject;
public var freq : int;

private var timer : float = 0;

function Update () {
 
 	timer += Time.deltaTime;
 	//Debug.Log(timer);
	if(timer > freq){
		timer =0;
		Instantiate (prefab, transform.position, Quaternion.identity);
	}
}