// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

// INPUT CREDENTIALS
let input_username="prabirsarkara@gmail.com";
let input_password="prabirsarkara";


// GIVEN CREDENTIALS
let given_username="prabir86419@gmail.com";
let given_password="prabir86419";

if(input_username==given_username && input_password==given_password){
  console.log("Login Successful!");
}else if(input_username!==given_username || input_password!==given_password){
  console.log("Incorrect Username or Incorrect Password");
}