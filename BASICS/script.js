console.log("separation of concern");

let a="tinummm";
a=10;
console.log(a);
let name="mine";

let tina={

    name:'tinu',
    height:170,
    feature:'most capable person on planet',
    characteristic:'extremely intelligent',
      work: function()
      {
        console.log("Earning 3l/month from work");
      }

};


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