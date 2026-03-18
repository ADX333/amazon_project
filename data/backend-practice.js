const xhr=new XMLHttpRequest();

xhr.addEventListener('load',()=>{
  console.log(xhr.response);
})
xhr.addEventListener('progress',()=>{
  console.log("Wait for response");
})
xhr.addEventListener('error',()=>{
  console.log("Invalid Path or Network Error");
})

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send(); 
//xhr.response 