//  practice async functions

function getfile(file) {
    return new Promise(function (resolve) {
        fakeAjax(file, resolve);
    });
}

async function loadFiles(files) {
    //request all files concurrently

    // var pr1 = getfile(files[0]);
    // var pr2 = getfile(files[1]);
    // var pr3 = getfile(files[2]);

    var prs = files.map(getfile);



    for(let pr of prs){
        console.log(await pr);
    }

    // print in order sequentially
}

loadFiles(["file1", "file2", "file3"]);


// ..........................................


function fakeAjax(url, cb) {
    var fake_responses = {
        "file1": "The first text",
        "file2": "The second text"
    }
}