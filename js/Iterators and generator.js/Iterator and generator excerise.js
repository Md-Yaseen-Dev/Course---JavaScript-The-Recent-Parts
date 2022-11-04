var number = {
    // we create generator
    *[Symbol.iterator]({
        start = 0,
        end = 100,           // here why equal is taken think its in function i.e object method
        step = 1


    } = {}) {
        for (let i = start; i <= end; i += step) {
            yield i;
        }
    }

};

// should print 0 ..100 by is 
for (let num of number) {
    console.log(num);
    // console.log([...number]) // here printing 100 times  -- why
}


// should print 6..30 4s

console.log(`my lucky numbers are:${[...number[Symbol.iterator]({
    start: 6,           // here why  not use equals becausee it is an object. and above is an object method
    end: 30,
    step: 4
      })]

    }`);

// generator of another examples with own

var calender = {


    *[Symbol.iterator]({

        start = 1,
        end = 31,
        step = 1,
    } = {}) {
        for (i = start; i <= end; i +=step) {

            yield i;
        }
    }
};

for (let date of calender) {
// yield  date ;
// console.log(date);
console.log([...calender]) // why not here getting 31 times
}

// special numbers

console.log(`weekends: ${[...calender[Symbol.iterator]({

    start: 0,
    end: 31,
    step: 7,


})]
    }`)