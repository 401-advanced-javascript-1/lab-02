
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