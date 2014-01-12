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