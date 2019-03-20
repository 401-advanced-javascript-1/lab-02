'use strict';

class Car {
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }

  drive(){
    return 'Moving Forward';
  }
  stop(){
    return 'Stopping';
  }
}

module.exports = Car;

class Motorcycle {
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }

  drive(){
    return 'Moving Forward';
  }
  stop(){
    return 'Stopping';
  }
  wheelie(){
    return 'Wheee!';
  }
}

module.exports = Motorcycle;

// Flying Vehicles

class Airplane {
  constructor(name, wings){
    this.name = name;
    this.wings = wings;
  }

  fly(){
    return 'Flying up';
  }
  divebomb(){
    return 'oh my goodness!';
  }
}

module.exports = Airplane;

class Helicopter {
  constructor(name,wings){
    this.name = name;
    this.wings = wings;
  }

  fly(){
    return 'Flying up';
  }
  divebomb(){
    return 'oh my goodness!';
  }
  sideFly(){
    return 'Flying sideways';
  }
}

module.exports = Helicopter;