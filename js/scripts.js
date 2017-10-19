var product = function(add1) {
  return add1 * 3.785411784;
};

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var add1 = parseInt($("#add1").val());
    var result = product(add1);
    $("#output").text(result);
  });
});
var product = function(junk1) {
  return junk1 * 16;
};

$(document).ready(function() {
  $("form#junk").submit(function(event) {
    event.preventDefault();
    var junk1 = parseInt($("#junk1").val());
    var result = product(junk1);
    $("#output2").text(result);
  });
});
