var header = document.querySelector('#header-title');
var input = document.querySelectorAll('input');
var inputsub = document.querySelector('input[type="submit"]');

reds="ss"
input[0].value="sd";
input[0].style.color='red';


// ACCESS MUL ELEMENT IN CLASS:
// 1) querySelectorAll('input[type="submit"]');
var inputsub = document.querySelectorAll('input[type="submit"]');
inputsub[0].style.color='red';
inputsub[0].value=reds;
let j=3;

// 2 ) last-child , nth-child(i)
var item = document.querySelector('.list-group-item');
var lastitem = document.querySelector('.list-group-item:last-child');
var seconditem = document.querySelector(`.list-group-item:nth-child(${j})`);//index start from 1

item.style.color='red';
lastitem.style.color='blue';
seconditem.style.color='yellow';


var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');


for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor='#ccc';

}


