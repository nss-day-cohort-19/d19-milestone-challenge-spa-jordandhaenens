"use strict";

let container = document.getElementById("container");

function populatePage(inventory){
  let cardDivRow = `<div class="row">`;
  let i = 1;
  // Loop over the inventory and populate the page
  let cars = inventory.cars;
  cars.forEach(function(currVal, index){
  	// console.log("currVal.model", currVal.model, "index", index);
	  let prodCard = `<div class="col-md-3 normalBorder prodCard"><img src="${currVal.pic}">
	  				<h3>${currVal.year} ${currVal.make}</h3><p>${currVal.model}</p>
	  				<p>${currVal.price}</p><p id="des--${index}" class="description">${currVal.description}</p></div>`;
  	if (i % 4 !== 0 && (index + 1) !== cars.length){
  		cardDivRow += prodCard;
  		// console.log("I'm row 1");
  		i++;
		  // console.log(i);
  	} else if (i % 4 === 0 && (index + 1) !== cars.length){
  		cardDivRow += `</div><div class="row">` + prodCard;
  		// console.log("I'm row 2");
  		// console.log(i);
  		i = 0;
  	} else if ((index + 1) === cars.length) {
  		cardDivRow += prodCard + `</div>`;
  		// console.log("I'm the last card");
  	}
  });

  container.innerHTML = cardDivRow;
}


/** Load the inventory and send a callback function to be
invoked after the process is complete **/
CarLot.loadInventory(populatePage);

/**Event listener that on wrapper that defines the prodCard**/
let wrapper = document.getElementById("wrapper");
let textArea = document.getElementById("textArea");
let description = "";

wrapper.addEventListener("click", function(event){ //move  this listener to main

  let prodCard = event.target.closest(".prodCard");
  console.log("prodCard", prodCard);
  CarLot.activateEvents(prodCard);
  // console.log("element", event.target, "closest div", event.target.closest(".prodCard"));
  // description.innerHTML = "";

  textArea.value = "";
  textArea.focus();

  description = prodCard.lastElementChild;
  textArea.removeEventListener("keyup", function(e){
    description.innerHTML = e.target.value;
  });
  // console.log("description", description);
  console.log("description in wrapper listener", description);
});

textArea.addEventListener("keyup", function(e){ //move this to main
  console.log("'description' as seen by textArea listener", description);
  // console.log("e");
  description.innerHTML = e.target.value;
});

/**************/

// cars.forEach(function(currVal, index){
//   	console.log("currVal.model", currVal.model, "index", index);
//   	if (i % 4 !== 0 && index !== cars.length){
//   	cardDivRow += `<div class="col-md-4 normalBorder"><img src="${currVal.pic}">
//   				<h3>${currVal.year} ${currVal.make}</h3>
//   				<p>${currVal.model}</p><p>${currVal.price}</p></div>`;
//   		i++;
// 		  console.log(i);
//   	} else if (i % 4 === 0 && index !== cars.length){
//   		cardDivRow += `</div><div class="row"><div class="col-md-4 normalBorder">
//   				<img src="${currVal.pic}">
//   				<h3>${currVal.year} ${currVal.make}</h3>
//   				<p>${currVal.model}</p><p>${currVal.price}</p></div>`
//   		console.log(i);
//   		i = 0;
//   	} else if (index === cars.length) {
//   		cardDivRow += `<div class="col-md-4 normalBorder"><img src="${currVal.pic}">
//   				<h3>${currVal.year} ${currVal.make}</h3>
//   				<p>${currVal.model}</p><p>${currVal.price}</p></div></div>`;
//   	}
//   });