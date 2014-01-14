#pragma strict

public var speed:int=5;

private var switchingTime:boolean; 

function Update () {
	
	//Debug.Log(transform.rotation.x);
	if(transform.rotation.x< 0.1){
		Debug.Log("switch");
		switchingTime = !switchingTime;
	}
	if(transform.rotation.x> 1.0){
		Debug.Log("switch");
		switchingTime = !switchingTime;
	}
	
	
	if(switchingTime){
		transform.Rotate(Vector3.up*Time.deltaTime*speed);
	}else{
		transform.Rotate(-Vector3.up*Time.deltaTime*speed);
	}
	
}