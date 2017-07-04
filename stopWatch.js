//global variables
var started = false;
var interval;
var time = 0;

setup();

//functions
function setup(){
  var ssButton = document.getElementById("ssButton");
  ssButton.addEventListener("click", function(){
    startStop();
  });

  var resetButton = document.getElementById('resetButton');
  resetButton.addEventListener("click", function(){
    reset();
  });

  var recordButton = document.getElementById('recordButton');
  recordButton.addEventListener("click", function(){
    recordTime();
  });
}

function startStop(){
  if(started === false){
    started = true;
    interval = setInterval(function(){
      time = time + 0.01;
      document.getElementById('time').innerHTML = time.toFixed(2);
    },10);
 }
 else{
   started = false;
   clearInterval(interval);
 }
}

function reset(){
  started = false;
  clearInterval(interval);
  time = 0;
  document.getElementById('time').innerHTML = time;
}

function recordTime(){
  //===================First Way=================================

  // var recordedTimeElement = document.createElement('div');
  // recordedTimeElement.innerHTML = "<br>" + time.toFixed(2);
  // while(recordedTimeElement.firstChild){
  //   document.getElementById('pastTimes').appendChild(recordedTimeElement.firstChild);
  // }

  //==================Second Way================================
  document.getElementById("pastTimes").innerHTML += "<br>" + time.toFixed(2);
}
