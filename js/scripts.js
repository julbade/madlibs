$(document).ready(function() {
  $("#blanks").submit(function(event)  {
  console.log ("IT WORKS");
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
       $("." + blank).text(userInput);
    });

    $("#story").show();

    event.preventDefault();

  });
});
