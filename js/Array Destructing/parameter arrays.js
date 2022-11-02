//  parameter arrays

function parameter(tmp) {
    var tmp;
    var [
        first =10,
        second =20,
        third =30, 
    ] = tmp;
}

// const s = parameter(10,20,30)
// console.log(s);

// Destructing parameters


function parameter1([
    first =10,
    second =20,
    third =30, 
]) {
    //...                   // i dont get how to access first =10,second =20 , third =30, in array
 

}


// function data() {

//     return null;

// }

// var tmp;
// var [
//     first =10,
//     second =20,
//     third =30,, 
//     ...fourth
// ] = tmp = data();

// // console.log(tmp) // it gives typeerror :object null is not iterable

//  it gives type error

// ----------------- prints empty array  when you get typeerrors----------------


function data1() {

    return null;

}

var tmp1;
var [
    first =10,
    second =20,
    third =30,, 
    ...fourth
] = tmp1 = data1() || [];
console.log(tmp1) // it gives typeerror :object null is not iterable


//  --------------------paramerts to prints empty array ------------



function parameter(tmp=[]) {
    var tmp;
    var [
        first =10,
        second =20,
        third =30, 
    ] = tmp;
}

const s = parameter();
console.log(s)
//destructing

function parameter1([
    first =10,
    second =20,
    third =30, 
]=[]) {
    //...                   // i dont get how to access first =10,second =20 , third =30, in array
 

}