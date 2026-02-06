// Learning promises


async function utility(){
let weather1= new Promise ((resolve,reject)=>{
    setTimeout (()=>{
        resolve ("the climate1 is cold");
    },3000);
}); 

let weather2 = new Promise ((resolve,reject)=>
{
    setTimeout(()=>{
        resolve ("Climate 2 is cold");
     },10000);
});


let climate1=weather1;
let climate2=weather2;

return [climate1,climate2];  
}


// closures
function outer() {
  let count = 10;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2


// CLOSURES EXAMPLE 2-this is not closure
function abcd()
{
    let nameone="tina";

    function xyz(){
        console.log(nameone);
    }
      xyz();
}
abcd();

// Closures example number-real

function abcd() {
  let nameone = "tina";

  function xyz() {
    console.log(nameone);
  }

  return xyz;
}

const fn = abcd(); // abcd() finishes here
fn();              // still remembers nameone


function counter2() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

let c1 = counter2();
c1(); // 1
c1(); // 2
c1(); // 3
