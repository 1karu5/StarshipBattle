#pragma strict
public class actionClass extends MonoBehaviour
{
	/*
	klasse wird nur für vererbung benötigt, damit charakterMovment und cannon die beiden methoden überschreben können
	siehe keyController
	*/

	public var playerColor:Color=Color.red;

	public virtual function action(val:int){
		Debug.Log("action in actionClass: "+val);	
	}
	
	public function highlight(show:boolean){	
		if(show){
			for(var obj:Renderer in GetComponentsInChildren(Renderer)){
				for (var mat:Material in obj.materials) {
        			mat.color = playerColor;
    			}
			}
		}
		else{
			for(var obj:Renderer in GetComponentsInChildren(Renderer)){
				for (var mat:Material in obj.materials) {
        			mat.color = Color.white;
    			}
			}
		}
	}
}