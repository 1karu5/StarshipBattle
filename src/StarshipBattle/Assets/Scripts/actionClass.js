#pragma strict
public class actionClass extends MonoBehaviour
{
	/*
	klasse wird nur für vererbung benötigt, damit charakterMovment und cannon die beiden methoden überschreben können
	siehe keyController
	*/

	public var playerColor:Color=Color.red;

	public function action(val:int){
		Debug.Log("action in actionClass: "+val);	
	}
	
	public function highlight(show:boolean){
		//highlight plyers hp bar
		var bar:healthBar = gameObject.GetComponent("healthBar");
		if(bar!=null){
			bar.highlight(show);
		}
		
		var halo:Component = transform.GetComponent("Halo");
		halo.GetType().GetProperty("enabled").SetValue(halo, show, null);
	}
}