#pragma strict

private var settingControls:boolean;
public static var gameStarted:boolean;
private var buttonX:float;
private var buttonY:float;
private var buttonH:float;
private var buttonW:float;

//controlbuttons
private var lastKeyCode = "";
private var p1_one = Player1Keys.one.ToString();
private var p1_two = Player1Keys.two.ToString();
private var p1_three = Player1Keys.three.ToString();
private var p1_four = Player1Keys.four.ToString();
private var p1_nextObject = Player1Keys.nextObject.ToString();
private var p1_shield = Player1Keys.shield.ToString();

private var p2_one = Player2Keys.one.ToString();
private var p2_two = Player2Keys.one.ToString();
private var p2_three = Player2Keys.three.ToString();
private var p2_four = Player2Keys.four.ToString();
private var p2_nextObject = Player2Keys.nextObject.ToString();
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
			
			Player1Keys.one = System.Enum.Parse(KeyCode, p1_one);
			Player1Keys.two = System.Enum.Parse(KeyCode, p1_two);
			Player1Keys.three = System.Enum.Parse(KeyCode, p1_three);
			Player1Keys.four = System.Enum.Parse(KeyCode, p1_four);
			Player1Keys.nextObject = System.Enum.Parse(KeyCode, p1_nextObject);
			Player1Keys.shield = System.Enum.Parse(KeyCode, p1_shield);
			
			Player2Keys.one = System.Enum.Parse(KeyCode, p2_one);
			Player2Keys.two = System.Enum.Parse(KeyCode, p2_two);
			Player2Keys.three = System.Enum.Parse(KeyCode, p2_three);
			Player2Keys.four = System.Enum.Parse(KeyCode, p2_four);
			Player2Keys.nextObject = System.Enum.Parse(KeyCode, p2_nextObject);
			Player2Keys.shield = System.Enum.Parse(KeyCode, p2_shield);
		}
		
		
		//this block is used for debugging
		GUI.Label(Rect(10,10,200,25),"Last KeyCode: " + lastKeyCode);
		var e = Event.current;
		Debug.Log(e.ToString());
	    if (e.isKey && e.keyCode != KeyCode.None) {
	    	lastKeyCode = e.keyCode.ToString(); 
	    	Debug.Log(e.ToString());
	    }
		
		
		//Keys player_1
		GUI.Label(Rect(200,10,200,25),"P1 one:");
		p1_one = GUI.TextField(Rect(300,10,100,25),p1_one);
		
		GUI.Label(Rect(200,30,200,25),"P1 two:");
		p1_two = GUI.TextField(Rect(300,30,100,25),p1_two);
		
		GUI.Label(Rect(200,50,200,25),"P1 three:");
		p1_three = GUI.TextField(Rect(300,50,100,25),p1_three);
		
		GUI.Label(Rect(200,70,200,25),"P1 four:");
		p1_four = GUI.TextField(Rect(300,70,100,25),p1_four);
		
		GUI.Label(Rect(200,90,200,25),"P1 shield:");
		p1_shield = GUI.TextField(Rect(300,90,100,25),p1_shield);
		
		GUI.Label(Rect(200,110,200,25),"P1 next Object:");
		p1_nextObject = GUI.TextField(Rect(300,110,100,25),p1_nextObject);
		
		
		
		//Keys player_2
		GUI.Label(Rect(450,10,200,25),"P2 one:");
		p2_one = GUI.TextField(Rect(550,10,100,25),p2_one);
		
		GUI.Label(Rect(450,30,200,25),"P2 two:");
		p2_two = GUI.TextField(Rect(550,30,100,25),p2_two);
		
		GUI.Label(Rect(450,50,200,25),"P2 three:");
		p2_three = GUI.TextField(Rect(550,50,100,25),p2_three);
		
		GUI.Label(Rect(450,70,200,25),"P2 four:");
		p2_four = GUI.TextField(Rect(550,70,100,25),p2_four);
		
		GUI.Label(Rect(450,90,200,25),"P2 shield:");
		p2_shield = GUI.TextField(Rect(550,90,100,25),p2_shield);
		
		GUI.Label(Rect(450,110,200,25),"P2 next Object:");
		p2_nextObject = GUI.TextField(Rect(550,110,100,25),p2_nextObject);
		
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
}