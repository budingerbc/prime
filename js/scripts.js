$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var input = parseInt($("#input").val());
    var numbers = [];

    for (var i = 2; i <= input ; i++) {
      numbers.push(i);
    }

    for (var index = 0; index < numbers.length; index++) {
      for (var each = index + 1; each < numbers.length; each++) {
        if (numbers[each] % numbers[index] === 0) {
          numbers.splice(each, 1);
          each--;
        }
      }
    }
    alert(numbers);
  });
});
