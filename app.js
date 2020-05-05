const users = [{
        "_id": "5d220b10e8265cc978e2586b",
        "isActive": true,
        "balance": 2853.33,
        "age": 20,
        "name": "Buckner Osborne",
        "gender": "male",
        "company": "EMPIRICA",
        "email": "bucknerosborne@empirica.com",
        "phone": "+1 (850) 411-2997",
        "registered": "2018-08-13T04:28:45 -03:00",
        "nestedField": {
            total: 300
        }
    },
    {
        "_id": "5d220b10144ef972f6c2b332",
        "isActive": true,
        "balance": 1464.63,
        "age": 38,
        "name": "Rosalie Smith",
        "gender": "female",
        "company": "KATAKANA",
        "email": "rosaliesmith@katakana.com",
        "phone": "+1 (943) 463-2496",
        "registered": "2016-12-09T05:15:34 -02:00",
        "nestedField": {
            total: 400
        }
    },
    {
        "_id": "5d220b1083a0494655cdecf6",
        "isActive": false,
        "balance": 2823.39,
        "age": 40,
        "name": "Estrada Davenport",
        "gender": "male",
        "company": "EBIDCO",
        "email": "estradadavenport@ebidco.com",
        "phone": "+1 (890) 461-2088",
        "registered": "2016-03-04T03:36:38 -02:00",
        "nestedField": {
            total: 200
        }
    }
];

const thead = {
    "name": "Name",
    "email": "E-Mail",
    "gender": "Gender",
    "company": "Company",
    "balance": "Balance",
};

const arrKeyThead = Object.keys(thead);
const container = document.querySelector(".container");

renderTable();

// Принимает объект, массив и число(счетчик) Формирует <tr> 
// с порядковым номером(счетчик) используя данные из объекта по ключу из массива 
function createOneTr(user, arr, counter) {
    const tr = document.createElement("tr");
    const th = document.createElement('th');
    th.setAttribute("scope", "row");
    th.textContent = counter;
    tr.appendChild(th);
    for (let key of arr) {
        const td = document.createElement('td');
        td.textContent = user[key];
        tr.appendChild(td);
    }
    return tr;
}

// Принимает массив из объектов перебирает массив
// Плюсует счетчик, Формирует tbody из нескольких tr и Total balance 
function createTbody(users) {
    let counter = 0;
    let arrBalanse = [];
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    users.forEach(user => {
        counter++;
        arrBalanse.push(user.balance);
        tbody.appendChild(createOneTr(user, arrKeyThead, counter));
    });
    const totalBalance = arrBalanse.reduce(function (acc, item) {
        return acc + item
    }, 0);
    tr.insertAdjacentHTML('afterbegin', `<td class="text-right" colspan="${arrKeyThead.length+1}">Total balance: <b>${totalBalance}</b> </td>`);
    tbody.appendChild(tr);
    return tbody;
}

// Формирует thead из объекта thead
function createThead(theadObject) {
    const thead = document.createElement("thead");
    thead.classList.add("thead-dark");
    const tr = document.createElement('tr');

    for (let key in theadObject) {
        const th = document.createElement('th');
        th.setAttribute("scope", "col");
        th.textContent = theadObject[key];
        tr.appendChild(th);
    }

    tr.insertAdjacentHTML('afterbegin', `<th scope="col">#</th>`);
    thead.appendChild(tr);

    return thead;
}

// Собирает все и рендерит всю таблицу
function renderTable() {
    const fragment = document.createDocumentFragment();
    const table = document.createElement("table");
    table.classList.add("table", "mt-5");
    table.appendChild(createThead(thead));
    table.appendChild(createTbody(users));
    fragment.appendChild(table);
    container.appendChild(fragment);
}