const controller = require("./Controller/api.js")

const loadData = (path) =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  });

const renderTable = (data, nameTerm) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }
  let source = data;

  if (nameTerm) {
    source = source.filter(
                          filter  =>  filter.Color === nameTerm
                          || filter.Car_make === nameTerm 
                          || filter.Car_vin === nameTerm
                          || filter.City === nameTerm
                          || filter.Car_model === nameTerm
                          || filter.Model_year === nameTerm
    );
  }

  const rows = source.reduce(
    (acc, { id , Car_model, Car_make,Model_year, Car_vin, Color, City}) =>
      acc +
      `<tr currency="table-row-${id}"><td>${id}</td><td>${Car_model}</td><td>${Car_make}</td><td>${Model_year}</td><td>${Car_vin}</td><td>${Color}</td><td>${City}</td></tr>`,
    ``
  );``

  tableBody.innerHTML = rows;
};

controller.getAll().then(({data}) => renderTable(data));

let form = document.querySelector("#form");
  form.onsubmit = (event) => {
  event.preventDefault();
  
  const term = event.target.inputfield.value;

  controller.getAll().then(({data}) => renderTable(data, term));
  
};

form.onreset = () => {
  controller.getAll().then(({data}) => renderTable(data));
};