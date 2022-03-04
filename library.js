// Write your code here!
const users=["UserA","UserB","UserC","UserD"];
const loginfield=document.getElementById("logged-user");
const table = document.getElementById("info-table")

function changeLoggedInUser(){
    const username=loginfield.value;
    let message=document.getElementById("logged-in-user-name");
    if (users.includes(username)){
        message.innerHTML="Logged in user: " +username;
        library(username);
    }
    else if (!users.includes(username) && username!==""){
        message.innerHTML="";
    }
    else if (username=""){
        //foobar
    }
}

function library(username){
    

}