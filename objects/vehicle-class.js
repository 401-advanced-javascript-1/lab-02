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

  wheelie(){
    return 'Wheee!';
  }
}

module.exports = Motorcycle;