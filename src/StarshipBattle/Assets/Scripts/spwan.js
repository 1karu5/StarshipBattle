#pragma strict

var playerObj:GameObject;
var player:String;

function OnPlayerConnected(){
	if(player=="player1"){
		spawn();
	}
}

function OnConnectedToServer(){
	if(player=="player2"){
		spawn();
	}
}

function spawn(){
	Network.Instantiate(playerObj,gameObject.transform.position,gameObject.transform.rotation,0);	
}