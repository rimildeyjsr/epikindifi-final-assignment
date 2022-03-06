const login = document.getElementById("logged-user");
const table = document.getElementById("info-table");
const users = ["UserA", "UserB", "UserC", "UserD"];
var user = "";
var statusCheck = 0;

const database = [
  {id: 1,name: "Book1",author: "Aut-1",lender: "UserC",borrower: "UserB",action: "",},
  {id: 2,name: "Book2",author: "Aut-2",lender: "UserC",borrower: "",action: "",},
  {id: 3,name: "Book3",author: "Aut-3",lender: "UserD",borrower: "UserC",action: "",},
  {id: 4,name: "Book4",author: "Aut-4",lender: "UserA",borrower: "",action: "",},
  {id: 5,name: "Book5",author: "Aut-5",lender: "UserA",borrower: "",action: "",},
  {id: 6,name: "Book6",author: "Aut-6",lender: "UserB",borrower: "UserA",action: "",},
];

for (var i = 0; i < database.length; i++) {
  var row = table.insertRow();
  var id = row.insertCell(0);
  var namenew = row.insertCell(1);
  var author = row.insertCell(2);
  var lender = row.insertCell(3);
  var borrower = row.insertCell(4);
  var action = row.insertCell(5);
  id.innerHTML = database[i].id;
  namenew.innerHTML = database[i].name;
  author.innerHTML = database[i].author;
  lender.innerHTML = database[i].lender;
  borrower.innerHTML = database[i].borrower;
  action.innerHTML = "";
}

function changeUser() {
  const username = login.value;
  let message = document.getElementById("logged-in-user-name");
  if (users.includes(username)) {
    if (statusCheck === 1) {
      for (let i = 1; i < table.rows.length - 1; i++) {
        row = table.rows[i];
        row.cells[5].innerHTML = "";
      }
      table.deleteRow(table.rows.length - 1);
    }
    message.innerHTML = "Logged in user: " + username;
    user = username;
    statusCheck = 1;
    addrow(user);
  } else if (!users.includes(username) && username !== "") {
    message.innerHTML = "";
    statusCheck = 0;
    for (let i = 1; i < table.rows.length - 1; i++) {
      row = table.rows[i];
      row.cells[5].innerHTML = "";
    }
    table.deleteRow(table.rows.length - 1);
  } else if ((username = "")) {
    foobar;
  }
}

function addrow(user) {
  table.insertRow(database.length + 1).innerHTML = `<tr>
    <td></td>
    <td><input type="text" id="titlenew" placeholder="Title" required></input></td>
    <td><input type="text" id="authornew" placeholder="Author" required></input></td>
    <td>${user}</td>
    <td></td>
    <td><button type="button" onclick="insertnew(user)">Add</button></td>
    </tr>`;
  loggedin();
}

function insertnew(userlogged) {
  var titlename = document.getElementById("titlenew");
  var authorname = document.getElementById("authornew");
  database.push({
    id: database.length,
    name: titlename.value,
    author: authorname.value,
    lender: userlogged,
    borrower: "",
    action: "",
  });
  var row = table.insertRow(database.length);

  var id = row.insertCell(0);
  id.innerHTML = database.length;

  var namenew = row.insertCell(1);
  namenew.innerHTML = titlename.value;

  var author = row.insertCell(2);
  author.innerHTML = authorname.value;

  var lender = row.insertCell(3);
  lender.innerHTML = userlogged;

  var borrower = row.insertCell(4);
  borrower.innerHTML = "";

  var action = row.insertCell(5);
}

function loggedin() {
  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    if (database[i - 1].lender !== user && database[i - 1].borrower === "") {
      row.cells[5].innerHTML = `<button onclick="borrow(${i})">Borrow</button>`;
    } else if (
      database[i - 1].lender !== user &&
      database[i - 1].borrower === user
    ) {
      row.cells[5].innerHTML = `<button onclick="returning(${i})">Return</button>`;
    }
  }
}

function borrow(rowno) {
  let row = table.rows[rowno];
  row.cells[5].innerHTML = `<button onclick="returning(${rowno})">Return</button>`;
  row.cells[4].innerHTML = user;
  database[rowno - 1].borrower = user;
}

function returning(rowno) {
  let row = table.rows[rowno];
  row.cells[5].innerHTML = `<button onclick="borrow(${rowno})">Borrow</button>`;
  row.cells[4].innerHTML = "";
  database[rowno - 1].borrower = "";
}
