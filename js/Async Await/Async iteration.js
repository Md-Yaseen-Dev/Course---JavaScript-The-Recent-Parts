// actually when async function is passed to the foreach loop , function come back with preomises and for each method not.


// the built into javascript, the .forEach, .map , the .filter, .reduce. the .flat, now all of those, are all of synchronous iterator. if we see th promises it wait to move on


//   fasy


async function fetchFiles(files){
    var prs = await FA.concurrent.map(getfile,files);

    await FA.serial.forEach(async function each(pr){
        console.log(await pr);
    },prs);
}

var b = fetchFiles();
console.log(b);