const nums = [1,2,3]
nums.push()
// this
class Car{
  constructor(name,color,topSpeed){
    // properties
    this.name = name
    this.color = color
    this.topSpeed = topSpeed
    this.currentspeed =0;
  }
  // creating method
  drive(){
    console.log('just drove 2 miles!')
    this.currentspeed +=10
    console.log(`driving speed at ${this.currentspeed} mph`)
  }
  brake(){
    console.log('now applying the break')
  }
  ZerotoSixty(){
    setTimeout(() => {
      console.log('phew! that was fast')
      this.currentspeed = 160;
      console.log(this.currentspeed)
    })
    
  }
}

const ferrari = new Car('ferrari','red','250')
// console.log(ferrari.currentspeed)
// // console.log(ferrari.color)
// // console.log(ferrari.name)
// // console.log(ferrari.topSpeed)
// ferrari.drive()
// ferrari.brake()
 console.log(ferrari.currentspeed)
ferrari.ZerotoSixty()
console.log(ferrari.currentspeed)