//  not all data structures have iterators

// objects are not iterables

// var obj = {
//     a: 1, b: 3, c: 5
// }
// var o = obj[Symbol.iterator]()
// for (let v of o){
//     console.log(v);  //t typerror because object not iterator
// }

// to create own facatory function

var obj= {
    a: 1,
    b: 3,
    c: 5,
   [Symbol.iterator] :function() {
        var keys = Object.keys(this);
        var index = 0;

        return {
            next: () => (index < keys.length) ? { done: false, value: this[keys[index++]] } :
                { done: true, value: undefined }

        };

    }
};
const o = [...obj] 
console.log(o);
console.log(obj);
console.log([obj]);