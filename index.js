// Given Parameters
const params = {
  vel: 10000, // velocity (km/h)
  acc: 3,     // acceleration (m/s^2)
  time: 3600, // seconds (1 hour)
  d: 0,       // initial distance (km)
  fuel: 5000, // initial fuel (kg)
  fbr: 0.5    // fuel burn rate (kg/s)
};

// Function to convert km/h to m/s
const kmhToMs = (kmh) => kmh * 1000 / 3600;

// Function to calculate new velocity
const calcNewVel = ({ vel, acc, time }) => {
  const initialVelMs = kmhToMs(vel); // Convert initial velocity to m/s
  return (initialVelMs + (acc * time)) * 3600 / 1000; // Convert back to km/h
};

// Function to calculate new distance
const calcNewDistance = ({ vel, time }) => {
  const initialVelMs = kmhToMs(vel); // Convert velocity to m/s
  return (initialVelMs * time) / 1000; // Convert to km
};

// Function to calculate remaining fuel
const calcRemainingFuel = ({ fbr, time, fuel }) => {
  const remainingFuel = fuel - (fbr * time);
  if (remainingFuel < 0) {
    throw new Error("Insufficient fuel.");
  }
  return remainingFuel;
};

// Perform calculations
try {
  const newVelocity = calcNewVel(params);
  const newDistance = calcNewDistance(params);
  const remainingFuel = calcRemainingFuel(params);

  console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
  console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
  console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);
} catch (error) {
  console.error(error.message);
}





//Key Issues:
//Unit Mismatch: The velocity is in km/h, while acceleration is in m/s². We need to convert the velocity to m/s for consistent calculations.
//Function Definition: The calcNewVel function is called before it's defined. We should define it first.
//Calculations: The distance calculation needs to consider the new velocity correctly after conversion.

//Changes Made:
//Unit Conversion: A separate function kmhToMs is added to convert velocity from km/h to m/s.
//Function Order: The calcNewVel, calcNewDistance, and calcRemainingFuel functions are defined before they are called.
//Parameter Destructuring: Each function uses parameter destructuring for clarity and ease of access.
//Error Handling: Added error handling for the fuel calculation to ensure it doesn't go negative.
//Expected Output
//This refactored code will give you the corrected new velocity, distance, and remaining fuel while ensuring proper unit handling and clear function structure














