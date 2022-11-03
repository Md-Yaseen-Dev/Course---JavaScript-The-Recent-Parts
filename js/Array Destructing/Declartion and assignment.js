// Destructing all about assignments

function classroom() {

    return ["1", "2", "3"]
}

var tmp = classroom();

var firstclass, secondclass, thirdclass;

firstclass = tmp[0];
secondclass = tmp[1];
thirdclass = tmp[2];

console.log(secondclass);


//  desturcting

function classroom() {

    return ["1", "2", "3"]
}

var tmp = classroom();

var firstclass, secondclass, thirdclass;
[
    firstclass,
    secondclass,
    thirdclass
] = tmp = classroom()
console.log("destructing :" + secondclass);


// we can also assign objects
function classroom1() {

    return ["1", "6", "3"]

}

var tmp = classroom1();
var firstclass, secondclass, thirdclass;
var o = {};

o.firstclass = tmp[0];
o.secondclass = tmp[1];
o.thirdclass = tmp[2];

console.log(o.secondclass);
console.log(o)


// destructing

function classroom2() {

    return [12, 2, 3, 4, , 6, 7,]
}


var tmp = classroom2();

var firstclass, secondclass, thirdclass;

var p = {};
[
    p.firstclass,
    p.secondclass,
    p.thirdclass,
    ...p.fourth
] = tmp;
console.log("destructing :" + p.fourth);
console.log("obj" + p); // why it is  object object rather printing object values. because of concatenation.
console.log(p);


// for same for array


function classroom3() {

    return [12, 2, 3, 4, , 6, 7,]
}


var tmp = classroom3();


var a = [];
[                // if we assign tmp before it shows error of not iterable
    a[0],
    a[1],
    a[30],
    ...a[40]
] = tmp;
console.log("tmp in array" + tmp);
console.log("array destructing : " + a)




