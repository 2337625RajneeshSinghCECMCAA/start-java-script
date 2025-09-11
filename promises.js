// const  promise = new Promise (function(resolve,reject){
//     setTimeout(function(){
//         console.log("hii"); 
//         resolve()   
//     },2000)
// }).then(function(){
//     console.log("ram");
    
// })


// const promise = new Promise(function(resolve,reject){
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


// fetch('http://jsonplaceholder.typicode.com/users')
// .then((response)=> {
//     return response.json()
// })
// .then((data)=> {
//     console.log(data);
// })
// .catch((error)=> {
//     console.log(error)
// })

// pooja-dates.js

// 1. Get today's date
// let today = new Date();

// // 2. Set end date (1 year from today)
// let oneYearLater = new Date(today);
// oneYearLater.setFullYear(today.getFullYear() + 1);

// // 3. Array to store pooja dates
// let pray = [new Date(today)];



// // 4. Start from today
// let currentDate = new Date(today);

// // 5. Repeat until 1 year is complete
// while (true) {
//   // Add 40 days
//   currentDate.setDate(currentDate.getDate() + 40);

//   // Move to the next Saturday
//   let day = currentDate.getDay(); // 0 = Sunday, 6 = Saturday
//   let daysToSaturday = (6 - day + 7) % 7;
//   currentDate.setDate(currentDate.getDate() + daysToSaturday);

//   // Stop if date goes beyond 1 year
//   if (currentDate > oneYearLater) {
//     break;
//   }

//   // Add to the list
//   pray.push(new Date(currentDate));
// }

// // 6. Print all pooja dates in terminal
// console.log("Pray (Every 40 days on the next Saturday):\n");
// pray.forEach((date) => {
//   console.log(` ${date.toDateString()}`);
// });
