#pragma strict

private var raumNames:Array = ["r1","r2","r3","r4"];
private var characterNames:Array = ["c1","c2","c3"];
private var raums:Array;

function Start () {
	var raums = new Array();
	for (var i:String in raumNames){
		raums.push(transform.Find(i));
	}
}

function Update () {

}