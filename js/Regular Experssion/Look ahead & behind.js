//    the first one of regular expression is look a ahead 


// the beginning or end of string anchors, those are essentially assertions 

var msg = "helpo  lo world"
console.log(msg.match(/(l.)/g));   // this is known as assertion. this return every l elements.

console.log(msg.match(/(l.) $/g));   // this dollar is used to happen to the end.  this will return last element. it is also an assertion 

console.log(msg.match(/(l.)(?=o)/g));   // lookahead . //question ensures it. it will followed the l and next element with o i,e lp
 
console.log(msg.match(/(l.)(?!o)/g));   // negative expression it returns the l not followed by another element and it would last vallues  and then it will end with that it will return i.e lo and ld


console.log(msg.match(/(?<=e)(l.)/g));    //look behind -- this will check before it matches it is true or not in a  postive expreesion returns the element of ll


console.log(msg.match(/(?<!e)(l.)/g));    // in negative behind -same as look ahead  it will check which is not followed so return of end of the l letters
