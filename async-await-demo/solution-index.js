function randomNumber () {
  return new Promise(resolve => {
    setTimeout(()=>{
      const randomNumber = Math.floor(Math.random() * 10)
      console.log(randomNumber)
      resolve(randomNumber)
    }, 5000)
  })
}

async function multiplyRandom () {
  const random = await randomNumber()
  const multiple = random * 2
  console.log(multiple)
}

multiplyRandom()

