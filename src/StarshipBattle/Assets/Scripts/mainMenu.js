#pragma strict

var gameName:String = "hsmannheimjimws1314";

private var port:int;
private var refreshing:boolean;
private var hostData: HostData[];

private var inputIp:String = "Enter IP here...";
private var buttonX:float;
private var buttonY:float;
private var buttonH:float;
private var buttonW:float;


function Start(){
	buttonX=Screen.width * 0.05;
	buttonY=Screen.width * 0.05;
	buttonH=Screen.width * 0.1;
	buttonW=Screen.width * 0.1;
	
	port = 25000;
}

function refreshHostList(){
	//Network.Connect("192.168.43.12",25000);
	MasterServer.RequestHostList(gameName);
	refreshing=true;
}

function startServer(){
	Network.InitializeServer(2,port,!Network.HavePublicAddress);
	MasterServer.RegisterHost(gameName,"prototypgame","coment und so");
}

function setControls(){

}

function OnServerInitialized(){
	Debug.Log("started server successfully");
}

function OnMasterServerEvent(mse:MasterServerEvent){
	if(mse==MasterServerEvent.RegistrationSucceeded){
		Debug.Log("Server registered on unity masterserver");
	}
}

function Update(){
	if(refreshing){
		if(MasterServer.PollHostList().Length > 0){
			refreshing = false;
			Debug.Log("recived server list");
			hostData = MasterServer.PollHostList();
		}
	}
}

function OnGUI(){
	if(!Network.isClient && !Network.isServer){
		//manuall connect
		inputIp=GUI.TextField(Rect (buttonX*1.5+buttonW, buttonY,buttonW*3,buttonH*0.3),inputIp , 25);
		
		if(GUI.Button(Rect(buttonX,buttonY,buttonH,buttonW),"Connect")){
			Debug.Log("Connecting manually...");
			Network.Connect(inputIp,port);
		}
		//create Server  
		if(GUI.Button(Rect(buttonX,buttonY*1.2+buttonH,buttonH,buttonW),"Start Server")){
			Debug.Log("starting server");
			startServer();
		}
		//getting server list
		if(GUI.Button(Rect(buttonX,buttonY*1.4+(buttonH*2),buttonH,buttonW),"Refresh")){
			Debug.Log("Refreshing");
			refreshHostList();
		}
		//set controls
		if(GUI.Button(Rect(buttonX,buttonY*1.6+(buttonH*3),buttonH,buttonW),"Set controls")){
			Debug.Log("setting controls");
			setControls();
		}
		//show server list
		if(hostData){
			for(var i:int=0;i<hostData.Length;i++){
				if(GUI.Button(Rect(buttonX*1.5+buttonW,buttonY*2+(buttonH*i),buttonW*3,buttonH*0.5),hostData[i].gameName)){
					Network.Connect(hostData[i]);
				}
			}
		}
		
	} else if(Network.isServer) {
	
		GUI.Label(Rect(buttonX * 8,buttonY*5,buttonH*20,buttonW*20),"Waiting for a player to connect...");
	
		if (GUI.Button(Rect(buttonX * 8,buttonY*2+(buttonH*3),buttonH,buttonW),"cancel")) {
			Network.Disconnect();
			MasterServer.UnregisterHost();
		}
	}
}
