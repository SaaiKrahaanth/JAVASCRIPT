 
 //EVENT 
 var button= document.getElementById('button').addEventListener('click',buttonClick) 
 function buttonClick(e){
    // alert("button clicked bro!!")
//     document.getElementById('header-title').textContent='changed';
//     document.querySelector('#main').style.backgroundColor='red';
console.log(e.target);
var output= document.getElementById('output');
output.innerHTML=`<h3>${ e.target.classList}</h3>`
console.log(e.type);
console.log(e.clientX);
console.log(e.offsetY);
console.log(e.ctrlKey);
console.log(e.type);
 }