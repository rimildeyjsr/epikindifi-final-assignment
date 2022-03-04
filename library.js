// Write your code here!
let books = [
    {
        id: 1,
        title: "The Help",
        author: "Kathryn Stockett",
        lender: "Sergio",
        borrower: "Zlatan",
        action: "_",
    },
    {
        id: 2,
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        lender: "Sergio",
        borrower: "_",
        action: "_",
    },
    {
        id: 3,
        title: "Water for Elephants",
        author: "Sara Gruen",
        lender: "Ramos",
        borrower: "Sergio",
        action: "_",
    },
    {
        id: 4,
        title: "The Book Thief",
        author: "Markus Zusak",
        lender: "Ibrahimovic",
        borrower: "_",
        action: "_"
    },
    {
        id: 5,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        lender: "Ibrahimovic",
        borrower: "_",
        action: "_",
    },
    {
        id: 6,
        title: "The Time Traveler's Wife",
        author: "Audrey Niffenegger",
        lender: "Zlatan",
        borrower: "Ibrahimovic",
        action: "_",
    }
];

let user = null;
document.getElementById('logged-in-user-name').innerHTML = `No User Logged In`

function showTable() {
    let tmp = ''
    books.forEach((element, index) => {
        tmp += `
            <tr id="row_${index + 1}">
                <td>${element.id}</td>
                <td>${element.title}</td>
                <td>${element.author}</td>
                <td>${element.lender}</td>
                <td>${element.borrower}</td>
                <td>${user === null ? "_" : (user === element.borrower ? `<button onClick="returnBook(${element.id})">Return</button>` : (element.borrower === "_" && element.lender !== user ? `<button onClick="borrowBook(${element.id})">Borrow</button>` : "_"))}</td>
            </tr>
        `
    })
    if (user) {
        tmp += `
            <tr id="row_${books.length + 1}">
                    <td>${books.length + 1}</td>
                    <td>
                        <input type="text"  id="title_input" placeholder="title">
                    </td>
                    <td>
                        <input type="text"  id="author_input" placeholder="author">
                    </td>
                    <td>${user}</td>
                    <td>_</td>
                    <td><button onClick="addBook()">Add Book</button></td>
            </tr>
        `
    }
    document.getElementById('table_body').innerHTML = tmp;
}
showTable()

let changeLoggedInUser = function () {
    const inputValue = (document.getElementById('logged-user').value).trim();
    if (!inputValue) {
        alert("Give an User Name !!!")
        return;
    }
    books.forEach((element) => {
        if (inputValue === element.lender || inputValue === element.borrower) {
            document.getElementById('logged-in-user-name').innerHTML = `Logged In User: ${inputValue}`;
            user = inputValue;
            showTable();
            document.getElementById("title_input").addEventListener("keyup", function (et) {
                if (et.keyCode === 13 || et.key === 'enter' || et.keyCode === 39 || et.key === 'right arrow') {
                    document.getElementById("author_input").focus();
                }
            })
            document.getElementById("author_input").addEventListener("keyup", function (ea) {
                if (ea.keyCode === 13 || ea.key === 'enter') {
                    addBook();
                }
                if (ea.keyCode === 37 || ea.key === 'left arrow') {
                    document.getElementById("title_input").focus();
                }
            })
            return;
        }
    })

}

document.getElementById("logged-user").addEventListener("keyup", function (event) {
    if (event.keyCode === 13 || event.key === 'enter') {
        changeLoggedInUser();
    }
})

const returnBook = function (book_id) {
    books[book_id - 1].borrower = "_";
    showTable();
}

const borrowBook = function (book_id) {
    books[book_id - 1].borrower = user;
    showTable()
}

const addBook = function () {
    let book_title = document.getElementById('title_input').value;
    book_title = book_title.trim();
    let book_author = document.getElementById('author_input').value;
    book_author = book_author.trim();

    if (!book_title && !book_author) {
        alert("Book & Author Name Not Entered !!!");
        return;
    }
    if (!book_title) {
        alert("Book Name Not Entered !!!");
        return;
    }
    if (!book_author) {
        alert("Author Name Not Entered !!!");
        return;
    }

    let newBook = {
        id: books.length + 1,
        title: book_title,
        author: book_author,
        lender: user,
        borrower: "_",
        action: "_",
    }
    books.push(newBook);
    showTable()
}

//list of available options

const tags = [
    "Ibrahimovic",
    "Zlatan",
    "Sergio",
    "Ramos",
];

//length of datalist tags
const n = tags.length;

function handleAutoFill(value) {
    document.getElementById('datalist').innerHTML = '';
    //setting datalist empty at the start of function
    //if we skip this step, same name will be repeated

    let l = value.length;
    //input query length
    for (let i = 0; i < n; i++) {
        if (((tags[i].toLowerCase()).indexOf(value.toLowerCase())) > -1) {
            //comparing if input string is existing in tags[i] string

            let node = document.createElement("option");
            let val = document.createTextNode(tags[i]);
            node.appendChild(val);

            document.getElementById("datalist").appendChild(node);
            //creating and appending new elements in data list
        }
    }
}