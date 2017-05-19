"use strict";
console.log("iife2 loaded");


var Actions = (function(others){


	others.activateEvents = function(element){
		CarLot.restoreBorders();
		CarLot.modifyBorders(element, "lightblue");
	};



	return others;
})(CarLot || {});



