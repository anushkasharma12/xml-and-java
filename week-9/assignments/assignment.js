const htmlToElement = (html) => {
    const template = document.createElement("template");
    html = html.trim(); 
    template.innerHTML = html;
    return template.content.firstChild;
  };

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
  const renderTabledata = (data, searchWord) => {
    const table = document.getElementById("MyTable");
    if (searchWord) {
        searchWord = searchWord.toLowerCase();
		data = data.filter(
			({ first_name,last_name}) =>
                last_name.toLowerCase().includes(searchWord) ||
				first_name.toLowerCase().includes(searchWord)		
		);
	}
	const rows = data.reduce(
		(acc, row) =>
			acc +
			`<tr id="table-row-${row.id}">
            <td>${row.id}</td>
            <td>${row.first_name}</td>
            <td>${row.last_name}</td>
            <td>${row.email}</td>
            <td>${row.gender}</td>
            <td>${row.ip_address}</td>
            </tr>`,
            	``
	);
	table.innerHTML = rows;
};
  const onSubmit = (event) => {
	event.preventDefault();
	const searchWord = event.target.search.value;
	loaddata("./people.json").then((data) => renderTabledata(data, searchWord));
};
  loadData("./people.json").then((data) =>  renderTabledata(data));
  const onReset = () => {
    loadData(`./people.json`).then((data) => renderTabledata(data));
  
  