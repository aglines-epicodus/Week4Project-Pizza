// BACKEND LOGIC
var toppingsArray = [];

function Pizza(size, toppingsArray) {
  this.size = size;
  this.toppingsArray = toppingsArray;
};

Pizza.prototype.assemble = function(){
  var costToppings = toppingsArray.length;
  console.log(costToppings);
  var costTotal = 10 + costToppings;
  console.log(costTotal);
  return ("Size: " + this.size + "  Toppings: " + this.toppingsArray + "   Cost: " + costTotal );
};


// FRONTEND LOGIC
$(document).ready(function() {
  $("#pizzaEntryForm").submit(function() {
    event.preventDefault();

    var size = $("#size").val();

    $("input:checkbox[name=toppings]:checked").each(function(){
      var temp = $(this).val();
      toppingsArray.push(temp);
    });

    var newPizza = new Pizza(size, toppingsArray);
    var output = newPizza.assemble();
    // var output = placeOrder(size, toppingsArray);

    $("#output").text(output);
  });
});
