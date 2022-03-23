//Write your code here.

// List of all users in the Library System.
const users = ['UserA','UserB','UserC','UserD'];



// The API data of book list objects. 
const books = [
    {
        id: 1,
        title:"Book1",
        author: "Author1",
        lender: "UserC",
        borrower:"UserB",
    },
    {
      id: 2,
      title:"Book2",
      author: "Author2",
      lender: "UserC",
      borrower:"-",
    },
    {
        id: 3,
        title:"Book3",
        author:"Author3",
        lender:"UserD",
        borrower:"UserC",
    },
    {
        id: 4,
        title:"Book4",
        author:"Author4",
        lender:"UserA",
        borrower:"-",
    },
    {
        id: 5,
        title:"Book5",
        author:"Author5",
        lender:"UserA",
        borrower:"-",
    },
    {
        id: 6,
        title:"Book6",
        author:"Author6",
        lender:"UserB",
        borrower:"UserA",
    },
];


// Selecting the display name paragraph Element.
const displayUser = document.getElementById("logged-in-user-name");

//Declaring the default as no users logged in.
displayUser.innerHTML = `No Users Logged In`;
let current_user = "";


//Function for rendering the table
function display_table (){
    const infoTable = document.getElementById("info-table");
    infoTable.innerHTML = `<thead>
    <tr>
    <th>Id</th>
        <th>Title</th>
        <th>Author</th>
        <th>Lender</th>
        <th>Borrower</th>
        <th>Action</th>
    </tr>
    </thead>`;
  books.map((book) => {
    infoTable.innerHTML += `<tr>
    <td>${book.id}</td>
              <td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.lender}</td>
              <td>${book.borrower}</td>
              <td>${
                book.lender === current_user
                  ? "-"
                  : book.borrower === current_user
                  ? "<button id='return_book' onclick='return_book(this)'>Return</button>"
                  : current_user && book.borrower === "-"
                  ? "<button id='borrow' onclick='borrow(this)'>borrow</button>"
                  : "-"
              }</td>
              </tr>`;
  });
  if (current_user) {
    infoTable.innerHTML += `<tr>
  <td>${books.length + 1}</td>
            <td><input id='title' type='text' placeholder='title'></td>
            <td><input id='author' type='text' placeholder='Author'></td>
            <td>${current_user}</td>
            <td>-</td>
            <td><button id='borrow' onclick='addBook()'>Add book</button></td>
            </tr>`;
  }
};
display_table();

// function to perform the onclick action to be performed after user clicks the login button.
function changeLoggedInUser()  {
  const user = document.querySelector("#logged-user").value;
  current_user = user;
  if (users.includes(user)) {
    displayUser.innerText = `Logged In User: ${user}`;
    display_table();
  } else {
    alert("User not found");
  }
};

// Function for borrowing the book
function borrowBook(node) {
  const bookId = Number(node.parentNode.parentNode.childNodes[0].innerText);
  const bookIndex = books.findIndex((book) => book.id === bookId);
  books[bookIndex].borrower = current_user;

  display_table();
};

// Function of return_book action by the loggedin user
function returnBook(node)  {
  const bookId = Number(node.parentNode.parentNode.childNodes[0].innerText);
  const bookIndex = books.findIndex((book) => book.id === bookId);
  books[bookIndex].borrower = "-";
  display_table();
};

// Function to addBook by the loggedin user
function addBook()  {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const book = {
    id: books.length + 1,
    title: title,
    author: author,
    lender: current_user,
    borrower: "-",
  };
  if (title && author) {
    books.push(book);
  } else {
    alert("Fill all the fields");
  }
  display_table();
};

