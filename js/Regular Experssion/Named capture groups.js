// capture groups

//  a part of a pattern can be enclosed in parenthesis. this is called capturing group

 // in regular expression parenthesis are not just grouping operators, which is capture operatores

var msg = "hello world";

console.log(msg.match(/.(l.)/));// here captures and get sub part.

console.log(msg.match(/([jklm])o wor\e/)); // here it comes before o for back references  backslash 'l"  that says match the same thing later in the pattern and the word should not be last.

console.log(msg.match(/(?<cap>.ld)/).groups); // it return object null prototype with key:value i.e cap :re

console.log(msg.match(/(?<cap>[jkl])o wor\k<cap>/))

console.log(msg.replace(/(?<cap>o.)/g,"-$<cap>-")); // it replace with element  and return all the elements , and if we dont consider the capture in variable i.e in dollars . it will get undefine.

var a = msg.replace(/(?<cap>l.)/g, function re(...args){
    var[,,,,{cap}]= args ;
    return cap.toUpperCase();
});

console.log(a)