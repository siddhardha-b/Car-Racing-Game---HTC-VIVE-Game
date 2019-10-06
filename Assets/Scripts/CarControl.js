//using System.Collections;
//using System.Collections.Generic;
//using UnityEngine;

var CarControl : GameObject;
var Enemy: GameObject;
function Start () {
	CarControl.GetComponent("CarController").enabled = true;
	Enemy.GetComponent("CarAIControl").enabled=true;
}