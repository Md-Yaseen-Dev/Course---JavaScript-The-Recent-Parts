# Async Await

## Async function

An async function is a function declared with the async keyword, and the await keyword is permitted in it. The async and await keywords enables asynchronoues, promise-based behaviouor to be written in a cleaner style.

``` javascript

function resolveAfter2seconds(){

    return new Promise(resolve => { 
         setTimeout(()=>{
            resolve('resolved');
         },2000);
    });
}

async function asyncall(){
    console.log('calling');
    const result = resolveAfter2seconds();
    console.log(result);

}

asyncall();

```

### To know the more information click the link below :- 

 &#8594; [click-here](../js/Async%20Await/Async%20functions.js) - for Async function



 ## Async iteration