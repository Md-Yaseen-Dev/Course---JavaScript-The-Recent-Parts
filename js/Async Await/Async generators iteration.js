// async function fetchURLS(urls) {

//     var results = [];

//     for (let url of urls){
//         let resp = await fetch (url);
//         if(resp.status == 200 ){
//             let text = await resp.text();
//             yield text.toUpperCase();

//         }
//         else{
//             yield undefined;
//         }
//     }
//     return results;
// }

// async generators with iterations

async function main (favoriteSite){
    var it = fetchURLS (favoriteSite);

    while(true){
        let res = await it.next();
        if (res.done) break;
        let text = res.value;
        console.log(text);
    }
}

async function main(favoriteSite){
    for await (let text of fetchURLS(favoriteSite)){
        console.log(text);
    }
}