// BACKEND LOGIC
function placeOrder(size, toppingsArray){

function Pizza(size, toppingsArray) {
  this.size = size;
  this.toppingsArray = toppingsArray;
};

var newPizza = new Pizza(size, toppingsArray);
// console.log("newPizza is ", newPizza);

Pizza.prototype.assemble = function(){
    // later, add logic to calc price here
  var costToppings = toppingsArray.length;
  var costTotal = 10 + costToppings;
  return ("Size: " + this.size + "  Toppings: " + this.toppingsArray + "   Cost: " + costTotal );
}

// console.log(newPizza.assemble());

var result = newPizza.assemble();

return result

};


// FRONTEND LOGIC
$(document).ready(function() {
  $("#pizzaEntryForm").submit(function() {
    event.preventDefault();

    var size = $("#size").val();
    var toppingsArray = [];

    $("input:checkbox[name=toppings]:checked").each(function(){
      var temp = $(this).val();
      toppingsArray.push(temp);
    });
    // console.log(toppings);
    var output = placeOrder(size, toppingsArray);
    $("#output").text(output);
  });
});
