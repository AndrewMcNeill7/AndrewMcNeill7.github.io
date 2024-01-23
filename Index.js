//GLOBAL VARIABLES

var nameValue = document.getElementById('nameBox').value.trim();
var commentValue = document.getElementById('commentsBox').value.trim();
var ratingValue = document.getElementById('ratingBox').value.trim();
var letters =  letters = /^[A-Za-z]+$/;
var spanError = document.getElementById('asideErrorMessage');
var dataSubmittionDecider = true;


//CODE FOR ACCURATE TIMESTAMP FOR HEADER

var timeStamp = new Date();
var currentTimeStamp = timeStamp.toTimeString();
var currentDateStamp = timeStamp.toDateString();


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
    timeOfDay = 'PM';
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

///////////////////////////////////////////////////////////////////////////////////////////////////////





//CODE FOR AFTERNOON OR GREETING FOR SUBSECTION HEADING

function subSectionGreeting(){

  var timeOfDayGreeting;
  var hours = timeStamp.getHours();
  var displayTimeOfDayGreeting = document.getElementById("displayGreeting");

  if (hours < 12){
    var timeOfDayGreeting = "Good Morning & Welcome To The Home Page";
  }
  else if(hours >=12 && hours <= 18){
    var timeOfDayGreeting = "Good Afternoon & Welcome To The Home Page";
  }
  else if(hours >18){
    var timeOfDayGreeting = "Good Evening & Welcome To The Home Page";
  }

  displayTimeOfDayGreeting.textContent = timeOfDayGreeting; 

};

var displayTimeOfDayGreeting = subSectionGreeting();






///////////////////////////////////////////////////////////////////////////////////////////////////////

//JQUERY CODE TO RESET TEXT BOXES

  function clearTextAfterSubmittion(e){
    $('input').val('');
    $('textarea').val('');
  }



///////////////////////////////////////////////////////////////////////////////////////////////////////
//JQUERY CODE TO APPLY IDENT CLASS TO ALL PARAGRAPH ELEMENTS

$(function(){
  $("section p").addClass("indent");
});
///////////////////////////////////////////////////////////////////////////////////////////////////////

//JQUERY CODE TO APPLY ASIDE TEXT BOX WIDTH'S

$(function(){
  $('aside input').addClass('asideTextBox');
});

///////////////////////////////////////////////////////////////////////////////////////////////////////
//JQUERY CODE TO START WEBSITE WITH ERROR MESSAGES HIDDEN
  $(document).ready(function(){
    $('#nameError').hide();
    $('#commentsError').hide();
    $('#ratingError').hide();
  });
  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  //JAVASCRIPT VALIDATION FOR TEXT INPUTS IN ASIDE ELEMENT
    var spanError = document.getElementById('asideErrorMessage');

    function nullFormValidation(e){
    
    
    var nameBox = document.getElementById('nameBox').value.trim();
    var ratingBox = document.getElementById('ratingBox').value;
    var commentsBox = document.getElementById('commentsBox').value.trim();
    var letters = /^[A-Za-z]+$/;
    var form = document.getElementById('asideFormID');
    var dataSubmittionDecider = true;



    if(typeof commentsBox == 'string'){   //JAVASCRIPT VALIDATION FOR COMMENT TEXT INPUT
      $('#commentsError').fadeOut();
      dataSubmittionDecider = true;
    }
    else{
      $('#commentsError').fadeIn('Value for Comments Is Not Alphanumeric Try Again');
      dataSubmittionDecider = false;
    };

    if((ratingBox < 11) && (ratingBox >= 0)){   //JAVASCRIPT VALIDATION FOR RATING NUMBER TEXT INPUT
      $('#ratingError').fadeOut();
      dataSubmittionDecider = true;
    }
    else{
      $('#ratingError').fadeIn('Rating Value Must Be A Number 10 & Under');
      dataSubmittionDecider = false;
    };

    if(dataSubmittionDecider == true){
      clearTextAfterSubmittion();
    }
    };
  
///////////////////////////////////////////////////////////////////////////////////////////////////////
//JAVASCRIPT TO MAKE POPUP WINDOW APPEAR
function togglePopUp(){
  document.getElementById("popUp-1").classList.toggle("active");
}

$("#headshot").click(function(){
  togglePopUp();
});

$(".close-btn").click(function(){
  togglePopUp();
});

///////////////////////////////////////////////////////////////////////////////////////////////////////
//JAVASCRIPT VALIDATION TO ENSURE TEXT BOX IS AN ALPHABET
 /* function nameBoxIsAlphabetical(){
    var nameValue = document.getElementById('nameBox').value.trim();
    var letters = /^[A-Za-z]+$/;

    if(nameValue.match(letters)){
      return true;
    }
    else{
      alert("Name input is not an alphanumeric value");
    }
  }

*/
    var form = document.getElementById('asideFormID');

  $(function(){
    $('#asideFormID').submit(function(e){
      e.preventDefault();
      nullFormValidation();
      
      var formData = new FormData(form); //Pass In Form Data with Array of Arrays with Data
      var payload = new URLSearchParams(formData);

      if(dataSubmittionDecider == true){
      console.log([...payload]);

      fetch('http://httpbin.org/post', {
        method: "POST",
        body: payload,
      })

      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(Error));
    };
  });
  });
///////////////////////////////////////////////////////////////////////////////////////////////////////
//JAVASCRIPT FOR ERROR MESSAGE DISPLAY



///////////////////////////////////////////////////////////////////////////////////////////////////////

