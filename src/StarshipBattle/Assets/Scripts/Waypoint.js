#pragma strict

var neighbors:GameObject[];

function OnDrawGizmos()
{
	Gizmos.color = Color (1,0,0,.5);
	Gizmos.DrawCube (transform.position, Vector3 (0.2,0.2,0.2));
	
	for (var n:GameObject in neighbors)
	{
		Gizmos.DrawLine(this.transform.position, n.transform.position);
	}
}