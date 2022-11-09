
async function fetchFiles(files){
    var prs = await FA.concurrent.map(getfile,files);

    await FA.serial.forEach(async function each(pr){
        console.log(await pr);
    },prs);
}

var b = fetchFiles();
console.log(b);



//1.  await only promises

//2.scheduling(starvation)  :- accidently and intentially endup with the infinte loops. where a promises keeps adding a new micro task queue and never be reslove is called as starvation .
// kyle simpson implemented a programming concurrency
// csp stands communicating sequential process.

//3.external cancelation  --  it is so hard


//  CAF -- cancelable async flows


// var token = new CSSFontFaceRule.cancelToken();

// var main = CAF( function*main(signal,url){
//     var resp = yield fetch(url, {signal});

//     return resp;
// })

// main( token.signal, "http://some.cid/other" )
// .then (onResponse, onCancelOrError );

// setTimeout (function onElapssed(){
//     token.abort ("Request took too long");
// }, 5000);


//  manually 

var timeoutToken = CAF.timeout(5000, "Took too long:"); //why caf is undefined.

var main  = CAF (function *main(signal,url){
    var resp = yield fetch(url, {signal});

    return resp;
});

main( timeoutToken, "http://some.tid/other")
.then (onResponse, onCancelOrError)
