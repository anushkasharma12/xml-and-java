/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */


 function timeout(ms, callback) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
        callback();
      }, ms);
    });
  }
  
  async function generateRandomNumber() {
    await timeout();
    return Math.floor(Math.random() * 40);
  }
  
  async function generateData(callback) {
    await timeout(1000, function () {
      const data = Array.from({ length: 20 }, generateRandomNumber);
      callback(data);
    });
  }
  
  async function convertToFeet(meters, callback) {
    const feet = meters * 3.2808;
     await timeout(3500, function () {
      callback(feet);
    });
  }
  
  async function processData(data, callback) {
    await timeout();
    data.map(function (value) {
      callback(value);
    });
  }
  
  async function logResult(meters, feet) {
    await timeout();
    console.log(`Converted ${meters}m to ${feet}ft`);
  }
  
   function main() {
       (async () => {
    console.log("Start");
    generateData(function (data) {
      processData(data, function (value) {
        convertToFeet(value, function (result) {
          logResult(value, result);
        });
      });
    });
    console.log("Finish");
  })
}
  
  main();
  