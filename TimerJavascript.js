let intervalID;

function startTimer(controlId){
   let control =  document.getElementById(controlId);
   let secondsCountdown = control.value;

   secondsCountdown -= 1;

   if(secondsCountdown == 0){
       control.value = "Done";
       return;
   }

   else{
       control.value = secondsCountdown;
   }

  intervalID =  setTimeout(function(){startTimer("textBox")}, 1000);
}

function stopTimer(){
    clearTimeout(intervalID);
}