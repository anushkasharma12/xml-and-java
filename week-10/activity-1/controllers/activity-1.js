const products = require("../controllers/activity-1.json");

const getAll = ({ id, first_name, last_name, email, gender, ip_address }) =>
  new Promise((resolve) => {
    let result = Array.from(products);

    if (id) {
      result = result.filter((item) => item.id === id);
    }

    if (first_name) {
      result = result.filter((item) => item.first_name === first_name);
    }

    if (last_name) {
      result = result.filter((item) => item.last_name === last_name);
    }

    if (email) {
      result = result.filter((item) => item.email === email);
    }
    if (gender) {
        result = result.filter((item) => item.gender === gender);
      }
      if (ip_address) {
        result = result.filter((item) => item.ip_address === ip_address);
      }

    resolve({ code: 200, data: JSON.stringify(result) });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const personId
     = products.find((personId
        ) => personId
    .id === id);

    if (personId
        ) {
      resolve({ code: 200, data: JSON.stringify(personId
        ) });
    } else {
      resolve({
        code: 404,
        data: { message: `No data found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};
