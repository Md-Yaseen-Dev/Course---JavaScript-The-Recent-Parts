// object has same destructing like array.but the difference between them is nuance.

//  normal object
function data() {
    return { a: 1, b: 2, c: 3 };
}

var tmp = data();
var first = tmp.a;
var second = tmp.b;
var third = tmp.c;

console.log(tmp);
console.log(first);

// object destructing

function data1() {
    return { a: 1, b: 2, c: 5 };
}
var tmp1;
var {
    a: first,
    c: third,
    second,

} = tmp1 = data1();
console.log(tmp1)
console.log(second); // position doesnot matter
console.log(third); // it matters source

// here in object position does not matter . It matters about source to be assigned.


// Note :- the differnce between array destructing and object destructing depends on source and position.  In object it works on source as shown above, in arrays it will work on position.


//  example for extra stuff of rest parameters in object destructing



function restparmeter() {

    return { a: 1, b: 2, c: 3, d: 4 };

}
var tmp2;
var {
    b: first,
    a: second,
    ...third
} = tmp2 = restparmeter()
console.log(third);
console.log(second);


//  for default of undefined value or missing value we can assign


function Default() {

    return { a: 1, c: 10, d: 43 };

}
var tmp2;
var {
    b: first = 10,
    a: second,
    ...third
} = tmp2 = Default()
console.log(third);
console.log(second);
console.log("destructing :" + first);

// In normal way the algorithm works to assign

function nor_Default() {
    return { b: 2, c: 7 }
}
var tmp = nor_Default();
var first = tmp.a;
var second = tmp.b;
var third = tmp.c;

console.log("before: " + first);
var first = tmp.a !== undefined ? tmp.a : 34;
console.log("after : " + first);


// source and target

// object literal

var o = {
    prop:value,
    target:Source,
  // here property serving to target and value is serving to source
}

// in destructing object

var {
    prop:value,
    source:target,

    // here role is not important at all the 
} =o;