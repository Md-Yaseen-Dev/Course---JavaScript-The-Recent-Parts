// function data() { 

//     return [1,[2,3],4]

// }
// var tmp = data() || [];

// var first = tmp[0];
// var tmp2 = tmp[1];
// var second =tmp2[0];
// var third = tmp2[1];
// var fourth = tmp[2];

// console.log(third)


// destructing
// function data() {

//     return [1, [2, 3], 4]

// }
// var tmp;

// [first,

//     [
//         second,

//         third,
//     ],
//     ...fourth

// ] = tmp = data() || []

// console.log(second)




function data() {

    return [1, undefined, 4]

}
var tmp;

[first,

    [
        second,

        third,
    ] = [],               // it gives error if dont put empty array
    ...fourth

] = tmp = data() || []

console.log(second); //undefined
console.log(third); //undefined



