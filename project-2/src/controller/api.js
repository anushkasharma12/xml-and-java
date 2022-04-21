const cars = require("../data/CarsData.json");

const getAll = ({ Car_model, Car_make, Car_vin,City }) =>
  new Promise((resolve) => {
    let result = Array.from(cars);

    if (Car_model) {
      result = result.filter((item) => item.Car_model ===Car_model);
    }

    if (Car_make) {
      result = result.filter((item) => item.Car_make === Car_make);
    }

    if (Car_vin) {
      result = result.filter((item) => item.Car_vin ===Car_vin);
    }

    if (City) {
        result = result.filter((item) => item.City === City);
      }
    resolve({ code: 200, data: result });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const car = cars.find((car) => car.id === id);

    if (car) {
      resolve({ code: 200, data: car });
    } else {
      resolve({
        code: 404,
        data: { message: `No car found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};