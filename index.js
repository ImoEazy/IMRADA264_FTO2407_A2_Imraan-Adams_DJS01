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
const remainingFuelKguel = 500; // remaining fuel (kg)
const fuelBurnRateKgPerS = 1; // fuel burn rate (kg/s)

//function for veocity calc
//create const calcNewvelocity
const calcNewVelocity = (InitialVelocity, acceleration, time) => {
if (typeof InitialVelocity !== 'number' || typeof acceleration !== 'number' || typeof time !== 'number') {
  throw new Error('Invalid input: velocity, acceleration, and time must be numbers.');

}
return InitialVelocity + (acceleration * time);

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

















