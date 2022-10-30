//  Template literals (template strings)

//  we use backtick for template literals instead of single and double quotes. to access a string.

var name = "Anderson";
var email = "anderson78gmail.com";

var msg = "heartly welcome to the introvert event " +  name +
 " contact: "+ email + " . ";
console.log(msg);

// here it is difficult to write code with concenation and more stuff....it will consfuse  more. so we use template strings to sort out this problems.

var msg1 = `heartly welcome to the party ${name}, contact : ${email} `

console.log(msg1);

// $ is used for variables 

// $name defines the expression .


// we say template but it's not template, its already a string


//to know easy simple it is an example like IIFE . and IIFE works when we involed. so same thing  happens with string it is immediately goes and construct.