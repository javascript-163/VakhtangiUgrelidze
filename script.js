let array = [
  { 
    user: "test1",
    password: "password1"
 },
  { 
    user: "test2",
    password: "password2"
 },
  { 
    user: "test3",
    password: "password3"
 },
];

let user = document.getElementById("user");
let pass = document.getElementById("pass");
let mainp = document.getElementById("mainp");


function login(){
    
    let u =user.value
    let p =pass.value

    let upuser = {
        u,
        p
    }
    
    localStorage.setItem("user",JSON.stringify(upuser))

    let showuser = JSON.parse( localStorage.getItem("user"))

    console.log(showuser);

    for(let i = 0 ; i < array.length; i++){
    
        if(array[i].user == showuser.u && array[i].password == showuser.p){

           return mainp.innerHTML = "სისტემაში შესვლა განხორციელდა წარმატებულად"
        }else{
           return mainp.innerHTML = ""
        }
    }

}