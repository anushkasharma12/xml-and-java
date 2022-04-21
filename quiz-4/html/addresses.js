const loadData = () =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open(
      "GET",
      `https://6253799f90266e3d0e0373e6.mockapi.io/ok/user`,
      true
    );
    xhttp.send();
  });

loadData().then((data) => {
  // render data in html table
  const table = document.getElementById("My-Table");
  if (!table) {
    throw new Error("No table found !!!");
  }
  let addressData = [];
  data.map(({ address }) => {
    addressData = [...addressData,...address];
  });
  const tableRows = addressData.reduce(
    (acc, { country, state, city, zipCode, id, userId }) =>
      acc +
      `<tr id="table-row-${id}"><td>${country}</td><td>${state}</td><td>${city}</td><td>${zipCode}</td><td>${id}</td><td>${userId}</td></tr>`,
    ``
  );
  tableBody.innerHTML = tableRows;
});


