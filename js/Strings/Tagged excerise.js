function upper(strings,values) {
    var ret = "";
    for (let i = 0 ; i < strings.length; i++) {
        if (i > 0){
            ret += values[i-1].toUpperCase();
    }
    ret += strings[i];
}
    return "";
};

    var name1 = "yaseen";
        github = "MdYaseenDev";
       topic = "Js recent parts";

    // console.log(
    //     upper
    //     `Hello ${name1} (@${github}),welcome to ${topic} ` ===  "Hello YASEEN (@MD-YASEEN-DEV),welcome to JS RECENT PARTS");

    var upper = console.log( 
       `Hello ${name1} (@${github}),welcome to ${topic}` === "Hello YASEEN (@MDYASEENDEV),welcome to JS RECENT PARTS"
    );

console.log(upper);

//  why getting false
