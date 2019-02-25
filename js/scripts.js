//=== Business logic ===//
$(document).ready(function() {

  $("form#formquiz").submit(function(event){

    var Q1= $("input:radio[name=operator]:checked").val();
    var Q2= $("input:radio[name=types]:checked").val();
    var Q3= $("input:radio[name=parenthesis]:checked").val();
    var Q4= $("input:radio[name=comparison]:checked").val();
    var Q5= $("input:radio[name=naming]:checked").val();

    var total=parseInt(Q1)+parseInt(Q2)+parseInt(Q3)+parseInt(Q4)+parseInt(Q5);
    $("#total").text("Congratulations!"+"your score is "+ total);


  //==== user Interface ====//
  $("#total").show(3000);
   event.preventDefault();
 });
});
