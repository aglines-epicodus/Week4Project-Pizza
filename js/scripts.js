// BACKEND LOGIC

function Pizza(size, toppingsArray) {
  this.size = size;
  this.toppingsArray = toppingsArray;
};

Pizza.prototype.assemble = function(){
  var costToppings = toppingsArray.length;
  var costTotal = 10 + costToppings;
  return ("Size: " + this.size + "  Toppings: " + this.toppingsArray + "   Cost: " + costTotal );
}

function placeOrder(size, toppingsArray){
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
    
    var newPizza = new Pizza(size, toppingsArray);
    
    var output = placeOrder(size, toppingsArray);
    
    $("#output").text(output);
  });
});
