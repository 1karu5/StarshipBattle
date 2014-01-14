#pragma strict

public var ownerName : String;
public var character:String;
public var healthTex:Texture;

private var healthBarHeight : int= 5;
private var healthBarLeft : int= 50;
private var barTop : int= 1;
private var healthBarLength : float= 100;

private var currentStyle:GUIStyle;
private var currentColor:Color;

function updateStyles(){
	currentStyle = new GUIStyle( GUI.skin.box );
	var pix:Color[] = new Color[2 * 2];
    for( var i:int = 0; i < pix.Length; ++i )
    {
        pix[i] = currentColor;
    }
    var tex:Texture2D = new Texture2D( 2, 2 );
    tex.SetPixels(pix);
    tex.Apply();
	currentStyle.normal.background = tex;
}

function Update () {
	var hTemp:float = healthController.getHealth(ownerName, character);
	healthBarLength = (hTemp / 250) * 100;
	
	if (ownerName == null){
		ownerName = transform.root.name;
	}
	if (character == null){
		character = transform.name;
	}
}

function OnGUI () {
	updateStyles();

	var screenPosition = Camera.main.WorldToScreenPoint(new Vector3(transform.position.x, transform.position.y,transform.position.z));
	GUI.Box(new Rect(screenPosition.x - healthBarLeft / 2, Screen.height - screenPosition.y - barTop,40, healthBarHeight), "",currentStyle);
	GUI.DrawTexture(new Rect(screenPosition.x - healthBarLeft / 2,Screen.height - screenPosition.y - barTop,healthBarLength, healthBarHeight), healthTex);	
}	

public function highlight(show:boolean){
	if(show){
		currentColor = Color.yellow;
	}else{
		currentColor = Color.black;
	}
}
