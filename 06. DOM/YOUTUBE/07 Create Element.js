var newDiv =document.createElement('div');

//add class
newDiv.className='hello';

//add id
newDiv.id='sk';

//add Attribute
newDiv.setAttribute('title','Hello div');

newDiv.textContent='hi';
//add to body
document.body.appendChild(newDiv);

console.log(newDiv);