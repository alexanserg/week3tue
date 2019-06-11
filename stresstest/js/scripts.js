
var q1 = parseInt($("#q1").val());
var q2 = parseInt($("#q2").val());
var q3 = parseInt($("#q3").val());
var stressVar = 0;
function stress(q1, q2, q3) {
  stressVar = q1 + q2 + q3;
};
function stressLevel (stress){
  if (stressVar > 6)  {
    return "Your stress level is very high";
  } if (stressVar >= 4 && stressVar <=6) {
    return "Your stress level is moderate";
  } if (stressVar === 3) {
    return "Your stress level is very low";
  }  else {
    return "please complete above options";
  }
};
  $(document).ready(function() {
    // console.log("here1")
    $("form#quiz").submit(function(event) {
      event.preventDefault();
      // console.log("here2")
      stress(parseInt($("#q1").val()),parseInt($("#q2").val()),parseInt($("#q3").val()));
      stressLevel(stressVar);
      $("#result").text(stressLevel);
      $("#result").show();
      // console.log("here3")


    });
  });
