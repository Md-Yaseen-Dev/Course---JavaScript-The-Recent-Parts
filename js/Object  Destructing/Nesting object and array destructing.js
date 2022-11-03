var day = {
    a:2,
    b: [
        344,666
    ],
    c:9
}
console.log(day);


var{
    a=45,
    b:[w,k],
    c:c,
}=day;

console.log(w);
console.log(c)
console.log(a)
console.log(day.a)

//  this is called double destructing.