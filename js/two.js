// js operator
/*
    Arithmetic Operators +, -, *, /, %, ++, --, **
    Assignment Operators =, +=, -=, *=, /=, %=
    Comparison Operators
    Logical Operators
    Conditional Operators
    Ternary Operator
*/
//2+3+4  operands operator operands
// var a, b;
// a=2; b=3;
// console.log(a+b) 
// console.log(a-b)  // 2-3
// console.log(a*b)  //2*3
// console.log(a/b) // 2/3
// console.log(6/3)
// console.log("a++",a++) //a=a+1 //3
// console.log(a--) //a=a-1 3-1 //2
// console.log(a**b) //2*2*2

var a=4; var b=2;
console.log(a+=b)  // a=a+b 4+2//6
console.log(a-=b) // a=a-b 6-2 //4
console.log(a*=b) 
console.log(a/=b) 
console.log(a%=b) 

//Comparison Operators ==, ===, >, < , >=, <= 
console.log(2==='2')//
console.log(2>=2)

//Logical Operators &&, ||, !
var c=true;
var d=false;
console.log(c && d)
console.log(('admin'=='admin') && ('pass1'=='pass'))
console.log(c || c)
console.log(!c)


//Conditional Operators if, else, else if , switch
var num=2
var num1=3
if(num1<=num) //3<=2
{
    console.log("SOmetthing ")
}
else if(2==='2')
{
    console.log("same ....")
}

// switch 

var e=4;
switch(e)
{
    case 1: console.log("today is sunday"); break;
    case 2: console.log("today is m"); break;
    case 3: console.log("today is t"); break;
    default : console.log("UNKNOWN Days")
}

// Ternary Operator
console.log((2<1) ? "its true": "its false")