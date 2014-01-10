#pragma strict

enum SBStep { choseOjbect, choseRoom};

private var step_r:SBStep;
private var chosenChar_r;
private var chosenRoomId_r;

private var step_l:SBStep;
private var chosenChar_l;
private var chosenRoomId_l;

function Start () {

	step_r = SBStep.choseOjbect;
	step_l = SBStep.choseOjbect;
	
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
			
			if(chosenChar_l == "gunner1") {
				chosenChar_l = "gunner2";
			} else if(chosenChar_l == "gunner2") {
				chosenChar_l = "engineer";
			} else if(chosenChar_l == "engineer") {
				chosenChar_l = "CannonBack";
			} else if(chosenChar_l == "CannonBack") {
				chosenChar_l = "CannonFront";
			} else if(chosenChar_l == "CannonFront") {
				chosenChar_l = "gunner1";
			} else {
				chosenChar_l = "gunner1";
			}
		} else if(Input.GetKeyDown(Player1Keys.prevObject)) {
			Debug.Log("player1 prev obj");
			
			if(chosenChar_l == "gunner1") {
				chosenChar_l = "CannonFront";
			} else if(chosenChar_l == "gunner2") {
				chosenChar_l = "gunner1";
			} else if(chosenChar_l == "engineer") {
				chosenChar_l = "gunner2";
			} else if(chosenChar_l == "CannonBack") {
				chosenChar_l = "engineer";
			} else if(chosenChar_l == "CannonFront") {
				chosenChar_l = "CannonBack";
			} else {
				chosenChar_l = "gunner1";
			}
		} else if(Input.GetKeyDown(Player1Keys.nextStep)) {
			//accepting sets the next step
			step_l = SBStep.choseRoom;
			
			//reset selection
			selectObject("playerLeft", null);
			
			Debug.Log(chosenChar_l + " SELECTED by player 1");
			
			
			//
		}
		if(chosenChar_l != null) {
			selectObject("playerLeft", chosenChar_l);
		}
		
	} else if(step_l == SBStep.choseRoom) {
		//switch through the rooms
		if(Input.GetKeyDown(Player1Keys.nextObject)) {
			Debug.Log("player1 next room");
			if(chosenRoomId_l == 1) {
				chosenRoomId_l = 7;
			} else if(chosenRoomId_l == 7) {
				chosenRoomId_l = 5;
			} else if(chosenRoomId_l == 5) {
				chosenRoomId_l = 3;
			}else if(chosenRoomId_l == 3) {
				chosenRoomId_l = 1;
			} else {
				chosenRoomId_l = 1;
			}
		} else if(Input.GetKeyDown(Player1Keys.prevObject)) {
			Debug.Log("player1 next room");
			if(chosenRoomId_l == 1) {
				chosenRoomId_l = 3;
			} else if(chosenRoomId_l == 7) {
				chosenRoomId_l = 1;
			} else if(chosenRoomId_l == 5) {
				chosenRoomId_l = 7;
			}else if(chosenRoomId_l == 3) {
				chosenRoomId_l = 5;
			} else {
				chosenRoomId_l = 1;
			}
		} else if(Input.GetKeyDown(Player1Keys.nextStep)) {
			
			step_l = SBStep.choseOjbect;
			Debug.Log(chosenRoomId_l + " SELECTED by player 1");
			
			//let the char walk into the selected room or let the gun shot a room
			if(isSelectedObjectAChar(chosenChar_l))  {
				moveChar("playerLeft", chosenChar_l, chosenRoomId_l);
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
			
			if(chosenChar_r == "gunner1") {
				chosenChar_r = "gunner2";
			} else if(chosenChar_r == "gunner2") {
				chosenChar_r = "engineer";
			} else if(chosenChar_r == "engineer") {
				chosenChar_r = "CannonBack";
			} else if(chosenChar_r == "CannonBack") {
				chosenChar_r = "CannonFront";
			} else if(chosenChar_r == "CannonFront") {
				chosenChar_r = "gunner1";
			} else {
				chosenChar_r = "gunner1";
			}
		} else if(Input.GetKeyDown(Player2Keys.prevObject)) {
			Debug.Log("player2 prev obj");
			
			if(chosenChar_r == "gunner1") {
				chosenChar_r = "CannonFront";
			} else if(chosenChar_r == "gunner2") {
				chosenChar_r = "gunner1";
			} else if(chosenChar_r == "engineer") {
				chosenChar_r = "gunner2";
			} else if(chosenChar_r == "CannonBack") {
				chosenChar_r = "engineer";
			} else if(chosenChar_r == "CannonFront") {
				chosenChar_r = "CannonBack";
			} else {
				chosenChar_r = "gunner1";
			}
		} else if(Input.GetKeyDown(Player2Keys.nextStep)) {
			//accepting sets the next step
			step_r = SBStep.choseRoom;
			
			//reset selection
			selectObject("playerRight", null);
			
			Debug.Log(chosenChar_r + " SELECTED by player 2");
			
			
			//
		}
		if(chosenChar_r != null) {
			selectObject("playerRight", chosenChar_r);
		}
		
	} else if(step_r == SBStep.choseRoom) {
		//switch through the rooms
		if(Input.GetKeyDown(Player2Keys.nextObject)) {
			Debug.Log("player2 next room");
			if(chosenRoomId_r == 1) {
				chosenRoomId_r = 7;
			} else if(chosenRoomId_r == 7) {
				chosenRoomId_r = 5;
			} else if(chosenRoomId_r == 5) {
				chosenRoomId_r = 3;
			}else if(chosenRoomId_r == 3) {
				chosenRoomId_r = 1;
			} else {
				chosenRoomId_r = 1;
			}
		} else if(Input.GetKeyDown(Player2Keys.prevObject)) {
			Debug.Log("player2 next room");
			if(chosenRoomId_r == 1) {
				chosenRoomId_r = 3;
			} else if(chosenRoomId_r == 7) {
				chosenRoomId_r = 1;
			} else if(chosenRoomId_r == 5) {
				chosenRoomId_r = 7;
			}else if(chosenRoomId_r == 3) {
				chosenRoomId_r = 5;
			} else {
				chosenRoomId_r = 1;
			}
		} else if(Input.GetKeyDown(Player2Keys.nextStep)) {
			
			step_r = SBStep.choseOjbect;
			Debug.Log(chosenRoomId_r + " SELECTED by player 2");
			
			//let the char walk into the selected room or let the gun shot a room
			if(isSelectedObjectAChar(chosenChar_r))  {
				moveChar("playerRight", chosenChar_r, chosenRoomId_r);
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

function isSelectedObjectAChar(object) {
	if(object == "gunner1") {
		return true;
	} else if(object == "gunner2") {
		return true;
	} else if(object == "engineer") {
		return true;
	} else {
		return false;
	}
} 