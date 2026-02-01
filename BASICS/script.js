console.log("separation of concern");

let a="tinummm";
a=10;
console.log(a);
let name="mine";

// let tina={

//     name:'tinu',
//     height:170,
//     feature:'most capable person on planet',
//     characteristic:'extremely intelligent',
//       work: function()
//       {
//         console.log("Earning 3l/month from work");
//       }

// };


function createRec(a,b)
{
    let rectangle=
    {
        length:a,
        breadth:b,

        draw:function()
        {
            console.log('drawing function');
        }
    }
    return rectangle;
}


let obj=createRec(10,20);

// Constructor function:follows the pascal notation:The first letter of each and every word is capital.
function Square(a,b)
{
   this.side=a;
   this.color=b;

   this.draw=function()
   {
    console.log('drawing the square N testing the constructor function');
   }
}

let sqobj= new Square(2,'green');

// Dynamic nature of objects

sqobj.side=100;
sqobj.name='cutie';
console.log(sqobj);

let tina={

    name:'tinu',
    height:170,
    feature:'most capable person on planet',
    characteristic:'extremely intelligent',
    //   work: function()
    //   {
    //     console.log("Earning 3l/month from work");
    //   }

};

// FOR-IN LOOP

for(let key in tina)
{
    console.log(key,':',tina[key]);
}

// ÷FOR-OFF LOOP IN ARRAYS
// Object cloning
let src={
    a:10,
    b:20,
}

let dest={...src};
src.a++;


// Learning the new string-primitive

let firstname='shivani';
let lastname= new String ('OG');


let message='this is the \"best\" time to be at your full potential'; 


console.log('Testing the callback functions');

// callback functions

let courses=[
    {id:1,coursename:'maths'},
    {id:2,coursename:'bio'},
    {id:3,coursename:'english'}
]

console.log(courses);

let ourFindings= courses.find(course=>course.id==1);
console.log(ourFindings);


// Increasing the readability using the arrow function