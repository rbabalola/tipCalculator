

var bill = $("input[name='billAmount']").val();
var numberOfPeople = $("input[name='howManyPeople']").val();
var customTip = $("input[name='customPercentTip']").val();
var started = false;
$(document).click(function(){
if(!started){
  bill = null;
  numberOfPeople = null;
  customTip =null;
  started = true;
}
});


$(document).on("keydown", function tipCalculator(){
  var percentTip = (this.value);

  var tipAmountPerPerson = (bill * percentTip);
  var totalTips = (bill * percentTip * numberOfPeople);
return tipAmountPerPerson;
return totalTips;
$("#amountPerPerson").text("$"+ tipAmountPerPerson);
$("#totalTipAmount").text("$" + totalTips);
});
  if (customTip > 0){
    percentTip = customTip
  }
  else {
    percentTip = this.val();
}

$("#reset").on("click", function(){
  $("input[name='howManyPeople']").reset();
  $("input[name='customPercentTip']").reset();
  $("#amountPerPerson").text("$0.00");
  $("totalTipAmount").text("$0.00");
});
