// limitation of conceptual of an sync await.
//  just a generator we can only push
// just a async function we can only pull

//async generator added it is just like new function types

// yield  for pushing and await for pulling


async function fetchURLS(urls) {

    var results = [];

    for (let url of urls){
        let resp = await fetch (url);
        if(resp.status == 200 ){
            let text = await resp.text();
            results.push(text.toUpperCase());

        }
        else{
            results.push(undefined);
        }
    }
    return results;
}


// another it is generator -- this is bad programming because what is yield keyword working pulling and pushing , it is so confuse to work.

function fetchURLS(urls) {

    var results = [];

    for (let url of urls){
        let resp = yield fetch (url);
        if(resp.status == 200 ){
            let text = yield resp.text();
            yield text.toUpperCase();

        }
        else{
            yield undefined;
        }
    }
    return results;
}

//so we create async generators :-  it wil be easy to find pulling and pushing

async function fetchURLS(urls) {

    var results = [];

    for (let url of urls){
        let resp = await fetch (url);
        if(resp.status == 200 ){
            let text = await resp.text();
            yield text.toUpperCase();

        }
        else{
            yield undefined;
        }
    }
    return results;
}


// here await is used for pushing while yield is used for pulling.