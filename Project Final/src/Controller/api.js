const cars_data = require("../Data/Data.json");

const getAll = ({ Car_model, City, Car_vin, Color }={}) =>
  new Promise((resolve) => {
    let result = Array.from(cars_data);
    if (Car_model) {
      result = result.filter((item) => item.Car_model === Car_model);
    }

    if (City) {
      result = result.filter((item) => item.City === City);
    }

    if (Color) {
      result = result.filter((item) => item.Color === Color);
    }

    if (Car_vin) {
      result = result.filter((item) => item.Car_vin === Car_vin);
    }
    resolve({ code: 200, data: result });
  });

const getById = (Car_vin) =>
  new Promise((resolve) => {
    const cars = cars_data.find((cars) => cars.Car_vin === Car_vin);

    if (product) {
      resolve({ code: 200, data: cars });
    } else {
      resolve({
        code: 404,
        data: { message: `No information found for ${cars}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};