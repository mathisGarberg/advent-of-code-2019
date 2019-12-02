// ---- Part 1 ----
function findFuelForModuleByMass(mass) {
    return Math.floor(mass / 3) - 2;
  }
  
  const puzzleValues = document.getElementById('puzzleValueOne')
    .innerHTML.trim('').split('\n');
  
  const total = puzzleValues
    .map(pV => findFuelForModuleByMass(parseInt(pV)))
    .reduce((acc, curr) => acc + curr);
  
  // ---- Part 2 ----
  
  // During the second Go / No Go poll, the Elf in charge of the
  // Rocket Equation Double-checker stops the launch sequence. 
  // Apparently, you forgot to include additional fuel for the fuel 
  // you just added.
  
  
  // 1. Fuel requires Fuel
  // 2. Take it's mass, divide by three, round down and sub. 2.
  // 3. Fuel requires fuel and so on.
  // 4. Mass that requires negative fuel should be treated as 0.
  // 5. For each module, calculate the fuel and add it to the total.
  // 6. Treat the fuel you just calculated as input, and repeat.
  // 7. When the fuel required is 0 or negative, stop.
  
  const initalFuel = puzzleValues
    .map(pV => findFuelForModuleByMass(parseInt(pV)))
    .reduce((acc, curr) => acc + curr);

  const requiredFuel = function(value) {
      if (value >= 0) {
          return value += requiredFuel(findFuelForModuleByMass(value));
        } else {
        return 0;
    }
};
console.log('3325342: ' + (requiredFuel(3325342)-3325342));
//   findRequiredFuel(initalFuel);
console.log('100756: ' + (requiredFuel(100756)-100756));
console.log('1969: ' + (requiredFuel(1969)-1969));
