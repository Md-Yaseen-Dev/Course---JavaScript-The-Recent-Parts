
function data(){
// return [1,undefined,3]
return [1,null,3]

}
var tmp = data();
console.log(tmp);
var first = tmp[0];
var second = tmp[1] !== undefined ? tmp[1]: 19; 
console.log(second);



// this is pattern it is related in assignments

// sqaure brackets defines pattern of destructing


function data2(){
    return [4,undefined,6]
    return [4,null,6]
 
}
var [
    first,
    second = 50 ,
    third,
] =data2()
console.log(data2())
console.log(second)

// Note/:-if u use null it will not get default value it returns null
// note :-  in undefined u can return the default values.

// the arrray has more index 

//  for normal array


function data(){
    return [1,undefined,3,4,5,44,6,54,34]
    
    }
    var tmp = data();
    console.log(tmp);
    var first = tmp[0];
    var second = tmp[1] !== undefined ? tmp[1]: 19; 
    var fourth =tmp.slice(5)
    console.log(second);

    console.log(fourth);

// for destructing
function data2(){
    return [4,undefined,6,3,45,6,756,55]
    // return [4,null,6]
 
}
var [
    first,
    second = 50 ,
    third,
    ...fourth 
] =data2()
console.log(data2())
console.log(second)
console.log(fourth)

//  we use ... to return rest of the array values