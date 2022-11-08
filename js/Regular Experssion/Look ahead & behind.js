//    the first one of regular expression is look a ahead 

var msg = "hello world "
console.log(msg.match(/(l.)/g)); // this is known as assertion. this return every l elements.

console.log(msg.match(/(l.) $/g)); // this dollar is used to happen to the end.  this will return last element. it is also an assertion 

console.log(msg.match(/(l.)(?=o)/g)); // lookahead . //question ensures it. it will go and search for o value after l

console.log(msg.match(/(l.)(?!=o)/g)); // negative expression


console.log(msg.match(/(?<=e)(l.)/g)); // lesser than to the before element postive expreesion


console.log(msg.match(/(?<!e)(l.)/g));  // lesser than to the before element with negative expression
