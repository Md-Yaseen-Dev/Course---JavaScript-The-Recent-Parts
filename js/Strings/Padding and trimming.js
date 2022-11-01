//  string padding was added in Es2017

//  string trimming was added in Es2019



// padding is used to add the items in start or end (i.e left or right) . in padding there are two parameters (first paramets counts number of the index and prints the value until the number completes  . 2nd parameter is a value/string )

var string = "welcome to js react !"

console.log(string.padStart(23 , "*")); // it will give two stars  in the start - output : **welcome to js react !

console.log(string.padEnd(23,"*"))  // it will give two stars in the end. - output : "welcome to js react !**"

console.log(string.padStart(50, "$")) // it will work with the  2nd parameter i.e value until the given first parameter reaches to the given number.

console.log(string.padStart(30)) // it will return to the number with the empty strings. output:                 welcome to js react.


//  trimming have start and end .


var str = "some stuff    \df\f"
console.log(str.trim(2));