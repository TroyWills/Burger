// Submit button on click event
$(".submitButton").on("click", function () {
  console.log("inside function");

  // Catching data from form with submit button on click
  var burger = ($(this).siblings(".form-control").val().trim());
  console.log(burger);

});