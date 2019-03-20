'use strict';

const Vehicle = function(name, wheels) {
  this.name = name;
  this.wheels = wheels;
};

Vehicle.prototype.drive = () => {
  return 'Moving Forward';
};

Vehicle.prototype.stop = () => {
  return 'Stopping';
};

// Car Constructor
const Car = function(name) {
  Vehicle.call(this, name, 4);
};

Car.prototype = new Vehicle();

const Motorcycle = function(name) {
  Vehicle.call(this,name,2);
};

Motorcycle.prototype = new Vehicle();

Motorcycle.prototype.wheelie = () => {
  return 'Wheee!';
};

module.exports = {Car, Motorcycle};

// Flying vehicle / airplane / helicopter

const FlyingVehicle = function(name, wings){
  this.name = name;
  this.wings = wings;
};

FlyingVehicle.prototype.fly = () => {
  return 'Flying up';
};

FlyingVehicle.prototype.divebomb = () => {
  return 'oh my goodness!';
};

const Airplane = function(name){
  FlyingVehicle.call(this, name, 2);
};

Airplane.prototype = new FlyingVehicle();

const Helicopter = function(name){
  FlyingVehicle.call(this, name, 0);
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.sideFly = () => {
  return 'Flying sideways';
};

// Sea creatues / Lobster / Fish