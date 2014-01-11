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

var timer:float;

function Start () {
	timer = 0;
}

function Update () {
	timer += Time.deltaTime;
	if(timer > 5){
		Debug.Log(health);
		timer = 0;
	}
}

public static function updateHealth(player, unit, val:float){
	health[player][unit] = Mathf.Max(0.0, Mathf.Min(100.0, health[player][unit] + val));
	Debug.Log("HealthController: " + player + " - " + unit + " - " + val);
}