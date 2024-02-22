console.log("hello Nepal");
console.error('hello Nepal');

//single line comment 
/*
Multi Line comment 
*/

//Js Variables => data store 
var line="Broadway Infosys is one of the best inclusive computer training institutes in Kathmandu, Nepal. Established in 2008, our professional IT Training and Development center has been employing experts in this field to impart professional education."

console.log(line)

//es6 var , let, const
var counrty; // decleared
counrty='tea' // assign 

//var => re-decleared , re-assign
var cup='tea';
console.log(cup) // tea
var cup='milk'
console.log(cup) //milk

//let no re-declared
let abc='tea'
console.log(abc) //tea
 abc='milk'
console.log(abc)
 
//const  re-declared and no re-assign
const def='tea'
console.log(def)
// def='mmm'
console.log(def)

// global (var), block scope
let age=18;
console.log(age) //18
if(true)
{
    let age=14
    console.log(age) //14
}
console.log(age) //18
 
//Data Type Primitive(string, number, boolean, undefined, null, symbol, bigInt)  , non-Primitive (array, object )

//bug 
var a="sajan"
console.log( typeof a)
var id=18.2
console.log(typeof id) //
var s=false
console.log(typeof s)
var e= 
console.log(typeof e)

var f=null
console.log(typeof f)

console.log(Symbol('sajan')==Symbol('sajan'))

var friends=['sajan','sagar','ram']
console.log(typeof friends)

var gh={
    sir: "sajan",
    sirdai: "sagar",
    ff: "ram"
}
console.log(typeof gh)