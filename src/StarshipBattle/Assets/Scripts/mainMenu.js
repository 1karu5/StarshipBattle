/*#pragma strict

private var settingControls:boolean;
public static var gameStarted:boolean;
private var buttonX:float;
private var buttonY:float;
private var buttonH:float;
private var buttonW:float;

//controlbuttons
private var lastKeyCode = "";
private var p1_prevObject = Player1Keys.prevObject.ToString();
private var p1_nextObject = Player1Keys.nextObject.ToString();
private var p1_prevStep = Player1Keys.prevStep.ToString();
private var p1_nextStep = Player1Keys.nextStep.ToString();
private var p1_shield = Player1Keys.shield.ToString();
private var p2_prevObject = Player2Keys.prevObject.ToString();
private var p2_nextObject = Player2Keys.nextObject.ToString();
private var p2_prevStep = Player2Keys.prevStep.ToString();
private var p2_nextStep = Player2Keys.nextStep.ToString();
private var p2_shield = Player2Keys.shield.ToString();


function Start(){
	buttonX=Screen.width * 0.05;
	buttonY=Screen.width * 0.05;
	buttonH=Screen.width * 0.1;
	buttonW=Screen.width * 0.1;
	
	gameStarted = false;
	settingControls = false;
}

function OnGUI(){
	if(settingControls) {
		if(GUI.Button(Rect(buttonX,buttonY*1.6+(buttonH*3),buttonH,buttonW),"back")){
			Debug.Log("setting controls");
			settingControls = false;
			
			Player1Keys.prevObject = System.Enum.Parse(KeyCode, p1_prevObject);
			Player1Keys.nextObject = System.Enum.Parse(KeyCode, p1_nextObject);
			Player1Keys.prevStep = System.Enum.Parse(KeyCode, p1_prevStep);
			Player1Keys.nextStep = System.Enum.Parse(KeyCode, p1_nextStep);
			Player1Keys.shield = System.Enum.Parse(KeyCode, p1_shield);
			
			Player2Keys.prevObject = System.Enum.Parse(KeyCode, p2_prevObject);
			Player2Keys.nextObject = System.Enum.Parse(KeyCode, p2_nextObject);
			Player2Keys.prevStep = System.Enum.Parse(KeyCode, p2_prevStep);
			Player2Keys.nextStep = System.Enum.Parse(KeyCode, p2_nextStep);
			Player2Keys.shield = System.Enum.Parse(KeyCode, p2_shield);
		}
		
		
		//this block is used for debugging
		GUI.Label(Rect(10,10,200,25),"Last KeyCode: " + lastKeyCode);
		var e = Event.current;
		Debug.Log(e.ToString());
	    if (e.isKey) {
	    	lastKeyCode = e.keyCode.ToString(); 
	    	Debug.Log(e.ToString());
	    }
		
		
		//Keys player_1
		GUI.Label(Rect(200,10,200,25),"P1 previous object:");
		p1_prevObject = GUI.TextField(Rect(350,10,100,25),p1_prevObject);
		
		GUI.Label(Rect(200,30,200,25),"P1 next object:");
		p1_nextObject = GUI.TextField(Rect(350,30,100,25),p1_nextObject);
		
		GUI.Label(Rect(200,50,200,25),"P1 previous step :");
		p1_prevStep = GUI.TextField(Rect(350,50,100,25),p1_prevStep);
		
		GUI.Label(Rect(200,70,200,25),"P1 next step :");
		p1_nextStep = GUI.TextField(Rect(350,70,100,25),p1_nextStep);
		
		GUI.Label(Rect(200,90,200,25),"P1 shield:");
		p1_shield = GUI.TextField(Rect(350,90,100,25),p1_shield);
		
		//Keys player_2
		GUI.Label(Rect(500,10,200,25),"P2 previous object:");
		p2_prevObject = GUI.TextField(Rect(650,10,100,25),p2_prevObject);
		
		GUI.Label(Rect(500,30,200,25),"P2 next object:");
		p2_nextObject = GUI.TextField(Rect(650,30,100,25),p2_nextObject);
		
		GUI.Label(Rect(500,50,200,25),"P2 previous step :");
		p2_prevStep = GUI.TextField(Rect(650,50,100,25),p2_prevStep);
		
		GUI.Label(Rect(500,70,200,25),"P2 next step :");
		p2_nextStep = GUI.TextField(Rect(650,70,100,25),p2_nextStep);
		
		GUI.Label(Rect(500,90,200,25),"P2 shield:");
		p2_shield = GUI.TextField(Rect(650,90,100,25),p2_shield);
		
	} else if(!gameStarted){
		
		//start the game
		if(GUI.Button(Rect(buttonX,buttonY,buttonH,buttonW),"Start Game")){
			Debug.Log("started game");
			gameStarted = true;
			Application.LoadLevel("main"); 
		}
		
		
		//set controls
		if(GUI.Button(Rect(buttonX,buttonY*1.6+(buttonH*3),buttonH,buttonW),"Set controls")){
			Debug.Log("setting controls");
			settingControls = true;
		}
	}
}*/