#pragma strict
public class actionClass extends MonoBehaviour
{
	/*
	klasse wird nur für vererbung benötigt, damit charakterMovment und cannon die beiden methoden überschreben können
	siehe keyController
	*/

	public virtual function action(val:int){
		Debug.Log("action in actionClass: "+val);	
	}
	
	public function highlight(show:boolean){
		if(show){
			renderer.material.color = Color.red;
		}
		else{
			renderer.material.color = Color.white;
		}
	}
}