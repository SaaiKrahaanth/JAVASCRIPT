    let itemList=document.querySelector('#items');
    console.log(itemList.parentNode);
    itemList.parentNode.style.backgroundColor = '#f4f4f4';
    itemList.parentNode.parentNode.style.backgroundColor = "black";

    itemList.children[1].style.backgroundColor = "black";
    //first element style
    itemList.firstElementChild.style.backgroundColor = "black";