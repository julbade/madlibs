$(document).ready(function() {
  $("button#hello").click(function() {
    console.log("IT WORKS");
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there!</li>");

    $("ul#user").children("li").first().click(function() {
    $(this).remove();
   });
  $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
   });
 });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");

    $("ul#user").children("li").first().click(function() {
    $(this).remove();
   });
    $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
   });
 });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");

   });
 });

 $(document).ready(function() {
   $("input").first().click(function() {
     alert("Meeeeeeeeoooooooow!");
     var num = Math.random()%1000;
     $("input").first().before('<img src="https://loremflickr.com/350/250/cat?random=' + num + '"><br><br>');
   });
   $("input").eq(1).click(function() {
     alert("Bark!");
     var num = Math.random()%1000;
     $("input").eq(1).before('<img src="https://loremflickr.com/350/250/dog?random=' + num + '"><br><br>');
   });
});
