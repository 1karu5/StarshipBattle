#pragma strict

enum SBStep { choseOjbect, choseRoom};
enum SBObject { gunner1, gunner2, eng, gun1, gun2};
enum SBRoom { cannon1, medic, engineRoom, cannon2};

private var step_r:SBStep;
private var object_r:SBObject;
private var room_r:SBRoom;
private var chosenChar_R;
private var chosenRoomId_R;

private var step_l:SBStep;
private var object_l:SBObject;
private var room_l:SBRoom;
private var chosenChar_L;
private var chosenRoomId_L;

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
		Left player actionchain
		left = player1
	*/
	if(step_l == SBStep.choseOjbect) {
	
		//switch through the chars
		if(Input.GetKeyDown(Player1Keys.nextObject)) {
			Debug.Log("player1 next obj");
			
			if(object_l == SBObject.gunner1) {
				object_l = SBObject.gunner2;
				chosenChar_L = "gunner2";
			} else if(object_l == SBObject.gunner2) {
				object_l = SBObject.eng;
				chosenChar_L = "engineer";
			} else if(object_l == SBObject.eng) {
				object_l = SBObject.gun1;
				chosenChar_L = "CannonBack";
			} else if(object_l == SBObject.gun1) {
				object_l = SBObject.gun2;
				chosenChar_L = "CannonFront";
			} else if(object_l == SBObject.gun2) {
				object_l = SBObject.gunner1;
				chosenChar_L = "gunner1";
			}
		} else if(Input.GetKeyDown(Player1Keys.prevObject)) {
			Debug.Log("player1 prev obj");
			
			if(object_l == SBObject.gunner1) {
				object_l = SBObject.gun2;
				chosenChar_L = "CannonFront";
			} else if(object_l == SBObject.gunner2) {
				object_l = SBObject.gunner1;
				chosenChar_L = "gunner1";
			} else if(object_l == SBObject.eng) {
				object_l = SBObject.gunner2;
				chosenChar_L = "gunner2";
			} else if(object_l == SBObject.gun1) {
				object_l = SBObject.eng;
				chosenChar_L = "engineer";
			} else if(object_l == SBObject.gun2) {
				object_l = SBObject.gun1;
				chosenChar_L = "CannonBack";
			}
		} else if(Input.GetKeyDown(Player1Keys.nextStep)) {
			//accepting sets the next step
			step_l = SBStep.choseRoom;
			
			//reset selection
			selectObject("playerLeft", null);
			
			Debug.Log(chosenChar_L + " SELECTED by player 1");
			
			
			//
		}
		if(chosenChar_L != null) {
			selectObject("playerLeft", chosenChar_L);
		}
		
	} else if(step_l == SBStep.choseRoom) {
		//switch through the rooms
		if(Input.GetKeyDown(Player1Keys.nextObject)) {
			Debug.Log("player1 next room");
			if(room_l == SBRoom.cannon1) {
				room_l = SBRoom.cannon2;
				chosenRoomId_L = 7;
			} else if(room_l == SBRoom.cannon2) {
				room_l = SBRoom.medic;
				chosenRoomId_L = 5;
			} else if(room_l == SBRoom.medic) {
				room_l = SBRoom.engineRoom;
				chosenRoomId_L = 3;
			}else if(room_l == SBRoom.engineRoom) {
				room_l = SBRoom.cannon1;
				chosenRoomId_L = 1;
			}
		} else if(Input.GetKeyDown(Player1Keys.prevObject)) {
			Debug.Log("player1 next room");
			if(room_l == SBRoom.cannon1) {
				room_l = SBRoom.engineRoom;
				chosenRoomId_L = 3;
			} else if(room_l == SBRoom.cannon2) {
				room_l = SBRoom.cannon1;
				chosenRoomId_L = 1;
			} else if(room_l == SBRoom.medic) {
				room_l = SBRoom.cannon2;
				chosenRoomId_L = 7;
			}else if(room_l == SBRoom.engineRoom) {
				room_l = SBRoom.medic;
				chosenRoomId_L = 5;
			}
		} else if(Input.GetKeyDown(Player1Keys.nextStep)) {
			
			step_l = SBStep.choseOjbect;
			Debug.Log(chosenRoomId_L + " SELECTED by player 1");
			
			//let the char walk into the selected room or let the gun shot a room
			if(isSelectedObjectAChar(object_l))  {
				moveChar("playerLeft", chosenChar_L, chosenRoomId_L);
			} else {
			
			}
		} else if(Input.GetKeyDown(Player1Keys.prevStep)) {
			step_l = SBStep.choseOjbect;
		}
	} 
	
	/*
		Right player actionchain
		right = player2
	*/
	if(step_r == SBStep.choseOjbect) {
	
		//switch through the chars
		if(Input.GetKeyDown(Player2Keys.nextObject)) {
			Debug.Log("player2 next obj");
			
			if(object_r == SBObject.gunner1) {
				object_r = SBObject.gunner2;
				chosenChar_R = "gunner2";
			} else if(object_r == SBObject.gunner2) {
				object_r = SBObject.eng;
				chosenChar_R = "engineer";
			} else if(object_r == SBObject.eng) {
				object_r = SBObject.gun1;
				chosenChar_R = "CannonBack";
			} else if(object_r == SBObject.gun1) {
				object_r = SBObject.gun2;
				chosenChar_R = "CannonFront";
			} else if(object_r == SBObject.gun2) {
				object_r = SBObject.gunner1;
				chosenChar_R = "gunner1";
			}
		} else if(Input.GetKeyDown(Player2Keys.prevObject)) {
			Debug.Log("player2 prev obj");
			
			if(object_r == SBObject.gunner1) {
				object_r = SBObject.gun2;
				chosenChar_R = "CannonFront";
			} else if(object_r == SBObject.gunner2) {
				object_r = SBObject.gunner1;
				chosenChar_R = "gunner1";
			} else if(object_r == SBObject.eng) {
				object_r = SBObject.gunner2;
				chosenChar_R = "gunner2";
			} else if(object_r == SBObject.gun1) {
				object_r = SBObject.eng;
				chosenChar_R = "engineer";
			} else if(object_r == SBObject.gun2) {
				object_r = SBObject.gun1;
				chosenChar_R = "CannonBack";
			}
		} else if(Input.GetKeyDown(Player2Keys.nextStep)) {
			//accepting sets the next step
			step_r = SBStep.choseRoom;
			
			//reset selection
			selectObject("playerRight", null);
			
			Debug.Log(chosenChar_R + " SELECTED by player 2");
			
			
			//
		}
		if(chosenChar_R != null) {
			selectObject("playerRight", chosenChar_R);
		}
		
	} else if(step_r == SBStep.choseRoom) {
		//switch through the rooms
		if(Input.GetKeyDown(Player2Keys.nextObject)) {
			Debug.Log("player2 next room");
			if(room_r == SBRoom.cannon1) {
				room_r = SBRoom.cannon2;
				chosenRoomId_R = 7;
			} else if(room_r == SBRoom.cannon2) {
				room_r = SBRoom.medic;
				chosenRoomId_R = 5;
			} else if(room_r == SBRoom.medic) {
				room_r = SBRoom.engineRoom;
				chosenRoomId_R = 3;
			}else if(room_r == SBRoom.engineRoom) {
				room_r = SBRoom.cannon1;
				chosenRoomId_R = 1;
			}
		} else if(Input.GetKeyDown(Player2Keys.prevObject)) {
			Debug.Log("player2 next room");
			if(room_r == SBRoom.cannon1) {
				room_r = SBRoom.engineRoom;
				chosenRoomId_R = 3;
			} else if(room_r == SBRoom.cannon2) {
				room_r = SBRoom.cannon1;
				chosenRoomId_R = 1;
			} else if(room_r == SBRoom.medic) {
				room_r = SBRoom.cannon2;
				chosenRoomId_R = 7;
			}else if(room_r == SBRoom.engineRoom) {
				room_r = SBRoom.medic;
				chosenRoomId_R = 5;
			}
		} else if(Input.GetKeyDown(Player2Keys.nextStep)) {
			
			step_r = SBStep.choseOjbect;
			Debug.Log(chosenRoomId_R + " SELECTED by player 2");
			
			//let the char walk into the selected room or let the gun shot a room
			if(isSelectedObjectAChar(object_r))  {
				moveChar("playerRight", chosenChar_R, chosenRoomId_R);
			} else {
			
			}
		} else if(Input.GetKeyDown(Player2Keys.prevStep)) {
			step_r = SBStep.choseOjbect;
		}
	} 
}

