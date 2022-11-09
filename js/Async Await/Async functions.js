//  here we can look at another feature that landed in ES6, which was promises.

// promises are a way of representing a future value in a time independent way.



// function resolveAfter2seconds(){

//     return new Promise(resolve => { 
//          setTimeout(()=>{
//             resolve('resolved');
//          },2000);
//     });
// }

// async function asyncall(){
//     console.log('calling');

//     const result = await resolveAfter2seconds();
//     console.log(result);
// }

// asyncall();


// fetchCurrentUser()
// .then(function onUser(user){
//     return Promise.all([
//         fetchArchieveOrders(user.id),
//         fetchCurrentOrders(user.id)
//     ]);

// })
// .then(function onOrders(
//     [archievedOrders, currentOrders]                 //--- is it wrong ?
// ){

// });


// async generators

/* runner */ async function *main(){

    var user = await fetchCurrentUser();

    var [archievedOrders,currentOrders] =
    await Promise.all([
        archievedOrders(user.id),
        fetchCurrentOrders(user.id)
    ]);
}
main()