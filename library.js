// Write your code here!

//Creating the API database of books.
const books = [
    {
        id: 1,
        Title:"Book1",
        Author: "Author1",
        Lender: "UserC",
        Borrower:"UserB",
    },
    {
        id: 2,
        Title:"Book2",
        Author: "Author2",
        Lender: "UserC",
        Borrower:"-",
    },
    {
        id: 3,
        Title:"Book3",
        Author:"Author3",
        Lender:"UserD",
        Borrower:"UserC",
    },
    {
        id: 4,
        Title:"Book4",
        Author:"Author4",
        Lender:"UserA",
        Borrower:"-",
    },
    {
        id: 5,
        Title:"Book5",
        Author:"Author5",
        Lender:"UserA",
        Borrower:"-",
    },
    {
        id: 6,
        Title:"Book6",
        Author:"Author6",
        Lender:"UserB",
        Borrower:"UserA",
    },
];

//List of all users in the library system.
const User = ['UserA','UserB','UserC','UserD'];



//This is the heading of the USER to be displayed whoever is logged in.
let disp = document.getElementById('logged-in-user-name');
disp.innerHTML = `No User logged in`;

//Stores the current user logged in.
let current_user = "";

function display_table(){

    let tableData="";
books.forEach((book) => {
    tableData += `<tr>
    <td>
        ${book.id}
    </td>
    <td>
        ${book.Title}
    </td>
    <td>
        ${book.Author}
    </td>
    <td>
        ${book.Lender}
    </td>
    <td>
        ${book.Borrower}
    </td>
    <td>
        ${
            book.Lender === current_user
            ? "-" : book.Borrower === current_user
            ? "<button id='returnBook' onClick='returnBook(this)'>Return</button>"
            : current_user && book.Borrower === "-"
            ? "<button id='borrow' onClick='borrow(this)'>Borrow</button>"
            : "-"
        }
    </td>
</tr>`;
});

if(current_user) {
    document.getElementById('info-table').innerHTML += `<tr>
    <td>${books.length + 1}</td>
    <td><input type="text" id="title" placeholder="Title"></td>
    <td><input type="text" id="author" placeholder="Author"></td>
    <td>${current_user}</td>
    <td>-</td>
    <td><button id="addBook" onClick="addBook()">Add Book</button></td>
</tr>`;
}

/* Adding Attributes of class and id to the table head*/
const table_head = document.querySelector("thead");
table_head.setAttribute("id", "info-table-head");
table_head.setAttribute("class", "book-table-head");

/*Creating a table body tag and adding class and id attributes to it*/
const table_body = document.createElement("tbody");
table_body.setAttribute("id", "info-table-body");
table_body.setAttribute("class","book-table-body");
document.getElementById("info-table-head").after(table_body); //Placing the tbody tag after the table head in the DOM.

/*Displaying the API database in the table.*/
document.getElementById("info-table-body").innerHTML = tableData;
}


display_table();

function changeLoggedInUser(){
    let input_user = document.getElementById('logged-user').value;
    current_user = input_user;
    let user_present = false;
    User.map((users) => {
        if(input_user===users){
            user_present = true;
            disp.innerHTML = `Logged in user: ${input_user}`;
        }
        // else if(input_present===" "){
        //     user_present="blank";
        // }
    });
    if(user_present===false){
        alert("No such users found");
        disp.innerHTML = `No User logged in`;
    }
    // else if(user_present==="blank"){
    //     alert("User not passed");
    //     disp.innerHTML = `No User logged in`;
    // }

    console.log(input_user);
    console.log("Button was Clicked");
}


function borrow(node) {
    const bookId = Number(node.parentNode.parentNode.childNodes[0].innerText);
    const bookIndex = books.findIndex((book) => book.id === bookId);
    books[bookIndex].borrower = input_user;

    display_table();
}


function returnBook(node) {
    const bookId = Number(node.parentNode.parentNode.childNodes[0].innerText);
    const bookIndex = books.findIndex((book) => book.id === bookId);
    books[bookIndex].borrower = "-";
    display_table();
}

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const book = {
        id: books.length + 1,
        Title: title,
        Author: author,
        Lender: current_user,
        Borrower: "-",
    };
    if(Title && Author) {
        books.push(book);
        display_table();
    }
    else
    {
        alert("Please enter all the fields of the book");
    }
    display_table();
}