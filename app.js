var ballArray = [{
  name: "redBall",
  x: 0,
  y: 0,
  up: false,
  left: false,
  forward: false,
  speed: 1
},{
  name: "blueBall",
  x: 0,
  y: 0,
  up: false,
  left: false,
  speed: 1
},{
  name: "greenBall",
  x: 0,
  y: 0,
  up: false,
  left: false,
  speed: 2
},{
  name: "yellowBall",
  x: 0,
  y: 0,
  up: false,
  left: false,
  speed: 2
},{
  name: "orangeBall",
  x: 0,
  y: 0,
  up: false,
  left: false,
  speed: 3
},{
  name: "purpleBall",
  x: 0,
  y: 0,
  up: false,
  left: false,
  speed: 3
}]


var animate = setInterval(function(){

  for (i=0; i<ballArray.length; i++){
    ballMove(ballArray[i])
  }

}, 1);

function ballMove(ballParam){

  var $name = "#" + ballParam["name"];
  var z = Math.floor(Math.random() * 10000);

  //animating right
  if (ballParam["left"] === false && ballParam["x"] <= ($(window).width() - 100)){
    ballParam["x"] = ballParam["x"] + ballParam["speed"];
  }
  //animating left
  if (ballParam["left"] === true && ballParam["x"] >= 0){
    ballParam["x"] = ballParam["x"] - ballParam["speed"];
  }
  //animating down
  if (ballParam["up"] === false && ballParam["y"] <= ($(window).height() - 100)){
    ballParam["y"] = ballParam["y"] + ballParam["speed"];
  }
  //animating up
  if (ballParam["up"] === true && ballParam["y"] >= 0){
    ballParam["y"] = ballParam["y"] - ballParam["speed"];
  }
  //change directions from right to left
  if (ballParam["x"] >= ($(window).width() - 100)){
    ballParam["left"] = true;
    $($name).css("z-index", z);
  }
  //change directions from left to right
  if (ballParam["x"] <= 0){
    ballParam["left"] = false;
    $($name).css("z-index", z);
  }
  //change direction from down to up
  if(ballParam["y"] >= ($(window).height() - 100)){
    ballParam["up"] = true;
    $($name).css("z-index", z);
  }
  //change drection from up to down
  if(ballParam["y"] <= 0){
    ballParam["up"] = false;
    $($name).css("z-index", z);
  }
  //just move it already!
  $($name).css({
    "top": ballParam["y"],
    "left": ballParam["x"],
  });
}

$(document).ready(function(){
  for(j in ballArray){
    ballArray[j]["x"] = Math.floor(Math.random() * ($(window).width() - 100));
    ballArray[j]["y"] = Math.floor(Math.random() * ($(window).height() - 100));
  }
})
