$(document).ready(function(){
  $("form#videoGames").submit(function(event){
    event.preventDefault();
    var gamVal = []
    $("input:checkbox[name=game]:checked").each(function(){
      var favGames = $(this).val();
      gamVal.push(favGames);
      console.log(gamVal);
    });
    for (i=0;i<gamVal.length;i++){
      if (gamVal[i] === "fps") {
        $(".fps").show();
      } if (gamVal[i] === "kids") {
        $(".kids").show();
      } if (gamVal[i] === "app") {
        $(".app").show();
      } if (gamVal[i] === "horror") {
        $(".horror").show();
      } if (gamVal[i] === "openWorld") {
        $(".openWorld").show();
      }
    }
  })
})
