#pragma strict

var scrollArea:int = 100;
var scrollSpeed:int = 10;

function Start(){

}

function Update(){
    var mPosX = Input.mousePosition.x;
    var mPosY = Input.mousePosition.y;
    
    // Do camera movement by mouse position
    if (mPosX < scrollArea) {
        transform.Translate(Vector3.right * -scrollSpeed * Time.deltaTime);
    }
    if (mPosX >= Screen.width - scrollArea) {
        transform.Translate(Vector3.right * scrollSpeed * Time.deltaTime);
    }
    if (mPosY < scrollArea) {
        transform.Translate(Vector3.up * -scrollSpeed * Time.deltaTime);
    }
    if (mPosY >= Screen.height - scrollArea) {
        transform.Translate(Vector3.up * scrollSpeed * Time.deltaTime);
    }
    
    
    if (Input.GetAxis("Mouse ScrollWheel") < 0) // back
    {
        transform.Translate(Vector3.back * scrollSpeed * Time.deltaTime);
        //Camera.main.orthographicSize = Mathf.Max(Camera.main.orthographicSize-1, 1);
    }
    if (Input.GetAxis("Mouse ScrollWheel") > 0) // forward
    {
        transform.Translate(Vector3.back * -scrollSpeed * Time.deltaTime);
        //Camera.main.orthographicSize = Mathf.Min(Camera.main.orthographicSize-1, 6);
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
