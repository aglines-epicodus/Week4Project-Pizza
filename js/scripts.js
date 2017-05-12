// BACKEND LOGIC

function placeOrder(size, toppingsArray){

  console.log(toppingsArray);
  console.log(size);
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
