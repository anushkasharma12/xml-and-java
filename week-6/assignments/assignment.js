const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); 
    template.innerHTML = html;
    return template.content.firstChild;
  };
  
  const generateTableRow = (item) => {
    const id = Array.from(item.getElementsByTagName(`id`))[0];
    const firstName = Array.from(item.getElementsByTagName(`firstName`))[0];
    const lastName = Array.from(item.getElementsByTagName(`lastName`))[0];
    const fullName = firstName.textContent + " " + lastName.textContent; // we need full name in the table.
    const email = Array.from(item.getElementsByTagName(`email`))[0];
    const gender = Array.from(item.getElementsByTagName(`gender`))[0];
    const ip = Array.from(item.getElementsByTagName(`ip`))[0];
  
    return `<tr>
      <td>${id.textContent}</td>
      <td>${fullName}</td>
      <td>${email.textContent}</td>
      <td>${gender.textContent}</td>
      <td>${ip.textContent}</td>
    </tr>`;
  };
  const renderTable = (xmlData) => {
    const table = document.getElementById("MyTable");
  
    if (!table) {
      throw new Error("No table element found");
    }
  
    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
      ({ nodeName }) => nodeName === `people`
    );
  
    nodes.map((peopleNode) =>
      table.appendChild(htmlToElement(generateTableRow(peopleNode)))
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
  
  loadData(`http://127.0.0.1:8080/assignment.xml`, renderTable);
  const onReset = () => {
    window.location.replace(window.location.pathname);

  };
  
  