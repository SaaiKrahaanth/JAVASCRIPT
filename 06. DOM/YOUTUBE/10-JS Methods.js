/*
//1)map 

const data =[
    {id:'1',title:"car"},
    {id:'2',title:"bus"},
    {id:'3',title:"plane"},
    {id:'4',title:"train"},
    {id:'5',title:"ship"},
    
];

const upperData = data.map((i)=>{
    return i.title.toUpperCase();
});

console.log(upperData);

//2)filter

    const filteredData = data.filter((i)=>{
        return i.id %2==0;
    });
    console.log(filteredData);


// 3) SPLICE 

    const removedArray1=data.splice(2,2);//(start index,number of element from start)
    console.log(removedArray1);

// 4) SLICE
  const removedArray=data.slice(0,2);
  console.log(removedArray);

// 5) concat

const a1 =[1,2,3];
const a2= [4,5,6];
const a3=[7,8,9];

const mergeArray=a1.concat(a2,a3);
console.log(mergeArray);


//6) find 

const data1 =[
    {id:'1',title:"car"},
    {id:'2',title:"bus"},
    {id:'3',title:"plane"},
    {id:'4',title:"train"},
    {id:'5',title:"ship"},
    
];
const indexItem = data1.findIndex((i)=>{
    return i.id=='2';
})
const finditem = data1.find((i)=>{
    return i.title=="plane";
})
console.log(indexItem);
console.log(finditem);

*/

//7 ) Destructuring 

const name1=["saai","krahaanth"];
const [first,last]=name1;
 
console.log(first,last);
const data2 =[
    {id:'1',title:"car"},
    {id:'2',title:"bus"},
    {id:'3',title:"plane"},
    {id:'4',title:"train"},
    {id:'5',title:"ship"},
    
];
const datam={id:'1',title:"car"}
const[sk]=data2;
console.log(sk);


//SPREAD AND  REST

const intro =["s","|s","sd"];

const copys=[...intro,"sdf"];
console.log(copys);
