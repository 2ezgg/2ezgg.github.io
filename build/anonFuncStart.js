var isBuggedChrome = false;
if(navigator.userAgent.match(/35.0.1916/i)){
  isBuggedChrome = true;
}

//wrap into an anonomous function to prevent name space issues.
(function($){
	"use strict";