//* Debugging Guide
// * 1. Make the code more readable
// * 2. Pick up calculation errors
// * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 //*//

// Given Parameters
///const vel = 10000; // velocity (km/h)
///const acc = 3; // acceleration (m/s^2)
///const time = 3600; // seconds (1 hour)
///const d = 0; // distance (km)
///const fuel = 5000; // remaining fuel (kg)
///const fbr = 0.5; // fuel burn rate (kg/s)


///const d2 = d + (vel*time) //calcultes new distance
///const rf = fbr*time //calculates remaining fuel
///const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
///calcNewVel = (vel, acc, time) => { 
  ///return vel + (acc*time)
///}

//console.log(`Corrected New Velocity: ${vel2} km/h`);
//console.log(`Corrected New Distance: ${d2} km`);
//console.log(`Corrected Remaining Fuel: ${rf} kg`);

// Given Parameters
//created object with properties 
const spacecraft = {
  vel: 10000, // velocity (km/h)
  acc: 3,     // acceleration (m/s^2)
  time: 3600, // seconds (1 hour)
  d: 0,       // initial distance (km)
  fuel: 5000, // initial fuel (kg)
  fbr: 0.5    // fuel burn rate (kg/s)
};

// Function allows  convertion of km/h to m/s kms times 3.6
//Unit conversion constant. allows for use throughout functions
const kmhToMs = (kmh) => kmh * 1000 / 3600;

// Function to calculate new velocity
const calcNewVel = ({ vel, acc, time }) => {
  const initialVelMs = kmhToMs(vel); //converts initialvelocity to m/s using const unit converson
  
  return (initialVelMs + (acc * time)) * 3600 / 1000; // Convert back to km/h times 3.6
};


// Function to calculate new distance
const calcNewDistance = ({ vel, time }) => {
  const initialVelMs = kmhToMs(vel); // Convert velocity to m/s using unit converstion const
  return (initialVelMs * time) / 1000; // converts to kilometers
  
};

// Function to calculate remaining fuel and added error handling for user
const calcRemainingFuel = ({ fbr, time, fuel}) => {

  const remainingFuel = fuel - (fbr * time);
  
  if (remainingFuel < 0) {//if fuel number below zero
    throw new Error("insuffecient fuel level");
  }
  return remainingFuel; //return remain fule value
};

// Perform calculations
try {
  // calculates the new velocity of craft
  const newVelocity = calcNewVel(spacecraft);
  //calculates ne distance
  const newDistance = calcNewDistance(spacecraft);
  //calcuattes the fuel remainig
  const remainingFuel = calcRemainingFuel(spacecraft);

  console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
  console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
  console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);

} catch (error) {
  console.error(error.message);
}


//claculate velocity
//calcute fuel
//calculated distance traveeld










