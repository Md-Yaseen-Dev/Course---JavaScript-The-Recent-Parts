//  if we dont want return anything, it will return typererror so we use OR operator to return in a string.

function assign(){
   return;
}
var tmp = assign() || {};
var first = tmp[0];
var second = tmp[1];

console.log(tmp)

// same with desturcting

function assign1(){
   return;

}
 tmp1 ={
a:first,
b:second,
}=assign1() || {}

console.log(first) // undefined
console.log(tmp1)


// same source with target

function assign1(){
   return{a:2,b:3};

}
 tmp1 ={
a,
b =100,   // same source and target use only one i.e a instead a:a,
}=assign1() 

console.log(a)
console.log(b);
// console.log(tmp1)