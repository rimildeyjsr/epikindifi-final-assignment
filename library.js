// Write your code here!
const users = ["UserA", "UserB", "UserC", "UserD"];
const loginfield = document.getElementById("logged-user");
const table = document.getElementById("info-table")

row1 = table.insertRow(-1);
row1.insertCell(0).innerHTML = '1'
row1.insertCell(1).innerHTML = 'Book1'
row1.insertCell(2).innerHTML = 'Author1'
row1.insertCell(3).innerHTML = 'UserC'
row1.insertCell(4).innerHTML = 'UserB'
row1.insertCell(5).innerHTML = '-'


row2 = table.insertRow(-1);
row2.insertCell(0).innerHTML = "1"
row2.insertCell(1).innerHTML = 'Book2'
row2.insertCell(2).innerHTML = 'Author2'
row2.insertCell(3).innerHTML = "UserC"
row2.insertCell(4).innerHTML = "-"
row2.insertCell(5).innerHTML = "-"

row3 = table.insertRow(-1);
row3.insertCell(0).innerHTML = '3'
row3.insertCell(1).innerHTML = 'Book3'
row3.insertCell(2).innerHTML = 'Author3'
row3.insertCell(3).innerHTML = 'UserD'
row3.insertCell(4).innerHTML = 'UserC'
row3.insertCell(5).innerHTML = '-'

row4 = table.insertRow(-1);
row4.insertCell(0).innerHTML = '4'
row4.insertCell(1).innerHTML = 'Book4'
row4.insertCell(2).innerHTML = 'Author4'
row4.insertCell(3).innerHTML = 'UserA'
row4.insertCell(4).innerHTML = '-'
row4.insertCell(5).innerHTML = '-'

row5 = table.insertRow(-1);
row5.insertCell(0).innerHTML = '5'
row5.insertCell(1).innerHTML = 'Book5'
row5.insertCell(2).innerHTML = 'Author5'
row5.insertCell(3).innerHTML = 'UserA'
row5.insertCell(4).innerHTML = '-'
row5.insertCell(5).innerHTML = '-'

row6 = table.insertRow(-1);
row6.insertCell(0).innerHTML = '6'
row6.insertCell(1).innerHTML = 'Book6'
row6.insertCell(2).innerHTML = 'Author6'
row6.insertCell(3).innerHTML = 'UserB'
row6.insertCell(4).innerHTML = 'UserA'
row6.insertCell(5).innerHTML = '-'



function changeLoggedInUser() {
    const username = loginfield.value;
    let message = document.getElementById("logged-in-user-name");
    if (users.includes(username)) {
        message.innerHTML = "Logged in user: " + username;
        library(username);
    } else if (!users.includes(username) && username !== "") {
        message.innerHTML = "";
    } else if (username = "") {
        //foobar
    }
}

function library(username) {



}