//  appling taggered template is known as interpolation

var v =  42;
var o = {a:2, b:[3,4,5,]};

var logger = `This is my value : ${v} and another : ${o}`
 console.log(logger);

try{
    nothing();
}
catch(err){
    logger `caught: ${err}`; //  caught : $ error reference error because not defined

}