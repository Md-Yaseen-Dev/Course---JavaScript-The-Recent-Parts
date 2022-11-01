function upper(strings, values) {
    var ret = "";
    // console.log(ret);
    for (let i = 0; i < strings.length; i++) {
        if (i > 0) {
            ret += String(values[i-1]).toUpperCase();//strings.toUpperCase();  //this point i  did not get


        }

        ret += strings[i];  
    }

    return "";
};


var name1 = "yaseen";
github = "Md-Yaseen-Dev";
topic = "Js recent parts";

console.log(
    upper
    `Hello ${name1} (@${github}),welcome to ${topic} ` ===  "Hello YASEEN (@MD-YASEEN-DEV),welcome to JS RECENT PARTS"
    );



// var upper = console.log(
//     `Hello ${name1} (@${github}),welcome to ${topic}` === "Hello YASEEN (@MDYASEENDEV),welcome to JS RECENT PARTS"
// );


// console.log(upper);
// console.log(`${name1}`)

//  why getting false



//  Exmaples

// function cases(Strips, val) {

//     var a = "";

//     for (let i = 0; i < Strips.length; i++) {

//         console.log(Strips.length);


//         // console.log(Strips[i].toUpperCase());

//         a += Strips[i]

//     }

//     return "";

//     //    var b =  a.toUpperCase();

//     //    console.log(b);
//     console.log(Strips)



// }



// var fruits = "apple";
// vegetables = "brinjal";
// medicines = "citrizen";

// // console.log(`${fruits} and ${vegetables}` === "apple and brinjal")
// console.log(
//     cases
//         `fruits : ${fruits} vegetables :${vegetables} medicines : ${medicines}` === "FRUITS : APPLE VEGETABLES :BRINJAL MEDICINES : CITRIZEN")



// var arr = ["hell", "hi", "HeLL"]


// console.log(arr[-1]);

// function myfunc(){

//    for (i = 0; i < arr.length; i++) {

//     //  console.log(arr[i])
//     //    arr = String(arr).toUpperCase();

//     if (i < arr.length-1) {
          
//          var a = arr[i].toUpperCase();
//     }

//      return a ;
        
//     }   

// };

//  var b = myfunc();
//  console.log(b);
// // myfunc();

// console.log(myfunc() === arr[2])
    
    
// //     var a = arr[i]
// //     console.log(a)
// //     var b = arr[arr.length - 1].toLowerCase();

// //     console.log(b)
// //     //    console.log(arr[0]);
// //     //    console.log(arr[1]);




// // var arrq = ["sum ", "add"]

// // console.log(arrq[1].toUpperCase())