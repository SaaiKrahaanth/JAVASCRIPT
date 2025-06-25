var item = document.getElementById('item');
var form = document.getElementById('addForm');
var output = document.getElementById('output');
var filter = document.getElementById('filter');

form.addEventListener('submit',additem);

function additem(e){
    e.preventDefault();
    newItem=item.value;
    
    //print(newItem);--> now we fetched the data and stored in newitem

    //need to do replica of element to add this to previous
    /*
    <ul id="items" class="list-group">
      <li class="list-group-item">Item 1 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
      <li class="list-group-item">Item 2 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
      <li class="list-group-item">Item 3 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
      <li class="list-group-item">Item 4 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
    </ul>
*/ //lets create a element li from js

    //create a li element
    li = document.createElement('li');

    //add classname
    li.className="list-group-item";

    //createTextNode //appendChild into li
    li.appendChild(document.createTextNode(newItem));

    //create btn
    deleteBtn = document.createElement('button');

    //add class to btn
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    //create text node and append to btn node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append li inside as child
    li.appendChild(deleteBtn);

    
    //adding  li to existing items list
    items=document.getElementById('items');


    items.appendChild(li);


    console.log(li);


}
    //remove items
    items.addEventListener('click',removeItems);

    function removeItems(e){
        if(e.target.classList.contains("delete")){
            li=e.target.parentElement;
            if(confirm("Are you sure!, You need to remove item "+ li.firstChild.textContent)){
                console.log(1);
                  li.remove(); 
            }
        }
    }



//search the items

filter.addEventListener('keyup',search);

function search(e){
    let text=e.target.value.toLowerCase();
    let items=document.getElementById('items');

    let itemList= items.getElementsByTagName('li');

    Array.from(itemList).forEach(function (item){
        let eachItem=(item.firstChild.textContent.toLowerCase());
        if(eachItem.indexOf(text) !== -1){ //✅ What it does:It searches for a substring inside a string.If found: returns the starting index (0-based).If not found: returns -1
            item.style.display='block';
        }
        else{
            item.style.display='none'
        }

    })

}





function print(msg){
    output.innerHTML="<h2>"+ msg  +"</h2>";

}