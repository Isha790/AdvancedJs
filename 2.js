// let array=[1,2,3,4,5];
// let newAray=[];
// for(let i=0;i<array.length;i++){
//     newAray[i]=array[i]*array[i];
// }
// console.log(newAray);
// let arr=[5,10,15,20,25];
// function functionForMap(element){
//     return element*element;
// }
// let functionForMap(element)=>element*element;
// let newArr=arr.map(functionForMap)
// let newArr=arr.map((element,index)=>{
//     console.log(index);
//     return element*element;
// });
// console.log(newArr);
//In js a function is also a js object

//2. forEach()
let array=[1,2,3,4,5];
array.forEach((element,index)=>{
    console.log(element);
})