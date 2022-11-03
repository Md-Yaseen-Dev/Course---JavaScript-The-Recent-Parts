function data(tmp ={}){

    var {
        a,
        b,
    } =tmp
}

console.log(data({a:3,b:5})) // how it works ???
// parameters in destructing

function data1 ({
    a,
    b,
} ={},x){
}

console.log(data1({a:1,b:3},34))
// console.log(z);