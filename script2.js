window.addEventListener('DOMContentLoaded', (event) => { //allegedly makes JS wait for html to load
    console.log('DOM loaded');  //logs later than getWords() and done(). Does that mean this doesn't work?
});


// //Timing out drills section
// function getWords(name) {   //getWords declared. Won't work if anonymous
//     console.log(name);
// }

// getWords("statement");   //getWords called

// setTimeout(function () {   //setTimeout 1 called
//     getWords("statement1");   //runs getWords
//     setTimeout(function () {   //setTimeout 2 called
//         getWords("statement2");    //runs getWords
//         setTimeout(function () {   //setTimeout 3 called
//             getWords("statement3");    //runs getWords
//         }, 1000)    //3rd setTimeout timer
//     }, 2000);    //2nd setTimeout timer
// }, 3000);    //first setTimeout timer


// //Callbacks and Recursion section
// const done = function() {   //done() declared
//     console.log("Job's Done")
// }
// //done("Job's Done")  //done() called

// var countdown = function(num, callback){
//     setTimeout(function(){
//         if (num > 0){
//             console.log(num);
//             countdown(num - 1, callback);
//         } else {
//             callback();
//         }
//     }, 1000)
// };

// countdown(5, done)

//Promises Promises section
var lunchtime = false  // lunchtime global
const orderMeSomeFood =  
    new Promise(function (resolve, reject) {  //Promise declared
        if (lunchtime === true) {             //reolve if
            let lunchObject = { lunch: "Pizza", drink: "Tea" }; //object array
            resolve(lunchObject);
        } else {                             //reject els
            let errorMessage = new Error("This is the error message");
            reject(errorMessage);
        }
    });

function lunchtime_message() {               //lunchtime_message declared
    orderMeSomeFood.then(lunchtime => {      //.then
        console.log(lunchtime);
    })
        .catch(errorMessage => {              //.catch
            console.log(errorMessage);
        });
}
lunchtime_message();              //lunchtime_message function called


