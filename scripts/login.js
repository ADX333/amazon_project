const loginBtn= document.getElementById('loginBtn');

loginBtn.addEventListener("click", ()=>{
  const username=document.getElementById('user').value;
  const password=document.getElementById('pass').value;
  const error=document.getElementById('error');

  const users = [
  { username: "anshuman", password: "1234" },
  { username: "dhruv", password: "1111" },
  { username: "Sagartanu", password: "1234" }
];
  if (username || !password){
    error.innerText="Please fill all the fields"
    return;
  };
   const foundUser = users.find(
    (u) => u.username === username && u.password === password
  );

  if (foundUser) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("user", foundUser.username);

    window.location.href="amazon.html"; 
  }
  else {
    error.innerText = "Invalid username or password";
  }
})
