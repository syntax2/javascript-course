

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
  drive(speed=10){
    console.log('just drove 2 miles!')
    this.currentspeed += speed
    console.log(`driving speed at ${this.currentspeed} mph`)
  }
  brake(){
    console.log('break!')
    this.currentspeed -=10
  }
  Stop() {
    console.log('coming to the screeching halt')
    this.currentspeed = 0
  }
  GetCurrentSpeed(){
    return currentspeed
  }
  
  ZerotoSixty(){
    setTimeout(() => {
      console.log('phew! that was fast')
      this.currentspeed = 160;
      console.log(this.currentspeed)
    },2000)
    
  }
}

const ferrari = new Car('ferrari','red','250')
// console.log(ferrari.currentspeed)
// // console.log(ferrari.color)
// // console.log(ferrari.name)
// // console.log(ferrari.topSpeed)
// ferrari.drive()
// ferrari.brake()
// ferrari.Stop()
//  console.log(ferrari.currentspeed)
// ferrari.ZerotoSixty()
 // console.log(ferrari.currentspeed)

const porsche = new Car('porsche','yellow','260')

// console.log(porsche.topSpeed)
// // console.log(porsche.color)
// console.log(porsche.name)
// // const nums = [1,2,3,4,5]
// porsche.drive(40)
// // nums.forEach(_ => porsche.drive())
// porsche.ZerotoSixty()
// porsche.Stop()
// console.log(porsche.currentspeed)
// const number = [1,2,3]
// number.push(4)
// console.log(number)

Array.prototype.mypush = function(item) {
  this[this.length] = item
  return this
}
const fruits = ['banana','apple','orange','pinappl']
console.log(fruits.mypush('cookie'))
fruits.mypush('kiwi')
fruits.mypush('newfruit')
fruits.mypush('coc')
  fruits.mypush('tomato')