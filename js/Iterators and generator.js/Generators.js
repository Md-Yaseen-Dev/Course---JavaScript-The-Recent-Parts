// Generator
// The generator object is returned by a generator functioon and it conforms to both the iterable protocol and th iterator protocol.

// asteric is a special kind of fucntion is called generators

// gnerators when you invoked with them , they dont run they produce iterators

// these yeild allows a generator to produce additonal values every time it iterators

function *main() {

    yield 1;
    yield 2;
    yield 3;
    return 4;


}

var it = main();

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
