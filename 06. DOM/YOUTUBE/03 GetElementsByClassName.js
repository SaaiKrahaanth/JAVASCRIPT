var items=document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[0]=("Item 1"));
items[0].innerHTML=" 1";
// items[0].style.textAlign="center";

console.log(items[0]);

for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor="#f4f4f4";
}
console.log("ask");




