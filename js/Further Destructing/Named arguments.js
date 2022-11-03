function days(name = "sunday" ,num =1){
 //...
 console.log(num + "" + name)
}
days({name:"mon" , num :2}); // no changes 


// destructing

function day({
    name = "sunday",
    num =1
}){
    console.log(num + ":" + name)
}
day({num :2});  // only changes the number
day({name:"monday",num :2}); // if assign here it change their values in destruction
