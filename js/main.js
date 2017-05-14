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

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

/** Load the inventory and send a callback function to be
invoked after the process is complete **/
CarLot.loadInventory(populatePage);


// console.log("CarLot", CarLot);
// console.log(8 % 3);

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