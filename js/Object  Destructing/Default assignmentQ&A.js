var obj1 = {
    a:{
        b:3,
        c: "sku",
    }
};
console.log(obj1);  
// console.log(a) // here undefined  --why  but not it destructing
console.log(c); // undefined -- i think it is not targeting to source.


// Destrucuting

var{
    a:{
       b = 3,
       c,
    }={       c :9,
                    }   // strongly recommended not to use in these braces
} = obj1;

console.log(obj1); // why it is not invoked to normal object.
console.log("destructing :" + c ) // targeting to source of above obj1 not in destructor -- why
console.log(a) // undefined ?? not targeting to source 

// console.log(a); // a is not defined -- and it is defined but it has properties too. it should written b and c but not ---  why ?
console.log(c);   //output :3  --  why ,  i think it is targeting to source above
console.log(obj1.a)
// -------------------------

//  obj2
var obj2 = {

    a:{},
    b:3,
}
console.log(obj2) // undefined


// obj2 destructing


var{
    a =7,
    d:{
       b =2,
       c=10,

    }={}
} = obj2;

console.log(a); // a is defiing empty object 
console.log(obj2)

// -------------------------

var obj3 ={};
console.log(obj3); // output: object -- {}




// ;  

//  destructing obj3
var {
    a =4,
    b:{ 
        c = 3,
        d = 6
    } ={},

} =obj3;
console.log(obj3)
console.log(a);
console.log(b);
console.log(c);
console.log(d);



