// nested object is just like array

//  example nested object

function Nested_obj() {
    return {
        a: 1,
        b: {
            c: 3,
            d: 5,
        },
    };
}

var tmp = Nested_obj() || {};
var a = tmp.a;
var b = tmp.b;
var c = b.c;
var d = b.d;

console.log(tmp);
console.log(a + c + d)
console.log(b)

// destructing pattern

function Nested_Des() {

    return {
        a: 3,
        b: {
             c:7,
             d:9,
        }
    };
}
// 
var {
    a,
    b: {
        c,
        d
    } ={}
} = tmp = Nested_Des();

console.log(tmp);
console.log(b);
console.log(a);