// on click event for submitting new burger "to be devoured"
$(".submitButton").on("click", function () {
  
  // variable to capture user input in form 
  var burgerName = {burger_name: ($(this).siblings(".form-control").val().trim())};

  // AJAX call to post new burger in "Burger to devour" section
  $.ajax({
    type: "POST",
    data: burgerName
  }).then(
    function() {
      // RELOAD the page to display the new burger added
      location.reload();
    });
  });

// on click event for updating burger to devoured
$(".burgerWasDevoured").on("click", function () {

  var burgerId = {devoured: ($(this).siblings(".burgersData").val().trim())};

  $.ajax({
    type: "PUT",
    data: burgerId
  }).then(
    function() {
      location.reload();
    });
});
