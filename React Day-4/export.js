/* Named Exports */

// Tareeka One

// export const addNumbers = (a, b) => a + b;
// export function multiplyNumbers(a, b) {
//   return a * b;
// }
// export const name = "Lokesh";

// Tareeka Two

// const addNumbers = (a, b) => a + b;
// function multiplyNumbers(a, b) {
//   return a * b;
// }
// const name = "Lokesh";

// export { name, addNumbers, multiplyNumbers as ms };

// default export

// Check a Number is Prime or Composite or Nothing
// let checkPrime =(n) =>{
//   if (n <= 1) {
//     return "Neither Prime nor Composite";
//   }
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return "Composite";
//     }
//   }
//   return "Prime";
// }


// export default checkPrime


// Function to check a string contains the given character or not

let checkChar = (str, char) => {
    return str.includes(char);
}

export default checkChar;
