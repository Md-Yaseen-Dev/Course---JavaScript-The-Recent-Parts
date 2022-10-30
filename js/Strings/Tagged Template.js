//this is tagged templates fully control with string templates. and it is advance form.
// tags allows you to phrase template literals with a function.

const name = "ben stokes";
const age = 32;

function myTag(strings,nameExp, ageExp){
    const str0 = strings[0];
    const str1= strings[1];
    const str2= strings[2];


    const agestr = ageExp > 30 ? "senior" : "junior" ;

    return `${str0}${nameExp}${str1}${agestr}${str2}` ;
}

const output = myTag `This ${name} is a ${age} to a cricket `

console.log(output);


// here above function  we can acces strings and arrays by using tagged templates. and with the help of expression(i.e call back function) .

//  in a sentence it access index values such as `this for index[0]`, `is a for index[1] .... 

// and $ sign is used to access a variable which we decalred such as name, age