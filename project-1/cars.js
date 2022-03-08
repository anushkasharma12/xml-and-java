const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); 
    template.innerHTML = html;
    return template.content.firstChild;
  };
  
  const generateTableRow = (item) => {
    const id = Array.from(item.getElementById(`id`))[0];
    const Name = Array.from(item.getElementsByTagName(`Name`))[0];
    const Founded = Array.from(item.getElementsByTagName(`Founded`))[0];
    const Country = Array.from(item.getElementsByTagName(`Country`))[0];
  
    return `<tr>
      <td>${id.textContent}</td>
      <td>${Name.textContent}</td>
      <td>${Founded.textContent}</td>
      <td>${Country.textContent}</td>
    </tr>`;
  };
  const renderTable = (xmlData) => {
    const table = document.getElementById("MyTable");
  
    if (!table) {
      throw new Error("No table element found");
    }
  
    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
      ({ nodeName }) => nodeName === `Car`
    );
  
    nodes.map((CarNode) =>
      table.appendChild(htmlToElement(generateTableRow(CarNode)))
    );
  };
  const loadData = (path, callback) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        callback(target.responseXML);
      }
    };
    xhttp.open("GET", path, true);
    xhttp.send();
  };
  
  loadData(`http://127.0.0.1:8080/cars.xml`, renderTable);
  const onReset = () => {
    window.location.replace(window.location.pathname);
  };