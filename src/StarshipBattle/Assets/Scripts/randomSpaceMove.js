#pragma strict

function Update () {
	transform.position = Vector3(transform.position.x, transform.position.y, Mathf.PingPong(Time.time, 8));	
}