$(Document).ready(function(){

  $("form#triangleTracker").submit(function(){
  event.preventDefault();
  var side1 = parseInt($("#side1").val());
  var side2 = parseInt($("#side2").val());
  var side3 = parseInt($("#side3").val());

  var result;

  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1){
    result = "not a";
  }
    else if (side1 === side2 && side2 === side3 && side1 === side3){
    result = "equalateral";
  } else if (side1 === side2 || side1 === side3 || side2 === side3){
    result = "isosceles";
  } else if (side1 != side2 && side1 != side3 && side2 != side3){
    result = "scalene";
  } else {
    result = "Not a triangle"
  }

  $(".triangle").text(result);
  $("#output").show();
  });
});
