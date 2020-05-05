// 6. Дан массив пользователей
// Условия:
// // * В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю.
// // * Количество пользователей может быть любым.
// // * Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер какой то.
// // * В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.

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
}

const arrKeyThead = Object.keys(thead);

const container = document.querySelector(".container");

/**Формирует 1 tr
 * Принимает одного юзера, массив с контентом [name, email, ...] и счетчик
 * Вернет tr с счетчиком и контентом в td
 */
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
    // console.log(tr);
    return tr
}

/** Формирует tbody из нескольких tr */
function createTbody(users) {
    let counter = 0;
    let arrBalanse = [];
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    // const td = document.createElement("td");
    for (let user of users) {
        counter++;
        arrBalanse.push(user.balance);
        tbody.appendChild(createOneTr(user, arrKeyThead, counter));
    }
    const totalBalance = arrBalanse.reduce(function (acc, item) {
        return acc + item
    }, 0);
    tr.insertAdjacentHTML('afterbegin', `<td class="text-right" colspan="${arrKeyThead.length+1}">Total balance: <b>${totalBalance}</b> </td>`);
    tbody.appendChild(tr);
    return tbody;
}

/** Формирует thead из объекта thead */
function createThead(objectContent) {
    const thead = document.createElement("thead");
    thead.classList.add("thead-dark");
    const tr = document.createElement('tr');

    for (let key in objectContent) {
        const th = document.createElement('th');
        th.setAttribute("scope", "col");
        th.textContent = objectContent[key];
        tr.appendChild(th);
    }

    tr.insertAdjacentHTML('afterbegin', `<th scope="col">#</th>`);
    thead.appendChild(tr);

    return thead
}

function renderTable() {
    const fragment = document.createDocumentFragment();
    const table = document.createElement("table");
    table.classList.add("table", "mt-5");
    table.appendChild(createThead(thead));
    table.appendChild(createTbody(users));
    fragment.appendChild(table);
    container.appendChild(fragment);
}

renderTable()
// console.log(createThead(thead));
// createTbody(users)

// createOneTr({
//     "_id": "5d220b10e8265cc978e2586b",
//     "isActive": true,
//     "balance": 2853.33,
//     "age": 20,
//     "name": "Buckner Osborne",
//     "gender": "male",
//     "company": "EMPIRICA",
//     "email": "bucknerosborne@empirica.com",
//     "phone": "+1 (850) 411-2997",
//     "registered": "2018-08-13T04:28:45 -03:00",
//     "nestedField": {
//         total: 300
//     }
// }, ["name", "email", "_id", "balance"], 1)

// function createTbody() {
//     const tr = document.createElement('tr');
//     const th = document.createElement('th');
//     th.setAttribute("scope", "row");
//     th.textContent = "1"
//     tr.appendChild(th);
//     tr.appendChild(createTd(thead));
//     return tr;
// }
// console.log(createTd(users));


// function createTd(arrOfUserObjects, arr) {
//     const fragment = document.createDocumentFragment()
//     const tbody = document.createElement("tbody");
//     for (let user of arrOfUserObjects) {
//         const td = document.createElement('td');
//         td.textContent = user[key];
//         tbody.appendChild(td);
//         fragment.appendChild(tbody);
//     }
//     return fragment;
// }