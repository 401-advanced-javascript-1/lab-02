
'use strict';

function CarFactory(name) {
  let car = Object.assign(
    {},
    {name},
    {drive},
    {stop},
  );
  function drive () { return 'Moving Forward'; }
  function stop () { return 'Stopping'; }
  return Object.freeze(car);
}

module.exports = CarFactory;

function MotorcycleFactory(name) {
  let motorcycle = Object.assign(
    {},
    {name},
    {drive},
    {stop},
    {wheelie},
  );
  function drive () { return 'Moving Forward'; }
  function stop () { return 'Stopping'; }
  function wheelie () { return 'Wheee!'; }
  return Object.freeze(motorcycle);
}

module.exports = MotorcycleFactory;

// Flying vehicles

function AirplaneFactory(name){
  let airplane = Object.assign(
    {},
    {name},
    {fly},
    {divebomb},
  );
  function fly () { return 'Flying up'; }
  function divebomb () { return 'oh my goodness!'; }
  return Object.freeze(airplane);
}

module.exports = AirplaneFactory;

function HelicopterFactory(name){
  let helicopter = Object.assign(
    {},
    {name},
    {fly},
    {divebomb},
    {sideFly},
  );
  function fly () { return 'Flying up'; }
  function divebomb () { return 'oh my goodness!'; }
  function sideFly () { return 'Flying sideways'; }
  return Object.freeze(helicopter);
}

module.exports = HelicopterFactory;