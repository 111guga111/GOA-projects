const { Chance } = require("chance")


const chance = new Chance()

const person = {
  name: chance.name(),
  age: chance.age()
}

const greetUser = (name)=>{
  return `Hello ${name}`
}

const guess = (num) => {
  if (num == 10){
    return "Correct!"
  }else{
    return "Wrong!"
  }
}



module.exports = {

  greetUser,
  guess,
  person,

} 

