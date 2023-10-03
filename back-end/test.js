require('dotenv').config();

// Access the environment variable
const myVariable = process.env.USR_PASS;

// Check if the environment variable exists
if (myVariable) {
  console.log(`MY_VARIABLE value is: ${myVariable}`);
} else {
  console.log('MY_VARIABLE is not set.');
}