var button = document.getElementById('btn');
var num = document.getElementById('number-box');
button.addEventListener('click',increment);


var i=0
function increment(){
   
    i+=1;
    num.textContent=i;
   state()

}
var comment = document.getElementById('comment');
comment.addEventListener('click',restart);

function state(){
    if (i>0){
        comment.textContent="Click Here to Restart!!";
        comment.style.left="39%";
    }

}

function restart(){
    i=0;
    num.textContent=i;
    comment.textContent='Start Clicking..';
    comment.style.left="36%";
    
}
