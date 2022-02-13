const htmlToElement = (html) => {
    const template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
};

const renderTable = () =>
 {
    const table = document.getElementById("myTable");
    if(!table){
        throw new Error("No table element found")
    }
    let data=[   
  {
    id: 1,
    first_name: "Husain",
    last_name: "Zeale",
    email: "hzeale0@odnoklassniki.ru",
    gender: "Male",
    ip_address: "143.237.191.245"
  },
  {
    id: 2,
    first_name: "Michale",
    last_name: "Delgado",
    email: "mdelgado1@paginegialle.it",
    gender: "Male",
    ip_address: "144.2.126.19"
  },
  {
    id: 3,
    first_name: "Gaspard",
    last_name: "Upwood",
    email: "gupwood2@fastcompany.com",
    gender: "Male",
    ip_address: "147.85.27.165"
  },
  {
    id: 4,
    first_name: "Gussy",
    last_name: "Dowzell",
    email: "gdowzell3@ox.ac.uk",
    gender: "Male",
    ip_address: "22.201.167.239"
  },
  {
    id: 5,
    first_name: "Alida",
    last_name: "Macias",
    email: "amacias4@slate.com",
    gender: "Female",
    ip_address: "166.62.41.24"
  },
  {
    id: 6,
    first_name: "Tess",
    last_name: "Sainte Paul",
    email: "tsaintepaul5@xinhuanet.com",
    gender: "Female",
    ip_address: "58.80.74.111"
  },
  {
    id: 7,
    first_name: "Germaine",
    last_name: "Winnett",
    email: "gwinnett6@parallels.com",
    gender: "Genderqueer",
    ip_address: "224.15.42.167"
  },
  {
    id: 8,
    first_name: "Mei",
    last_name: "Swansbury",
    email: "mswansbury7@uol.com.br",
    gender: "Female",
    ip_address: "191.235.203.177"
  },
  {
    id: 9,
    first_name: "Brietta",
    last_name: "Greenfield",
    email: "bgreenfield8@qq.com",
    gender: "Male",
    ip_address: "72.108.253.70"
  },
  {
    id: 10,
    first_name : "Guinna",
    last_name: "Dagnan",
    email: "gdagnan9@thetimes.co.uk",
    gender: "Female",
    ip_address: "108.233.202.64"
  }

    ];
    const withFilters = Boolean(window.location.search);
    if (withFilters) {
        const params = new URLSearchParams(window.location.search);
        const IDterm = params.get(`ID`).toLowerCase();
        const inputControl = document.getElementById(`id`);
        inputControl.value = IDterm;
    
        data = data.filter(({ id }) => id.toLowerCase().includes(IDterm));
      }
      if (withFilters) {
        const params = new URLSearchParams(window.location.search);
        const fnameTerm = params.get(`fname`).toLowerCase();
        const inputControl = document.getElementById(`first_name`);
        inputControl.value = fnameTerm;
    
        data = data.filter(({ first_name}) => first_name.toLowerCase().includes(fnameTerm));
      }
      if (withFilters) {
        const params = new URLSearchParams(window.location.search);
        const lnameTerm = params.get(`lname`).toLowerCase();
        const inputControl = document.getElementById(`last_name`);
        inputControl.value = lnameTerm;
    
        data = data.filter(({ last_name }) => last_name.toLowerCase().includes(lnameTerm));
      }
      if (withFilters) {
        const params = new URLSearchParams(window.location.search);
        const emailTerm = params.get(`Email`).toLowerCase();
        const inputControl = document.getElementById(`email`);
        inputControl.value = emailTerm;
    
        data = data.filter(({ email}) => email.toLowerCase().includes(emailTerm));
      }
      if (withFilters) {
        const params = new URLSearchParams(window.location.search);
        const genderTerm = params.get(`Gender`).toLowerCase();
        const inputControl = document.getElementById(`gender`);
        inputControl.value = genderTerm;
    
        data = data.filter(({ gender }) => gender.toLowerCase().includes(genderTerm));
      }
      
      if (withFilters) {
        const params = new URLSearchParams(window.location.search);
        const IPterm = params.get(`IP`).toLowerCase();
        const inputControl = document.getElementById(`ip_address`);
        inputControl.value = IPterm;
    
        data = data.filter(({ ip_address }) => ip_address.toLowerCase().includes(IPterm));
      }

      const rows = data.map(({ id, first_name, last_name ,email ,gender, ip_address}) =>
    table.appendChild(
      htmlToElement(
        `<tr id="table-row-${id}"><td>${id}</td><td>${first_name}</td><td>${last_name}</td>
        <td>${email}</td><td>${gender}</td><td>${ip_address}</td></tr>`
      )
    )
  );
    
};
renderTable();
