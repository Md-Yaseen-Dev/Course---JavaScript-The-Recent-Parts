//    the first one of regular expression is look a ahead 

var msg = "hello world "
console.log(msg.match(/(l.)/g)); // this is known as assertion

console.log(msg.match(/(l.) $/g)); // this dollar is used to happen to the end.

console.log(msg.match(/(l.)(?=o)/g)); // lookahead . //question ensures it.

console.log(msg.match(/(l.)(?!o)/g)); //postive expression


console.log(msg.match(/(?<=e)(l.)/g)); // negative expreesion


console.log(msg.match(/(?<!e)(l.)/g));
