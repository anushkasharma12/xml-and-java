const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); 
    template.innerHTML = html;
    return template.content.firstChild;
  };
  
  const generateTableRow = (item) => {
    const rollno = student.attributes[0].textContent;
    const firstName = Array.from(item.getElementsByTagName(`firstname`))[0];
    const lastName = Array.from(item.getElementsByTagName(`lastname`))[0];
    const fullName = firstName.textContent + " " + lastName.textContent; // we need full name in the table.
    const nickName = item.getElementsByTagName(`nickname`)[0].textContent;
    const marks = item.getElementsByTagName(`marks`)[0].textContent;
  
    return `<tr>
      <td>${rollno}</td>
      <td>${fullName}</td>
      <td>${nickName.textContent}</td>
      <td>${marks.textContent}</td>
    </tr>`;
  };
  const renderTable = (xmlData) => {
    const table = document.getElementById("MyTable");
  
    if (!table) {
      throw new Error("No table element found");
    }
  
    const nodes = Array.from(xmlData.documentElement.childNodes).filter(
      ({ nodeName }) => nodeName === `student`
    );
  
    nodes.map((studentNode) =>
      table.appendChild(htmlToElement(generateTableRow(studentNode)))
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
  
  loadData(`http://localhost:8080/students.xml`, renderTable);
  const onReset = () => {
    window.location.replace(window.location.pathname);

  };
  
  