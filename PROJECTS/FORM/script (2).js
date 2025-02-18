document.querySelector("#submit").addEventListener("click",submit);

function submit1(){
    
const uname=document.getElementById("user").value;
console.log(uname);
const upassword=document.getElementById("password").value;
console.log(upassword);
// let msg=uname+" "+upassword;
// document.getElementById("message").innerText=msg;

if (uname=="saai"&& upassword==123) {
    document.getElementById("message").innerText="SUCCESS!!";
  
    document.getElementById("message").style.color="green";
}
else{
    document.getElementById("message").innerText="ERROR!!";
    document.getElementById("message").style.color="red";
}
}
document.querySelector("#user").addEventListener("keyup",typing);
document.querySelector("#password").addEventListener("keyup", typing);
function typing(){
    document.getElementById("message").innerText="TYPING...";
  
    document.getElementById("message").style.color="orange";
}
document.querySelector("#submit").addEventListener("mouseout", function() {
    document.getElementById("message").innerText = "CLICK NOW!!";
});

// PROMISE
function submit2(){
    const uname = document.getElementById("user").value;
        const upassword = document.getElementById("password").value;
        const message = document.getElementById("message"); 

        
    const myPromise=new Promise((resolve,reject)=>{
        
if (uname=="saai"&& upassword=="123") {
    resolve("SUCCESS!");
}    
else{
    reject("FAILURE!!");
}
    });

myPromise
.then(x => {
    message.textContent = x;
                    message.style.color = "green";

})
.catch(y => {
    message.textContent = y;
    message.style.color = "red";
});

}
async function validate(uname,upassword){
       
    if (uname=="saai"&& upassword=="123") {
        return("SUCCESS!");
    }    
    else{
        return("FAILURE!!");
    }
}
async function submit(){
    const uname = document.getElementById("user").value;
        const upassword = document.getElementById("password").value;
        const message = document.getElementById("message"); 
try{
    let result= await validate(uname,upassword);
    message.textContent = result;
    message.style.color = "green";
}
catch(error){
    message.textContent = error;
    message.style.color = "red";
}

}
