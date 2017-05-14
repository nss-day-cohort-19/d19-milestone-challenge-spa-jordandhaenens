"use strict";
console.log("iife3 loaded");
/*****
The final IIFE should augment the object with two more functions. One function resets the
border thickness and background color for each car element back to the original values.
The other function changes the thickness of the border of a car element, and changes its
background color. The function must accept two arguments.
	A car DOM element that was clicked on.
	A color name of your choice (see behavior requirement 5 above)
*****/

var BorderMethods = (function(others){

	others.modifyBorders = function(element, color){
		element.classList.remove("normalBorder");
		element.style.backgroundColor = color; //read about this method
		element.classList.add("selectedCar");
	},

	others.restoreBorders = function(){
		let elements = document.getElementsByClassName("prodCard"); //find out why this is undefined
		console.log("elements", elements.length); //I'm getting a pseudo-array.

		for (var i = 0; i < elements.length; i++){
			// console.log("elements[i]", elements[i]);
			elements[i].classList.remove("selectedCar");
			elements[i].classList.add("normalBorder");
			elements[i].style.backgroundColor = "cornsilk"
		}
	};


	return others;
})(CarLot || {});