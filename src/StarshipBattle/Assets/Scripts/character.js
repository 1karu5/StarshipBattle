#pragma strict

public var toPosition:Vector3;
public var speed = 0.1;
private var ownerObject:GameObject;

function Start () {
	ownerObject = transform.parent.gameObject;
}

function Update () {
	var currentPosition = transform.position;
	
	if (toPosition){
		var dir:Vector3 = (toPosition-currentPosition).normalized * new Vector3(1,0,1);
		transform.position += dir * speed;
	}
}

public function moveTo(raumFrom, raumTo){
	
}

