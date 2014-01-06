#pragma strict

public var toPosition:Vector3;
public var ownerName:String;
private var speed:float = 0.1;

function Start () {

}

function Update () {
	if (toPosition != null){
		var currentPosition = transform.position;
		var dir = (toPosition-currentPosition).normalized;
		transform.position += dir * speed;
	}
}