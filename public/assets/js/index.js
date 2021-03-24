// Submit button on click event
$(".submitButton").on("click", function () {

  // Catching data from form with submit button on click
  var burger = ($(this).siblings(".form-control").val().trim());
  console.log(burger);

  // Create AJAX call to put burger input into form inside of "Burgers I'd like to Devour column"

});