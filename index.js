/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

 //Given Parameters
const velocityKmh = 10000 // velocity (km/h) changed const
const accelerationMps2 = 3; // acceleration (m/s^2) 
const timeInSeconds = 3600; // seconds (1 hour)
const initialDistanceKm = 0; // distance (km)
const remainingFuelKgval = 5000; // remaining fuel (kg)//changed to 5000 to 500
const fuelBurnRateKgPerS = 1; // fuel burn rate (kg/s)//changed to 0.5 to 1



//function for veocity calc
//create const calcNewvelocity
const calcNewVelocity = (InitialVelocity, acceleration, time) => {//parameters added
if (typeof InitialVelocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
  throw new Error('Invalid. Velocity, acceleration, and time are not numbers.');//displays error msg when no numbers for parameters

}
return InitialVelocity + (acceleration * time);// return initial velocity + scceleration * time value

};

//calculate new value outputs
try {
  const newDistanceKm = initialDistanceKm + (velocityKmh * (timeInSeconds / 3600)); // Convert time to hours for km/h
  const remainingFuelKg = fuelBurnRateKgPerS * timeInSeconds; // Calculate remaining fuel
  const newVelocityKmh = calcNewVelocity(velocityKmh, accelerationMps2 * 3.6, timeInSeconds); // Convert acceleration to km/h^2

  console.log(`Corrected New Velocity: ${newVelocityKmh.toFixed(2)} km/h`);
  console.log(`Corrected New Distance: ${newDistanceKm.toFixed(2)} km`);
  console.log(`Corrected Remaining Fuel: ${remainingFuelKg.toFixed(2)} kg`);
} catch (error) {
  console.error(`Error: ${error.message}`);
}





















