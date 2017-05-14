"use strict";
console.log("iife2 loaded");
/*****
When you click on one of the car elements, change the width of the border to a higher value,
and change the background color to any other color of your choosing.

Also, on click of the car element, clear the value of the text input in the navbar, and put
the cursor in the text input.

When you start typing into the navbar's text input, the description, and only that
property, of the currently selected car should be bound to what you are typing in and match
it exactly.
*****/

var Actions = (function(others){

	let wrapper = document.getElementById("wrapper");
	let textArea = document.getElementById("textArea");

	others.activateEvents = function(){
		wrapper.addEventListener("click", function(event){

			CarLot.restoreBorders();
			// console.log("element", event.target, "closest div", event.target.closest(".prodCard"));
			let prodCard = event.target.closest(".prodCard");
			console.log("prodCard", prodCard);
			CarLot.modifyBorders(prodCard, "lightblue");

			textArea.value = "";
			textArea.focus();
			let description = prodCard.lastElementChild;
			console.log("description", description);
			// description.innerHTML = "";
			textArea.addEventListener("keyup", function(e){
				console.log("e");
				description.innerHTML = e.target.value;
			});

		});
	};



	return others;
})(CarLot || {});



