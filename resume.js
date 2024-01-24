//GLOBAL VARIABLES

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
//FUNCTION TO APPLY INDENT TO PARAGRAPH
$(function(){
  $(".container p").addClass("indent");
});


///////////////////////////////////////////////////////////////////////////////////////////////////////

//JAVASCRIPT TO MAKE POPUP WINDOW APPEAR
function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

$("#headshot").click(function(){
  togglePopup();
});

$(".close-btn").click(function(){
  togglePopup();
});


///////////////////////////////////////////////////////////////////////////////////////////////////////
//JAVASCRIPT FOR PHOTO SLIDESHOW
var currentSlide = 0;
var totalSlides = 4

var dots = document.querySelectorAll(".dotContainer button");
var images = document.querySelectorAll('.imageContainer img');

function nextSlide(){

  document.getElementById("content" + (currentSlide+1)).classList.remove("active");

  currentSlide = (totalSlides + currentSlide + 1) % totalSlides;

  document.getElementById("content" + (currentSlide + 1)).classList.add("active");

  dotIndicator(currentSlide+1);
}

function previousSlide(){
  document.getElementById("content" + (currentSlide+1)).classList.remove("active");

  currentSlide = (totalSlides + currentSlide - 1) % totalSlides;

  document.getElementById("content" + (currentSlide+1)).classList.add("active");
  dotIndicator(currentSlide+1);
}

function dotIndicator(num){
  dots.forEach(function(dot){
    dot.style.backgroundColor = "transparent";
  });
  document.querySelector(".dotContainer button:nth-child(" + num + ")").style.backgroundColor = '#fff';
}

function dot(index){
  images.forEach(function(image){
    image.classList.remove('active');
  });
  document.getElementById('content' + index).classList.add('active');
  currentSlide = index - 1;
  dotIndicator(index);
}

$("#next").click(function(){
  nextSlide();
});


$("#previous").click(function(){
  previousSlide();  
});

$('#button1').click(function(){
  dot(1);
});

$('#button2').click(function(){
  dot(2);
});

$('#button3').click(function(){
  dot(3);
});

$('#button4').click(function(){
  dot(4);
});
///////////////////////////////////////////////////////////////////////////////////////////////////////

var currency = "BTC";
var url = "https://api.coinbase.com/v2/exchange-rates?currency=" + currency;
var usd = document.querySelector(".usd");
function makeRequest() {
  xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var response = JSON.parse(this.responseText);
    usd.innerHTML = response.data.rates.USD + " USD";
  };
  xhr.open("GET", url, true);
  xhr.setRequestHeader("CB-VERSION", "2018-01-01");
  xhr.send();
}
makeRequest();
///////////////////////////////////////////////////////////////////////////////////////////////////////

var counter = 0;
setInterval(function(){
  document.getElementById("radio" + counter).checked = true;
  counter++;

  if(counter>4){
    counter++;
  }
},100);
