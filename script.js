window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
myFunction("hello");
//setTimeout(function(){myFunction("Yes");},3000);
getWords("statement");
setTimeout(function(){getWords("statemenet1"); setTimeout(function(){getWords("statement2"); setTimeout(function(){getWords("statement3");},1000)},2000);},3000);

//setTimeout(function(){ alert("Hello"); }, 3000);

function myFunction(myName) {
    

    console.log(myName);
    //setTimeout(function(){ console.log("Hello"); }, 3000);
}

function getWords(name){
    console.log(name);
    
    
}