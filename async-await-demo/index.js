function randomNumber () {
    return new Promise(resolve => {
      setTimeout(()=>{
        const randomNumber = Math.floor(Math.random() * 10)
        console.log(randomNumber)
        resolve(randomNumber)
      }, 5000)
    })
  }

function multiplyRandom() {
  // alter code here
}


