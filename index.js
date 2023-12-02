let score = 0;

let intervalId = setInterval(function(){
    score++;
  console.log(score)

  if(score >= 5){
    clearInterval(intervalId)
  }
}, 1000)
