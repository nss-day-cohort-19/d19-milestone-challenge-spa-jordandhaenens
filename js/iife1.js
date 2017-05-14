"use strict";
console.log("iife1 loaded");
/* SOME WORDS of CAUTION
Read the directions again and notice how they set up these two methods. If I call
up the carArray outside of the loader function if may not be populated yet.
*/

var CarLot = (function(others){

  var inventory = [];


    others.loadInventory = function (callBack) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function () {
      	inventory = JSON.parse(this.responseText);
      	callBack(inventory);
      });

      inventoryLoader.addEventListener("error", function(){
      	console.log("There was an error loading inventory.json");
      });

      inventoryLoader.open("GET", "./inventory.json");
      inventoryLoader.send();
    };


	return others;
})(CarLot || {});

