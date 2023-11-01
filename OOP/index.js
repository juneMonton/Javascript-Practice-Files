// const circle={
//     radius:1,            //this is a property
//     location:{           //this is a property
//         x:1,
//         y:1
//     },
//     draw:function(){// this is a method
//         console.log('draw');
//     }
// };



//Factory function
function createCircle(radius){
    return{
        radius,//if key and value are the same, we can omit the value radius: radius,
        draw: function(){
            console.log('draw')
        }

    }
}
const circle=createCircle(1);


//Constructor Function

function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw');
    }
}

const another= new Circle(1);

//Primitives & Value
let x=10;
let y=x;

x=20

//Reference type
let x={value:10};
let y=x;

x.value=20;