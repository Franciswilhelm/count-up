$(document).ready(function() {
  $(".container form").submit(function(event) {
    var item1Input = $("input#item1").val();
    var item2Input = $("input#item2").val();

    event.preventDefault();
  });
});
var total = 0;
for (var currentNumber = 1; currentNumber <= 0; currentNumber += 1) {
  total += currentNumber;
}
alert("Total is: " + total);ßß
