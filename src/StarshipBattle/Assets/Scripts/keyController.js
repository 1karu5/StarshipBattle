#pragma strict

public var player1Objects:actionClass[];
private var player1Selected:int=0;

public var player2Objects:actionClass[];
private var player2Selected:int=0;

function Start(){
	player1Objects = new actionClass[5];
	//find scripts from player 1
	player1Objects[0]=GameObject.Find("playerLeft").transform.FindChild("CannonBack").gameObject.GetComponent("cannon");
	player1Objects[1]=GameObject.Find("playerLeft").transform.FindChild("CannonFront").gameObject.GetComponent("cannon");
	
	player1Objects[2]=GameObject.Find("playerLeft").transform.FindChild("engineer").gameObject.GetComponent("characterMovement");
	player1Objects[3]=GameObject.Find("playerLeft").transform.FindChild("gunner1").gameObject.GetComponent("characterMovement");
	player1Objects[4]=GameObject.Find("playerLeft").transform.FindChild("gunner2").gameObject.GetComponent("characterMovement");

	//same here with player 2

}



function Update () {
	//shields
	if(Input.GetKeyDown(Player1Keys.shield)) {
		Debug.Log("toggle shield playerleft");
		schildController.enabling("playerLeft");
	} else if(Input.GetKeyDown(Player2Keys.shield)) {
		Debug.Log("toggle shield playerright");
		schildController.enabling("playerRight");
	}
	
	//player one
	if(Input.GetKeyDown(Player1Keys.nextObject)){	
		selectNextObjPlayer1();
	}else if(Input.GetKeyDown(Player1Keys.one)){
		player1Objects[player1Selected].action(1);	
	}
	else if(Input.GetKeyDown(Player1Keys.two)){
		player1Objects[player1Selected].action(2);	
	}
	else if(Input.GetKeyDown(Player1Keys.three)){
		player1Objects[player1Selected].action(3);	
	}
	else if(Input.GetKeyDown(Player1Keys.four)){
		player1Objects[player1Selected].action(4);	
	}
	/*
	//player two
	if(Input.GetKeyDown(Player2Keys.nextObject)){	
		selectNextObjPlayer2();
	}else if(Input.GetKeyDown(Player2Keys.one)){
		player2Objects[player2Selected].action(1);	
	}
	else if(Input.GetKeyDown(Player2Keys.two)){
		player2Objects[player2Selected].action(2);	
	}
	else if(Input.GetKeyDown(Player1Keys.three)){
		player2Objects[player2Selected].action(3);	
	}
	else if(Input.GetKeyDown(Player2Keys.four)){
		player2Objects[player2Selected].action(4);	
	}	*/
}

private function selectNextObjPlayer1(){	
	player1Objects[player1Selected].highlight(false);	//unhighlight the old one
	Debug.Log((player1Selected+1) % 5);
	player1Selected = (player1Selected+1) % 5;
	player1Objects[player1Selected].highlight(true);	//highlight the new
}


private function selectNextObjPlayer2(){
	player2Objects[player2Selected].highlight(false);	//unhighlight the old one	
	player2Selected = (player2Selected+1) % 5;
	player2Objects[player2Selected].highlight(true);	//highlight the new
}