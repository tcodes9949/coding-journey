let timeLeft = 25

const id = setInterval(() => {
      console.log(timeLeft)     
      timeLeft = timeLeft - 1


  if (timeLeft === 0) { 
        console.log("DONE!")
        clearInterval(id)
      }

}, 1000)

  
