// BACKEND LOGIC

function placeOrder(input){

  console.log(input);
  
};


// FRONTEND LOGIC
$(document).ready(function() {
  $("#pizzaEntryForm").submit(function() {
    event.preventDefault();
    var input = $("#userInput").val();
    var output = placeOrder(input);
    $("#output").text(output);
  });
});
