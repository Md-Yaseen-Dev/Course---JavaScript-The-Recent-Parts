
function classroom() {

    return ["1", "2", "3"]
}

var tmp ;

[
    firstclass,
    ,
    thirdclass
] = tmp = classroom()
console.log("destructing :" + thirdclass);
console.log(tmp)

//If we no need of that properties we can use commas and this called as array ellison.


//  swaping normal

var x =10; 
var y =20;
console.log("swaping before:"+ " x = " + x )
console.log("swaping before:"+ " y = " + y )

{
    let tmp = x;
    x =y;
    y =tmp;

}
console.log("swaping after:"+ " x = " + x )
console.log("swaping after:"+ " y = " + y )



// array destructuing swap

var a = 10;
var b = 23;
console.log("swaping before:"+ " a= " + a );
console.log("swaping before:"+ " b = " + b);

[b,a] = [a,b];
console.log("swaping after:"+ " a = " + a )
console.log("swaping after:"+ " b = " + b )
