#pragma strict

public var speed:int=15;

function Update () {
	transform.Rotate(Vector3.up*Time.deltaTime*speed);
}