
//Sets variables and function when page is loaded 
document.addEventListener('DOMContentLoaded', () => { 
// QuerySlectors to set divs as index
  const squares = document.querySelectorAll('.grid div')
  const logsLeft = document.querySelectorAll('.log-left')
  const logsRight = document.querySelectorAll('.log-right')
  const carsLeft = document.querySelectorAll('.car-left')
  const carsRight = document.querySelectorAll('.car-right')
  const timeLeft = document.querySelector('#time-left')
  const livesLeft = document.querySelector('#lives-left')
  const result = document.querySelector('#result')
  const startBtn = document.querySelector('#button')
  const roundsLeft = document.querySelector('#rounds-left')
  const width = 9
  let currentIndex = 76
  let currentTime = 20
  let timerId
  let timerIDTwo 
  let lifeLeft = 2
  let rounDer = 1
  
  //move the chicken
  function movechicken(e) {
    //Removes chicken from previous location after keyboard
    squares[currentIndex].classList.remove('chicken')
    switch(e.keyCode) {
      case 37:
        if(currentIndex % width !== 0) currentIndex -= 1
        break
      case 38:
        if(currentIndex - width >= 0) currentIndex -= width
        break
      case 39:
        if(currentIndex % width < width - 1) currentIndex += 1
        break
      case 40:
        if (currentIndex + width < width * width) currentIndex += width
        break
    }
    squares[currentIndex].classList.add('chicken')
    win()
    life()
  }

  //move the cars
  function autoMoveCars() {
    carsLeft.forEach(carLeft => moveCarLeft(carLeft))
    carsRight.forEach(carRight => moveCarRight(carRight))
  }

  //move the car left on a time loop
  function moveCarLeft(carLeft) {
    switch (true) {
      case carLeft.classList.contains('c1'):
      carLeft.classList.remove('c1')
      carLeft.classList.add('c2')
      break
      case carLeft.classList.contains('c2'):
      carLeft.classList.remove('c2')
      carLeft.classList.add('c3')
      break
      case carLeft.classList.contains('c3'):
      carLeft.classList.remove('c3')
      carLeft.classList.add('c1')
      break
    }
  }

  //move the car right on a time loop
  function moveCarRight(carRight) {
    switch (true) {
      case carRight.classList.contains('c1'):
      carRight.classList.remove('c1')
      carRight.classList.add('c3')
      break
      case carRight.classList.contains('c2'):
      carRight.classList.remove('c2')
      carRight.classList.add('c1')
      break
      case carRight.classList.contains('c3'):
      carRight.classList.remove('c3')
      carRight.classList.add('c2')
      break
    }
  }

  //move the logs
  function autoMoveLogs() {
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
  }

  //logs going left
  function moveLogLeft(logLeft) {
    switch (true) {
      case logLeft.classList.contains('l1'):
      logLeft.classList.remove('l1')
      logLeft.classList.add('l2')
      break
      case logLeft.classList.contains('l2'):
      logLeft.classList.remove('l2')
      logLeft.classList.add('l3')
      break
      case logLeft.classList.contains('l3'):
      logLeft.classList.remove('l3')
      logLeft.classList.add('l4')
      break
      case logLeft.classList.contains('l4'):
      logLeft.classList.remove('l4')
      logLeft.classList.add('l5')
      break
      case logLeft.classList.contains('l5'):
      logLeft.classList.remove('l5')
      logLeft.classList.add('l1')
      break
    }
  }

  //logs going right
  function moveLogRight(logRight) {
    switch (true) {
      case logRight.classList.contains('l1'):
      logRight.classList.remove('l1')
      logRight.classList.add('l5')
      break
      case logRight.classList.contains('l2'):
      logRight.classList.remove('l2')
      logRight.classList.add('l1')
      break
      case logRight.classList.contains('l3'):
      logRight.classList.remove('l3')
      logRight.classList.add('l2')
      break
      case logRight.classList.contains('l4'):
      logRight.classList.remove('l4')
      logRight.classList.add('l3')
      break
      case logRight.classList.contains('l5'):
      logRight.classList.remove('l5')
      logRight.classList.add('l4')
      break
    }
  }

  //move the chicken when its on the log moving left
  function moveWithLogLeft() {
    if (currentIndex >= 27 && currentIndex < 35) {
      squares[currentIndex].classList.remove('chicken')
      currentIndex += 1
      squares[currentIndex].classList.add('chicken')
    }
  }

  //move the chicken when its on the log moving right
  function moveWithLogRight() {
    if (currentIndex > 18 && currentIndex <= 26) {
      squares[currentIndex].classList.remove('chicken')
      currentIndex -= 1
      squares[currentIndex].classList.add('chicken')
    }
  }

  //rules for next round
  function win() {
    roundsLeft.textContent = rounDer
    if (squares[4].classList.contains('chicken')) {
      rounDer +=1
      currentTime = 21
     squares[currentIndex].classList.remove('chicken')
      currentIndex = 76;
      squares[currentIndex].classList.add('chicken')  
      timerId = setInterval(moveEverything, 1000)
    }
  
  if (rounDer === 4){
    result.innerHTML = 'You WON'
    clearInterval(timerId)
    clearInterval(timerIdTwo)
    squares[currentIndex].classList.remove('chicken')
    document.removeEventListener('keyup', movechicken)
  }

  }
  function life(){
    livesLeft.textContent = lifeLeft
    if(((currentTime === 0 ) || (squares[currentIndex].classList.contains('c1')) 
    || (squares[currentIndex].classList.contains('l5'))
    || (squares[currentIndex].classList.contains('l4'))
    )){
      lifeLeft -=1
      currentTime = 21
      squares[currentIndex].classList.remove('chicken')
      currentIndex = 76;
      squares[currentIndex].classList.add('chicken') 
    if(lifeLeft === 0){
      result.innerHTML = 'You LOSE'
       squares[currentIndex].classList.remove('chicken')
       clearInterval(timerIdTwo)
      document.removeEventListener('keyup', movechicken)
    }

    }
  }
  
  //all the functions that move Everything
  function moveEverything() {
    autoMoveCars()
    autoMoveLogs()
    moveWithLogLeft()
    moveWithLogRight()
    life()
  }

  function timer(){
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime == 0); {
      clearInterval(timerIDTwo)
      return;
    }  
  }

  //to start, and pause the game
  startBtn.addEventListener('click', () => {
    if(timerId) {
      clearInterval(timerId)
    } else {
      timerId = setInterval(moveEverything, 1000)
      timerIdTwo = setInterval(timer,1000)
      document.addEventListener('keyup', movechicken)
    }
  })

})

 // Get the modal
 var modal = document.getElementById("myModal");

 // Get the button that opens the modal
 var btn = document.getElementById("myBtn");
 
 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // When the user clicks on the button, open the modal 
 btn.onclick = function() {
   modal.style.display = "block";
 }
 
 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }
 
 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
}

