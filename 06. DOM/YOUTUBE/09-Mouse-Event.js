 var button= document.getElementById('button');
 button.addEventListener('click',runEvent);
//  button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent); 
// button.addEventListener('mouseup',runEvent);

var box=document.getElementById('box');
// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);
// box.addEventListener('mouseout',runEvent);
// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mousemove',runEvent);
var output=document.getElementById('output');

var itemInput=document.querySelector('input[type="text"]');
var form=document.querySelector('form');
// itemInput.addEventListener('keydown',runEvent);//if shift/cntrl can also trigger thhis
//itemInput.addEventListener('keyup',runEvent);
//itemInput.addEventListener('keypress',runEvent);//only writeables can trigerr this


// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);

// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);

// itemInput.addEventListener('input',runEvent);

// var select=document.querySelector('select');

// select.addEventListener('change',runEvent);
// itemInput.addEventListener('change',runEvent);

form.addEventListener('submit',runEvent);
 

 function runEvent(e){
   //  console.log('EVENT TYPE: '+e.type);
   e.preventDefault();

    output.innerHTML="<h2> "+ e.type+"</h2>";
   output.innerHTML+="<h2> "+ e.target.value+"</h2>";
   // output.innerHTML+="<h2> "+ itemInput.value+"</h2>";

   // document.body.style.backgroundColor="rgb("+e.offsetX +","+ e.offsetY+ ",40)";
 }