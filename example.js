function displayTime(){
    var hours = timeStamp.getHours();
    var minutes = timeStamp.getMinutes();
    var seconds = timeStamp.getSeconds();
    var exactHour;
    var timeOfDay;
 
 
   var displayTime =  document.getElementById('time');
 
   if( hours > 12){
     exactHour = hours - 12;
     timeOfDay = 'PM';
   }
   else if (hours < 12) {
     exactHour = hours;
     timeOfDay = 'AM';
   } 
   else if (hours = 12){
     exactHour = 12;
   }
   else {
     exactHour = hours ;
     timeOfDay = 'PM'
   }
   if (minutes < 10){
     minutes = "0"+minutes;
   }
 
   displayTime.innerHTML = "Thank You For Viewing My Introductory WebSite On " + currentDateStamp + " at " + exactHour + ":" + minutes + " " + timeOfDay;
 
   };
 var displayTime = displayTime();