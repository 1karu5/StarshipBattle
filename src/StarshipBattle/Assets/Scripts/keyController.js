#pragma strict

enum SBStep { choseChar, choseRoom, choseTarget};
enum SBChar { gun1, gun2, eng};
enum SBRoom { cannon1, cannon2, medic, engineRoom};

private var step_r:SBStep;
private var char_r:SBChar;
private var room_r:SBRoom;
private var target_r:SBRoom;

private var step_l:SBStep;
private var char_l:SBChar;
private var room_l:SBRoom;
private var target_l:SBRoom;

function Start () {

	step_r = SBStep.choseChar;
	char_r = SBChar.gun1;
	room_r = SBRoom.cannon1;
	target_r = SBRoom.cannon1;
	
	step_l = SBStep.choseChar;
	
}

function Update () {
	/*
		Right player actionchain
		right = player2
	*/
	if(step_r == SBStep.choseChar) {
		//switch through the chars
		if(Input.GetKeyDown(Player2Keys.nextObject)) {
			if(char_r == SBChar.gun1) {
				char_r = SBChar.gun2;
			} else if(char_r == SBChar.gun2) {
				char_r = SBChar.eng;
			} else if(char_r == SBChar.eng) {
				char_r = SBChar.gun1;
			}
		} else if(Input.GetKeyDown(Player2Keys.prevObject)) {
			if(char_r == SBChar.gun1) {
				char_r = SBChar.eng;
			} else if(char_r == SBChar.gun2) {
				char_r = SBChar.gun1;
			} else if(char_r == SBChar.eng) {
				char_r = SBChar.gun2;
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
			//accepting sets the next step which depends on the selected char
			if(char_r != SBChar.eng) {
				//if the chosen char is a gunner, a target needs to be selected
				step_r = SBStep.choseTarget;
			} else {
				//if an engineer was chose, the actionchain is completed
				step_r = SBStep.choseChar;
			}
			
			//TODO let the char walk into the selected room
		} else if(Input.GetKeyDown(Player2Keys.prevStep)) {
			step_r = SBStep.choseChar;
		}
	} else if(step_r == SBStep.choseTarget) {
		//switch through the rooms (target
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
			//the actionchain is completed
			step_r = SBStep.choseChar;	
			
			//TODO set the target room for the tower
		} else if(Input.GetKeyDown(Player2Keys.prevStep)) {
			step_r = SBStep.choseRoom;
		}
	}
	
	/*
		Left player actionchain
		left = player1
	*/
	else if(step_l == SBStep.choseChar) {
		//switch through the chars
		if(Input.GetKeyDown(Player1Keys.nextObject)) {
			if(char_l == SBChar.gun1) {
				char_l = SBChar.gun2;
			} else if(char_l == SBChar.gun2) {
				char_l = SBChar.eng;
			} else if(char_l == SBChar.eng) {
				char_l = SBChar.gun1;
			}
		} else if(Input.GetKeyDown(Player1Keys.prevObject)) {
			if(char_l == SBChar.gun1) {
				char_l = SBChar.eng;
			} else if(char_l == SBChar.gun2) {
				char_l = SBChar.gun1;
			} else if(char_l == SBChar.eng) {
				char_l = SBChar.gun2;
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
			//accepting sets the next step which depends on the selected char
			if(char_l != SBChar.eng) {
				//if the chosen char is a gunner, a target needs to be selected
				step_l = SBStep.choseTarget;
			} else {
				//if an engineer was chose, the actionchain is completed
				step_l = SBStep.choseChar;
			}
			
			//TODO let the char walk into the selected room
		} else if(Input.GetKeyDown(Player1Keys.prevStep)) {
			step_l = SBStep.choseChar;
		}
	} else if(step_l == SBStep.choseTarget) {
		//switch through the rooms (target
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
			//the actionchain is completed
			step_l = SBStep.choseChar;		
			
			//TODO set the target room for the tower
		} else if(Input.GetKeyDown(Player1Keys.prevStep)) {
			step_l = SBStep.choseRoom;
		}
	}
}