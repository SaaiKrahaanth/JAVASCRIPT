const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
});

btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
});

console.log("Saai");
alert("si");
console.table({fname:"saai",age:34});
function saai(num){
    console.log("saai"+num);

}
let sk=[1,2,3];
sk.forEach(saai);


setTimeout(sk.forEach(saai),3000);

setInterval(function(){console.log("s");},3000);
