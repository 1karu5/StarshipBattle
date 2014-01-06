#pragma strict

enum SBStep { choseChar, choseRoom, choseTarget};
enum SBChar { gun1, gun2, eng};
enum SBRoom { cannon1, cannon2, medic, UnityEngine};

private var state_r:SBStep;
private var char_r:SBChar;
private var room_r:SBRoom;
private var target_r:SBRoom;

private var state_l:SBStep;
private var char_l:SBChar;
private var room_l:SBRoom;
private var target_l:SBRoom;

function Start () {

	state_r = SBStep.choseChar;
	
	state_l = SBStep.choseChar;
	
}

function Update () {

	//TODO check in what step the player is and what he can chose
	
}