//  third feature it deals with the certain cases


// dotall accessors property indicates whether or not s flag is used with the regular expression.
   // if s flag is used it return true otherwise false.

var msg =  `Don't stopy when it hurts stop when you are done`;

var msg1 = `The quick brown fox jumps over the lazy dogs`
console.log(msg.match(/stop.*done/)); // why id ont get null 

// console.log(msg.match(/stop.*done/s));

// console.log(msg1.match(/brown.*over/s))