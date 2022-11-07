// Generator
// The generator object is returned by a generator function and it confirms to both the iterable protocol and the iterator protocol.

// asteric is a special kind of function is called generators

// generators when you invoked with them , they dont run they produce iterators

// these yeild allows a generator to produce additonal values every time it iterators

function *main() {

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 4;


}

var it = main();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


console.log([...main()])  // it consume protocol and stops when it is true.

//  examples
// it is a bad practice to return a value from a generator.

function * maths(a,b){
  yield a*b;
  yield a+b;
  yield a-b;
  yield a/b;
  yield a%b;
    
}

var it1 = maths(3,4)

console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());

console.log([...maths(4,5)]); // it prints in array


// for of loop  in generator

var obj = {
  a:"saleh bhai",
  b: "rashid bhai",
  c: "danish bhai",
  *[Symbol.iterator](){
    for (let key of Object.keys(this)){
      // yield this[key];
      yield [key ,this[key]];
    }
  }
};
console.log(obj)
console.log([...obj])

console.log([...obj.a]) // it returns every element of a with a string



// note that object doesnot iterator automatically  so, we create manually
// var someobj = {
//   1: "sun",
//   b: "mon",
//   c: "tue",
//   d: "wed",
//   e : "thu"
// }
// const it22 = someobj[Symbol.iterator]();

// console.log(it22)