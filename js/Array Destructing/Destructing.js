// Destructing means decomposing a structure into its individual parts.         ~ destructuring declartive

// The desturcting assiginment syntax is a javascript expression that makes it possible to unpack values form arrays or properties from objects, into disticnt variables.


// Demo :- Destructubg assignment

let a,b, rest;
[a,b] = [10,20];
console.log(a);
console.log(rest);
[a, b,...rest] = [10,30 ,340.33,34,54]
console.log(rest);

[a, , b] = [1,2,3,,4,,5,];
console.log (a);
console.log (b);


//  -------------------kyle simpson  -----------------

var tmp = getsomeRecords();

var first = tmp[0];
var second = tmp[1];

var firstName = first.name;
var firstEmail = first.email !== undefined ? first.email : "nobodyAnone@gmail.com"
console.log(firstName);


// example


var [
    {name :firstname,
     Email:firstEmail}

] = getsomeRecords();