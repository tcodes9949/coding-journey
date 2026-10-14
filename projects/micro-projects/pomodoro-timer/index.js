let timeLeft = 25

const id = setInterval(() => {
  timeLeft = timeLeft - 1
  console.log(timeLeft)

  if (timeLeft === 0) { 
        console.log("DONE!")
        clearInterval(id)
      }

}, 1000)

  
