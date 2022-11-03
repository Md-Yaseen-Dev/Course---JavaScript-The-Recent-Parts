// it assignment of normal objects
function assignment(){

    return {b:3,c:4};
}
var tmp =assignment();
var first,second;
first =tmp.a;
second = tmp.b;
console.log(second);

// assignment of destructing in object

function destr_assignment(){
    return {a:1,b:2,c:4};
}
var first, second, third;

({
    b:second,  // we will get syntax error because it overloads to block code and we need destructing we have wrap with parthesis to the whole block.
    a:first,
} = destr_assignment() );
console.log(first);

var tmp;  // if we have object reference it doesnot need parenthisis.
 
tmp ={
    a:second,
    b:first,
    c:third,
} = destr_assignment();
console.log(first);
