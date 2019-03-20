
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