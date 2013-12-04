#pragma strict

var scrollArea:int = 20;
var scrollSpeed:int = 100;
var zoomSpeed:int = 300;
var maxZoomFactor:float = 2;

private var xPos:float; 
private var yPos:float; 
private var zPos:float;
private var fieldOfView:float;

function Start(){
	xPos = transform.position.x;
	yPos = transform.position.y;
	zPos = transform.position.z;
	fieldOfView = camera.fieldOfView;
	Debug.Log(fieldOfView);
}

function Update(){
    var mPosX = Input.mousePosition.x;
    var mPosY = Input.mousePosition.y;
    
    
    
    // Do camera movement by mouse position
    if (transform.position.y < yPos){
    	var zoomPx:float = yPos - transform.position.y;
    	var movePx:float = Mathf.Min(zoomPx, scrollSpeed * Time.deltaTime);
    	
	    if (mPosX < scrollArea && (xPos - transform.position.x) < zoomPx) {
	        transform.Translate(Vector3.left * movePx);
	    }
	    if (mPosX >= Screen.width - scrollArea && (transform.position.x - xPos) < zoomPx) {
	        transform.Translate(Vector3.right * movePx);
	    }
	    if (mPosY < scrollArea && (zPos - transform.position.z) < zoomPx) {
	        transform.Translate(Vector3.down * movePx);
	    }
	    if (mPosY >= Screen.height - scrollArea && (transform.position.z - zPos) < zoomPx) {
	        transform.Translate(Vector3.up * movePx);
	    }
    }
    
    
    if (Input.GetAxis("Mouse ScrollWheel") < 0  && transform.position.y < yPos) // back
    {
    		
        transform.Translate(Vector3.back * zoomSpeed * Time.deltaTime);
        //Camera.main.orthographicSize = Mathf.Max(Camera.main.orthographicSize-1, 1);
    }
    if (Input.GetAxis("Mouse ScrollWheel") > 0 && transform.position.y > (yPos / 2)) // forward
    {
        transform.Translate(Vector3.back * -zoomSpeed * Time.deltaTime);
        
        //Camera.main.orthographicSize = Mathf.Min(Camera.main.orthographicSize-1, 6);
    }
    
    // set camera to start position
    if (Input.GetKeyDown (KeyCode.K)){
    	transform.position = Vector3(xPos, yPos, zPos);
    }
    
    /* 
     // Do camera movement by keyboard
     transform.Translate(Vector3(Input.GetAxis("EditorHorizontal") * scrollSpeed * Time.deltaTime,
     Input.GetAxis("EditorVertical") * scrollSpeed * Time.deltaTime, 0) );
     
     // Do camera movement by holding down option                 or middle mouse button and then moving mouse
     if ( (Input.GetKey("left alt") || Input.GetKey("right alt")) || Input.GetMouseButton(2) ) {
     transform.Translate(-Vector3(Input.GetAxis("Mouse X")*dragSpeed, Input.GetAxis("Mouse Y")*dragSpeed, 0) );
     }*/
}
