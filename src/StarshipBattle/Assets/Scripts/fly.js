#pragma strict

function Start () {
	rigidbody.AddForce(Vector3.left*3000);
}

function OnCollisionEnter (c : Collision) {
	Debug.Log("hit");
}