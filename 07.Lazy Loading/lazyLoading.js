//generator pause and and resume

function* welcome(){
    console.log("cosole 1");
    yield "hii"
    console.log("cosole 2");
    yield "hii 2"
    console.log("cosole 3");
    
}
const itr=welcome();
itr.next();
console.log(itr.next().value);
itr.next();
itr.next();
