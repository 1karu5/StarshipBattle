public static var health: Hashtable = new Hashtable({
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

private var loserName:String;
public static var winner:String;

var timer:float;

function Start () {
	timer = 0;
}

function Update () {
	if (loserName == null){
	
		timer += Time.deltaTime;
		
		if(timer > 5){
			Debug.Log(health);
			timer = 0;
		}
		
		for (var playerName:String in ["playerLeft", "playerRight"]){
			var player:Hashtable = health[playerName];
			if (player["gunner1"] == 0.0 && player["gunner2"] == 0.0 && player["engineer"] == 0.0){
				loserName = playerName;
			}
			if (player["engineer"] == 0.0){
				if (player["r1"] == 0.0 && player["r2"] == 0.0 && player["r3"] == 0.0 && player["r4"] == 0.0){
					loserName = playerName;	
				}
			}
		}
		if (loserName != null){
			var mainLogic:GameObject = GameObject.Find("mainLogic");
			DontDestroyOnLoad(mainLogic);
			if (loserName == "playerLeft"){
				winner = "player right";
			}
			else {
				winner = "player left";
			}
			Application.LoadLevel("endscreen"); 
		}
	}
}

public static function updateHealth(player, unit, val:float){
	health[player][unit] = Mathf.Max(0.0, Mathf.Min(100.0, health[player][unit] + val));
	Debug.Log("HealthController: " + player + " - " + unit + " - " + val);
}

public static function getHealth(player, unit){
	return health[player][unit];
}

function OnGUI() {
	if (loserName == null){
	
	
		var XL = Screen.width * 0.03;
		var XR = Screen.width * 0.92;
	 	var YL = Screen.height * 0.03;
	 	var sX = Screen.width * 0.1;
	 	var sY = Screen.height * 0.1;
		
		GUI.Label(Rect(XL,YL * 1,sX,sY), "r1: "+ health["playerLeft"]["r1"]);
		GUI.Label(Rect(XL,YL * 2,sX,sY), "r2: "+ health["playerLeft"]["r2"]);
		GUI.Label(Rect(XL,YL * 3,sX,sY), "r3: "+ health["playerLeft"]["r3"]);
		GUI.Label(Rect(XL,YL * 4,sX,sY), "r4: "+ health["playerLeft"]["r4"]);
		GUI.Label(Rect(XL,YL * 5,sX,sY), "en: "+ health["playerLeft"]["engineer"]);
		GUI.Label(Rect(XL,YL * 6,sX,sY), "g1: "+ health["playerLeft"]["gunner1"]);
		GUI.Label(Rect(XL,YL * 7,sX,sY), "g2: "+ health["playerLeft"]["gunner2"]);
		
		GUI.Label(Rect(XR,YL * 1,sX,sY), "r1: "+ health["playerRight"]["r1"]);
		GUI.Label(Rect(XR,YL * 2,sX,sY), "r2: "+ health["playerRight"]["r2"]);
		GUI.Label(Rect(XR,YL * 3,sX,sY), "r3: "+ health["playerRight"]["r3"]);
		GUI.Label(Rect(XR,YL * 4,sX,sY), "r4: "+ health["playerRight"]["r4"]);
		GUI.Label(Rect(XR,YL * 5,sX,sY), "en: "+ health["playerRight"]["engineer"]);
		GUI.Label(Rect(XR,YL * 6,sX,sY), "g1: "+ health["playerRight"]["gunner1"]);
		GUI.Label(Rect(XR,YL * 7,sX,sY), "g2: "+ health["playerRight"]["gunner2"]);
	}
}