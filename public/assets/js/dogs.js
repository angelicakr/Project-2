// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-adopt").on("click", function(event) {
    var id = $(this).data("id");
    var newAdopt = $(this).data("newadopt");

    var newAdoptState = {
      adopted: newAdopt
    };

    // Send the PUT request.
    $.ajax("/api/dogs/" + id, {
      type: "PUT",
      data: newAdoptState
    }).then(
      function() {
        console.log("changed adopt to", newAdopt);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newDog = {
      name: $("#ca").val().trim(),
      adopted: $("[name=adopted]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/dogs", {
      type: "POST",
      data: newDog
    }).then(
      function() {
        console.log("created new dog profile");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-dog").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/dogs/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted dog", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
