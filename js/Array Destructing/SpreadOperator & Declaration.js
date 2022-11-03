// A spread operator is effective only when used within array literal , function calls, or intialized properties objects. So effectively it does the opposite thing from the rest operator.

const spread_op = "The Pain"

console.log(spread_op) //normal
console.log(...spread_op) // spread operation
console.log([...spread_op]) // it will return with strings


// spread operator in function

const numbers = [1,2,3,5,7];

function sum (a,b,c,d){
    return a + b + c + d
}

console.log(sum(...numbers)) // it will get only return values rather than how many values are intalized

function data2(){
    return [4,,10]
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

//  if the rest doesn.t have their values it returns empty array.



// the differnce between normal and destructing in the refactoring code is tmp as shown below


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


    // Desturcting
    function Num(){
        return[1,23,24]

    }
     var tmp;
    var [
        first,second, third,...fourth
    ] =tmp = Num()

    console.log(second);
    console.log(fourth);
    console.log(tmp)

    //here we create tmp because to show that we can access variables of all

    