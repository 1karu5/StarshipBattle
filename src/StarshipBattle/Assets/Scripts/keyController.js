#pragma strict

enum SBStep { choseOjbect, choseRoom};
enum SBObject { gunner1, gunner2, eng, gun1, gun2};
enum SBRoom { cannon1, cannon2, medic, engineRoom};

private var step_r:SBStep;
private var object_r:SBObject;
private var room_r:SBRoom;

private var step_l:SBStep;
private var object_l:SBObject;
private var room_l:SBRoom;

function Start () {

	step_r = SBStep.choseOjbect;
	object_r = SBObject.gun1;
	room_r = SBRoom.cannon1;
	
	step_l = SBStep.choseOjbect;
	object_l = SBObject.gun1;
	room_l = SBRoom.cannon1;
	
}

function Update () {
	/* 
		shields
	*/
	if(Input.GetKeyDown(Player1Keys.shield)) {
		Debug.Log("toggle shield playerleft");
		schildController.enabling("playerLeft");
	} else if(Input.GetKeyDown(Player2Keys.shield)) {
		Debug.Log("toggle shield playerright");
		schildController.enabling("playerRight");
	}



	/*
		Right player actionchain
		right = player2
	*/
	else if(step_r == SBStep.choseOjbect) {
		//switch through the chars
		if(Input.GetKeyDown(Player2Keys.nextObject)) {
			if(object_r == SBObject.gunner1) {
				object_r = SBObject.gunner2;
			} else if(object_r == SBObject.gunner2) {
				object_r = SBObject.eng;
			} else if(object_r == SBObject.eng) {
				object_r = SBObject.gun1;
			} else if(object_r == SBObject.gun1) {
				object_r = SBObject.gun2;
			} else if(object_r == SBObject.gun2) {
				object_r = SBObject.gunner1;
			}
		} else if(Input.GetKeyDown(Player2Keys.prevObject)) {
			if(object_r == SBObject.gunner1) {
				object_r = SBObject.gun2;
			} else if(object_r == SBObject.gunner2) {
				object_r = SBObject.gunner1;
			} else if(object_r == SBObject.eng) {
				object_r = SBObject.gunner2;
			} else if(object_r == SBObject.gun1) {
				object_r = SBObject.eng;
			} else if(object_r == SBObject.gun2) {
				object_r = SBObject.gun1;
			}
		} else if(Input.GetKeyDown(Player2Keys.nextStep)) {
			//accepting sets the next step
			step_r = SBStep.choseRoom;
		}
		
	} else if(step_r == SBStep.choseRoom) {
		//switch through the rooms
		if(Input.GetKeyDown(Player2Keys.nextObject)) {
			if(room_r == SBRoom.cannon1) {
				room_r = SBRoom.cannon2;
			} else if(room_r == SBRoom.cannon2) {
				room_r = SBRoom.medic;
			} else if(room_r == SBRoom.medic) {
				room_r = SBRoom.engineRoom;
			}else if(room_r == SBRoom.engineRoom) {
				room_r = SBRoom.cannon1;
			}
		} else if(Input.GetKeyDown(Player2Keys.prevObject)) {
			if(room_r == SBRoom.cannon1) {
				room_r = SBRoom.engineRoom;
			} else if(room_r == SBRoom.cannon2) {
				room_r = SBRoom.cannon1;
			} else if(room_r == SBRoom.medic) {
				room_r = SBRoom.cannon2;
			}else if(room_r == SBRoom.engineRoom) {
				room_r = SBRoom.medic;
			}
		} else if(Input.GetKeyDown(Player2Keys.nextStep)) {
			step_r = SBStep.choseOjbect;
			
			if(object_r == SBObject.gunner1 || object_r == SBObject.gunner2 || object_r == SBObject.eng) {
				//let the chars walk into the room
			} else if(object_r == SBObject.gun1 || object_r == SBObject.gun2) {
				//let the gun shoot at the room
			}
			
		} else if(Input.GetKeyDown(Player2Keys.prevStep)) {
			step_r = SBStep.choseOjbect;
		}
	} 
	
	/*
		Left player actionchain
		left = player1
	*/
	else if(step_l == SBStep.choseOjbect) {
		//switch through the chars
		if(Input.GetKeyDown(Player1Keys.nextObject)) {
			if(object_l == SBObject.gunner1) {
				object_l = SBObject.gunner2;
			} else if(object_r == SBObject.gunner2) {
				object_l = SBObject.eng;
			} else if(object_r == SBObject.eng) {
				object_l = SBObject.gun1;
			} else if(object_r == SBObject.gun1) {
				object_l = SBObject.gun2;
			} else if(object_r == SBObject.gun2) {
				object_l = SBObject.gunner1;
			}
		} else if(Input.GetKeyDown(Player1Keys.prevObject)) {
			if(object_l == SBObject.gunner1) {
				object_l = SBObject.gun2;
			} else if(object_r == SBObject.gunner2) {
				object_l = SBObject.gunner1;
			} else if(object_r == SBObject.eng) {
				object_l = SBObject.gunner2;
			} else if(object_r == SBObject.gun1) {
				object_l = SBObject.eng;
			} else if(object_r == SBObject.gun2) {
				object_l = SBObject.gun1;
			}
		} else if(Input.GetKeyDown(Player1Keys.nextStep)) {
			//accepting sets the next step
			step_l = SBStep.choseRoom;
		}
		
	} else if(step_l == SBStep.choseRoom) {
		//switch through the rooms
		if(Input.GetKeyDown(Player1Keys.nextObject)) {
			if(room_l == SBRoom.cannon1) {
				room_l = SBRoom.cannon2;
			} else if(room_l == SBRoom.cannon2) {
				room_l = SBRoom.medic;
			} else if(room_l == SBRoom.medic) {
				room_l = SBRoom.engineRoom;
			}else if(room_l == SBRoom.engineRoom) {
				room_l = SBRoom.cannon1;
			}
		} else if(Input.GetKeyDown(Player1Keys.prevObject)) {
			if(room_l == SBRoom.cannon1) {
				room_l = SBRoom.engineRoom;
			} else if(room_l == SBRoom.cannon2) {
				room_l = SBRoom.cannon1;
			} else if(room_l == SBRoom.medic) {
				room_l = SBRoom.cannon2;
			}else if(room_l == SBRoom.engineRoom) {
				room_l = SBRoom.medic;
			}
		} else if(Input.GetKeyDown(Player1Keys.nextStep)) {
			
			step_l = SBStep.choseOjbect;
			
			//TODO let the char walk into the selected room or let the gun shot a room
		} else if(Input.GetKeyDown(Player1Keys.prevStep)) {
			step_l = SBStep.choseOjbect;
		}
	} 
}