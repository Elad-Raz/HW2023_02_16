// add user button (with promt and as an object to the array); show log button (with console.log); delete last user; delete all users
let users = [];

function addUsersBtn() {
  let userName = prompt("please enter your name");
  let userAge = prompt("please enter your age");
  users.push({ userName, userAge });

  // console.log(users);
}

function writeLog() {
  console.log(users); // protocol: mr miyagi - מה השוני בין שורה 9 ל13??
}
function deleteLastUser() {
  users.pop();
  //console.log(users);
}
function resetUsers() {
  //users.fill("deleted");
  users.length = 0;
  // console.log(users);
}
