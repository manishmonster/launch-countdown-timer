var date = "2021-09-11 09:00:00";
$(function(){
    var countDownDate = new Date(date).getTime();
    // Update the count down every 1 second
    var x = setInterval(function () {
        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            
        }
        else{
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            var days = formating(days);
            var hours = formating(hours);
            var minutes = formating(minutes);
            var seconds = formating(seconds);    
            $('#days > .panel-block  > span').text(days);
            $('#hours > .panel-block  > span').text(hours);
            $('#minutes > .panel-block  > span').text(minutes);
            $('#seconds > .panel-block  > span').text(seconds);
            console.log(days+" days "+hours+" hours"+minutes+" minutes"+seconds+" seconds")
        }
    
    }, 1000);

});
function formating(variable) {
    if (variable < 10) {
      var variable = "0" + variable;
    } else {
      var variable = variable;
    }
    return variable;
  }
