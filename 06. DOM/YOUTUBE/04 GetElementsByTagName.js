var li = document.getElementsByTagName('li');
console.log(li);

li[0].innerHTML=" 1";
li[0].style.textAlign="center";

console.log(li[0]);

for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor="#f4f4f4";
}
console.log("ask");



