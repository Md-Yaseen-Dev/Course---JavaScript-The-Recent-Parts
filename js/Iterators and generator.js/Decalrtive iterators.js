//  imperative iteration  -- very hard to understand

// example

var str = "welcome"

for(
    let it = str[Symbol.iterator](),v,result;
    (result =it.next()) && !result.done && (v = result.value || true);

){
    console.log(v)
}

// we can use for of loop is used to takes iterables over
// declaration iterators
//strigns array sets maps
var str1 = "hello";

var it1 = str1[Symbol.iterator]();

for(let u of it1){
    console.log( u + "\n");

}
 
for(let u of str1) {

    console.log(u);
}

// ... iterators

var s = "hi course";

var letters = [...s];  // it is spread operator
console.log(letters)