function selectObject(playerName, objectName) {
	//TODO hightlight the selected object and dont change the size

	GameObject.Find(playerName).transform.FindChild("engineer").gameObject.transform.localScale = Vector3(0.2,0.2,0.2);
	GameObject.Find(playerName).transform.FindChild("gunner1").gameObject.transform.localScale = Vector3(0.2,0.2,0.2);
	GameObject.Find(playerName).transform.FindChild("gunner2").gameObject.transform.localScale = Vector3(0.2,0.2,0.2);
	
	if(objectName != null) {
		GameObject.Find(playerName).transform.FindChild(objectName).gameObject.transform.localScale = Vector3(0.4,0.4,0.4);
	}
} 

function moveChar(playerName, objectName, waypointNumber) {
	var playerLoc;
	
	if(playerName == "playerLeft") {
		playerLoc = "L_";
	} else {
		playerLoc = "R_";
	}

	Debug.Log("moving "+objectName +" of "+playerName+ " to waypoint"+"Waypoint_" + playerLoc + waypointNumber);

	var waypointLoc : Vector3 = GameObject.Find("Waypoint_" + playerLoc + waypointNumber).transform.position;
	GameObject.Find(playerName).transform.FindChild(objectName).gameObject.GetComponent(movement).endPoint = waypointLoc;
}

function isSelectedObjectAChar(object : SBObject) {
	if(object == SBObject.gunner1) {
		return true;
	} else if(object == SBObject.gunner2) {
		return true;
	} else if(object == SBObject.eng) {
		return true;
	} else {
		return false;
	}
} 