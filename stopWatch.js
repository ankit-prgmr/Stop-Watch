//global variables
var started = false;
var interval;
var time = 0;
var min = 0;

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

  document.addEventListener("keydown", function(event){
    if(event.key === 's'){
      startStop();
    }
  });

  document.addEventListener("keydown", function(event){
    if(event.key === 'r'){
      reset();
    }
  });

  document.addEventListener("keydown", function(event){
    if(event.key === 't'){
      recordTime();
    }
  });
}

function startStop(){
  if(started === false){
    started = true;
    interval = setInterval(function(){
      time = time + 0.01;
      if(time >= 60){
        min++;
        time = 0;
      }
      min !== 0? (document.getElementById('time').innerHTML = min + ":" + time.toFixed(2)) : document.getElementById('time').innerHTML = time.toFixed(2);
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
  min = 0;
  document.getElementById('time').innerHTML = time;
  document.getElementById('pastTimes').innerHTML = "Past Times:";
}

function recordTime(){
  //===================First Way=================================

  // var recordedTimeElement = document.createElement('div');
  // recordedTimeElement.innerHTML = "<br>" + time.toFixed(2);
  // while(recordedTimeElement.firstChild){
  //   document.getElementById('pastTimes').appendChild(recordedTimeElement.firstChild);
  // }

  //==================Second Way================================
  min !== 0? (document.getElementById('pastTimes').innerHTML += "<br>" + min + ":" + time.toFixed(2)) : document.getElementById('pastTimes').innerHTML += "<br>" + time.toFixed(2);

}
