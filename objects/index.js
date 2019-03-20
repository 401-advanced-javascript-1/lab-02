'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleByClass = require('./vehicle-class.js');
const VehicleByFactory = require('./vehicle-factory.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const mazdaByClass = new VehicleByClass.Car('Mazda 3', 4);
const motoByClass = new VehicleByClass.Motorcycle('Harley', 2);

// Implement a car and motorcycle using a Factory
const mazdaByFactory = new VehicleByFactory.Car('Mazda 3', 4);
const motoByFactory = new VehicleByFactory.Motorcycle('Harley', 2);