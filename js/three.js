//Loop In JS for, while, do while, for in, for of , continue, break;

// for( let a=2; a< 10; a++)
// {
//     if(a==3)
//     {
//         console.log("Happy face 3");
//         //continue;
//         break;
//     }
//     console.log("for loop", a)
// }

var a=10;
while(a<10)
{
    document.write("<h1>While loop", a, "</h1>")
    a++
}

var b=8;
do{
    document.write("<h1>DO while loop", b , "</h1>")
    b++
}while(b<10)

//
var friends=['sajan','sagar','ram']
for (var z of friends) {
    document.write("<h2>", z, "</h2>")
}
for (var z in friends) {
    document.write(  z, ": ",friends[z] )
}