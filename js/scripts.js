$(Document).ready(function(){

  $("form#triangleTracker").submit(function(){
  event.preventDefault();
  var side1 = parseInt($("#side1").val());
  var side2 = parseInt($("#side2").val());
  var side3 = parseInt($("#side3").val());

  var result;
  if (side1 === side2 && side2 === side3 && side1 === side3){
    result = "equalateral";
  } else if (side1 === side2 || side1 === side3 || side2 === side3){
    result = "isosceles";
  } else if (side1 != side2 && side1 != side3 && side2 != side3){
    result = "scalene";
  }

  $(".triangle").text(result);
  $("#output").show();
  });
});


// First iteration
// var result;
// if (side1 === side2 && side2 === side3 && side1 === side3){
//   result = ("#output").show("#equalateral");
// } else if (side1 === side2 || side1 === side3 || side2 === side3){
//   result = ("#output").show("#isosceles");
// } else if (side1 != side2 && side1 != side3 && side2 != side3){
//   result = ("#output").show("#scalene");
// }
