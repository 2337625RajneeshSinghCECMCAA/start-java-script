// const  promise = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         console.log("hii"); 
//         resolve()   
//     },2000)
// }).then(function(){
//     console.log("ram");
    
// })


// const promise = new Promise(function(resolve,reeject){
//     setTimeout(function(){
//         resolve({username: "Rajneesh", email: "rajneesh@123.com"})
//     },2000)
// })

// promise.then(function(user){
//     console.log(user);
    

// })

// const promisethree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true//false
//         if(!error){
//             resolve({username: "Rajneesh", email: "rajneesh@123.com"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     },2000)
// })

// promisethree
// .then((user)=> {
//     console.log(user);    
// })
// .catch((err)=>{
//     console.log(err);    
// })
// .finally(()=>{console.log("final result")})



// // async or wait

// async function promisefour(){
//     try {
//         const response = await promisethree
//         console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// promisefour()


fetch('http://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()
})
.then((data)=> {
    console.log(data);
})
.catch((error)=> {
    console.log(error)
})