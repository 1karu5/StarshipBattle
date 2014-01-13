#pragma strict

public static var health: Hashtable;;

private var loserName:String;
private static var _characterDeath : AudioClip;

var timer:float;
public var characterDeath : AudioClip;

function Start () {
	timer = 0;
	_characterDeath = characterDeath;
	health = new Hashtable({
		"playerLeft": {
			"r1": 100.0,
			"r2": 100.0,
			"r3": 100.0,
			"r4": 100.0,
			"engineer": 100.0,
			"gunner1": 100.0,
			"gunner2": 100.0
		},
		"playerRight": {
			"r1": 100.0,
			"r2": 100.0,
			"r3": 100.0,
			"r4": 100.0,
			"engineer": 100.0,
			"gunner1": 100.0,
			"gunner2": 100.0
		}
	});
}

function Update () {
	if (loserName == null){
	
		timer += Time.deltaTime;
		
		if(timer > 5){
			//Debug.Log(health);
			timer = 0;
		}
		
		for (var playerName:String in ["playerLeft", "playerRight"]){
			var player:Hashtable = health[playerName];
			if (player["gunner1"] == 0.0 && player["gunner2"] == 0.0 && player["engineer"] == 0.0){
				loserName = playerName;
			}
			
			if (player["r1"] == 0.0 && player["r2"] == 0.0 && player["r3"] == 0.0 && player["r4"] == 0.0){
				loserName = playerName;	
			}
			
		}
		if (loserName != null){
			var winnerObj:GameObject = GameObject.Find("winner");
			DontDestroyOnLoad(winnerObj);
			if (loserName == "playerLeft"){
				winner.winnerName = "player right";
			}
			else {
				winner.winnerName = "player left";
			}
			Application.LoadLevel("endscreen"); 
		}
	}
}

public static function updateHealth(player, unit, val:float){
	var playerTemp:Hashtable = health[player];
	var unitTemp:float = playerTemp[unit];

	playerTemp[unit] = Mathf.Max(0.0, Mathf.Min(100.0, unitTemp + val));
	//Debug.Log("HealthController: " + player + " - " + unit + " - " + val);
	var object : GameObject = GameObject.Find(player).transform.FindChild(unit).gameObject;
	
	var unitTemp2:float = playerTemp[unit];
	
	if(unitTemp2 <= 0.0 && (unit == "gunner1" || unit == "gunner2" || unit == "engineer") && object != null) {
		AudioSource.PlayClipAtPoint(_characterDeath, object.transform.position);
		Destroy(object);
	}
}

public static function getHealth(player, unit){
	var pTemp:Hashtable = health[player];
	return pTemp[unit];
}

function OnGUI() {
	if (loserName == null){
	
	
		var XL = Screen.width * 0.03;
		var XR = Screen.width * 0.92;
	 	var YL = Screen.height * 0.03;
	 	var sX = Screen.width * 0.1;
	 	var sY = Screen.height * 0.1;
		
		var playerLeftHashTable:Hashtable = health["playerLeft"];
		var playerRightHashTable:Hashtable = health["playerRight"];
		
		GUI.Label(Rect(XL,YL * 1,sX,sY), "r1: "+ playerLeftHashTable["r1"]);
		GUI.Label(Rect(XL,YL * 2,sX,sY), "r2: "+ playerLeftHashTable["r2"]);
		GUI.Label(Rect(XL,YL * 3,sX,sY), "r3: "+ playerLeftHashTable["r3"]);
		GUI.Label(Rect(XL,YL * 4,sX,sY), "r4: "+ playerLeftHashTable["r4"]);
		//GUI.Label(Rect(XL,YL * 5,sX,sY), "en: "+ playerLeftHashTable["engineer"]);
		//GUI.Label(Rect(XL,YL * 6,sX,sY), "g1: "+ playerLeftHashTable["gunner1"]);
		//GUI.Label(Rect(XL,YL * 7,sX,sY), "g2: "+ playerLeftHashTable["gunner2"]);
		
		GUI.Label(Rect(XR,YL * 1,sX,sY), "r1: "+ playerRightHashTable["r1"]);
		GUI.Label(Rect(XR,YL * 2,sX,sY), "r2: "+ playerRightHashTable["r2"]);
		GUI.Label(Rect(XR,YL * 3,sX,sY), "r3: "+ playerRightHashTable["r3"]);
		GUI.Label(Rect(XR,YL * 4,sX,sY), "r4: "+ playerRightHashTable["r4"]);
		//GUI.Label(Rect(XR,YL * 5,sX,sY), "en: "+ playerRightHashTable["engineer"]);
		//GUI.Label(Rect(XR,YL * 6,sX,sY), "g1: "+ playerRightHashTable["gunner1"]);
		//GUI.Label(Rect(XR,YL * 7,sX,sY), "g2: "+ playerRightHashTable["gunner2"]);
	}
}