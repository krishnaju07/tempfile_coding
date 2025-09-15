javascript qstns:
https://stackblitz.com/edit/js-ys99sb?file=index.js - stack blitz
1. array reverse: default function => array.reverse()
2.class comp vs function comp
class comp taking more memory
3.how to center a div in a whole screen
4.event bubbling
https://www.freecodecamp.org/news/event-bubbling-in-javascript/
5.useMemo
useMemo( ) hook can be used to cache such functions.
By using useMemo( ), the CPU-Expensive function gets called only when it is needed.
6.useCallback
similiar to useMemo(), useMemo() return memorized value,
useCallBack() returns memorized function
7.promise, resolve
8.wat s middleware
9.redux thunk
10.dif b.w thunk nn saga
11.Context api
12.react pure components

eg: React.PureComponent
PureComponent is similar to Component but it skips re-renders for same props and state.
if any value changes then only it will render the return () part. It means html part.
If we not using Pure component--> then we need to use one hook like
shouldUpdateComponent(nextProp,nextState){
}
13.diff b.w let,var,const
var= global and block
let= block
const = static value
14.use of redux
15.virtual dom vs org Dom
16.life cycles
The Component Lifecycle
Mounting
Updating
UnMounting
Error Handling
17.React hooks
useState Hook
useEffect Hook
useRef Hook
useCallback Hook
useMemo Hook
useContext Hook
useReducer Hook
18. sum the number of the digits
use value%10 ;
and Math.floor()
19.closure
ex
20.destructure
21. Call Stack in Javascript
22. Sort Array of object (string) without sort inbuild function
E.g: books= [
{author:”Guusuu”},
{author:”Diebhsh”}
]
23. [1,4,5,”ddd”,”ss”] separate numbers and strings &&
eg:
let numbers=[],
let letters=[];
const yu =[1,4,5,”ddd”,”ss”] ;
yu.forEach((item)=>{
if(typeof(item)==="number"){
numbers.push(item);
}
if(typeof(item)==="string"){
letters.push(item);
}
})
24. sort [1,4,5,”ddd”,”ss”]
25. input “text” box: handleOnly numbers
reg
26. fetch data from api, and render data
27. console.log( 2 + ‘21’) = 221
28. console.log( 2* ‘22’) = 44
29: destructuring javascript :
eg:
const data ={
text:"test"
}
const {text} =data;
console.log(text);
output: test
30: const phone =[‘982888322’, ‘9032322333’]
find any single number is there 3 or more consecutive times or 4 times
31: hoisting in javascript
32: reverse string
eg: “I love India”
const res = string.split(“”);
let h=[];
let temp=””,
let i=0,
let firstLetter =false;
res.forEach((s,index)=>{
if(s===" "){
console.log(s,"empty")
h[i]=temp;
temp="";
++i;
}
else if(res.length-1===index){
temp=temp.concat(s)
h[i]=temp;
}
else{
if(firstLetter){
const upper = s.toUpperCase();
temp=temp.concat(upper);
}
else{
temp=temp.concat(s)
}
}
})
output: India Love I
33. sort number :
eg: [5,1,45,11,5,6]
const a =[5,1,45,11,5,6];
return a.sort((a,b)=>a-b)
output: [1,5,5,6,11,45]
34: analyse pattern
eg: a1b5c3
output: abbbbbccc
35: isNaN() => isNot a Number()
repeat() => to repeat;
36: How to do empty an array
if not a const data type => arr=[];it will work
if a const data type => arr.length=0;
37.How do you connect redux to react
38. Clone a object: deep copy vs shallow copy
39. Diff b/w for and forEach:
A for loop will create an integer, and that integer is used to index into an array.
But each time that indexing takes place, the runtime will have to check the integer to make sure
that it is within the bounds of the array.
A for each loop will not have to do that. The compiler knows with complete certainty that the
element is within the array bounds, because it generated the index.
40.Primitive and Non-Primitive data types:
Primitive:- (String,Boolean,Number,BigInt,Null,Undefined,Symbol )
Non-Primitive:- Object (array, functions) also called object references.
41.JSON.parse() uses?
42. Event loop
43. Apply, call, bind
44.Flat(), flapMap()
45.closure
46.session/local
47.redux
48.usestate, use Effect,context
49.typescript - generictype
50.recursive – function call itself
51.promise and observable
52.useselector
53. Function scope and Block scope
func() {
if(true){
Var value1 = “Hi1 ”
Let value2 = “Hi2 ”
Const value3 = “Hi3”
}
console.log(value1 ) —> here var is function scope //Hi1
console.log(value2 ) —> here Let is Block scope // value2 not defined
console.log(value2 )—> here Const is Block scope //value3 not defined
54. Primitive or pass by value
String, number, boolean, null, undefined
Let x =10; it’s creating a new address, so x have individual address, y have individual address
Let y = x; here x is 20, y is 10
x= 20;
55. Non Primitive or pass by reference
Obj, array
Let x = { value: 10}; x passing same to y address,so x & y same address
Let y = x; here x is 20, y is 20
X.value = 20;
56.higher order function
● Takes another function as an argument.
● Returns another function as its result.
57. Dup value and occurrence:
const FindDupp = (inputArr) => {
let countMap = {};
inputArr.forEach((item) => {
countMap = { ...countMap, [item]: (countMap[item] || 0) + 1 };
});
// Keep only entries with count > 1
let DupObj = {};
Object.keys(countMap).forEach((key) => {
if (countMap[key] > 1) {
DupObj[key] = countMap[key];
}
});
console.log(DupObj);
return DupObj;
};
FindDupp([1, 4, 6, 7, 3, 4, 5, 7, 5, 9, 5]);
58. Object.freeze()
Once freezed, cannot change the value.( Add, modify, create, delete)
Object.seal()
Once sealed, cannot make delete, add. Only modify allowed.
59. Hoisting vs TDZ
var a; // hoisted to the top, initialized as undefined
console.log(a); // prints undefined
a = 1;
// Memory phase:
let b; // declaration known but NOT initialized
// Execution phase:
console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
b = 2;
60. let arr1 = [1, 2, [3, 4]];
let arr2 = [...arr1];
arr2[0] = 99;
arr2[2][0] = 100;
console.log(arr1); // [1,2, [3,4]] –my wrng answer
console.log(arr2); // [99, [100,1,2,[3,4]]] –my wrng answer
//Correct Output:
[ 1, 2, [ 100, 4 ] ]
[ 99, 2, [ 100, 4 ] ]
61.
Lifecycl
e
Class Component useEffect Equivalent
Mount componentDidMount
()
useEffect(() => { ... },
[])
Update componentDidUpdat
e()
useEffect(() => { ... },
[dep])
Unmount componentWillUnmo
unt()
Cleanup inside useEffect
62. Reconciliation Algorithm process
63. function tes(){
console.log(tes.abc);
}
tes()
tes.abc=400;
tes.abc=600;
tes()
===========================================
console.log(a==a)
console.log({}==={})
============================================
let a = {
name:"himan"
}
let b = {...a}
b.name='raja'
console.log(a.name);
=============================================
let d =10
let c = new Number(10);
console.log(d===c)
console.log(typeof(c))
============================================================
function test (record) {
if(record==JSON.stringify({ age:28})){
console.log("You r adult");
}
else if(record === { age: 28}){
console.log("Yo r still")
}
else {
console.log("else")
}
}
test(JSON.stringify({age:28}))
==============================================================
console.log(+true)
console.log(!'test')
=============================================================
var a = {};
var b = { key: 'b'};
var c = { key: 'c' };
a[b] = 600;
b[c]=700;
console.log(a[b]);
console.log(a[c]);
console.log(b[b]);
console.log(b[c]);
================================================================
function printSt(str1, str2){
const split1= str1.split("");
const split2 = String(str2).split("");
console.log(split2);
var ans='';
const maxLength = Math.max(split1.length, split2.length);
console.log(maxLength);
for(i=0;i<maxLength;i++){
if(split1[i]&& split2[i]){
ans = ans +split1[i]+split2[i]
}
else if(!split1[i]&& split2[i]){
ans = ans+split2[i];
}
else if(split1[i]&& !split2[i]){
ans = ans+split1[i];
}
}
return ans;
}
console.log(printSt("abchsuisi", 123456))
===============================================
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
console.log("Try programiz.pro");
var vowels=["a","e","i","o","u"];
var name= "programvalue";
function findVowelsCount (str){
let countMap={};
const voArr= str.split("");
voArr.forEach((item)=>{
if(vowels.includes(item)){
countMap[item]=countMap[item] ? countMap[item] +1 : 1;
}
})
return countMap;
}
console.log(findVowelsCount(name));
=========================================
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < 10; i++) {
console.log("iiii",i)
setTimeout(() => console.log(b[i]), 1000);
}
============================================
const arr= [1,2,[3,4,5,[6,7,9],2,3]]
//console.log(arr);
function flatArray(arr){
let final=[];
for(let item of arr){
if(Array.isArray(item)){
final= final.concat(flatArray(item));
}
else{
final.push(item);
}
}
return final;
}
console.log(flatArray(arr));
===================================
const sd = [1,2,3,4].filter((it)=>it>4);
console.log(sd);
const sd1 = [1,2,3,4].find((it)=>it>4);
console.log(sd1)
const sd2 = [1,2,3,4].map((it)=>it>4);
console.log(sd2)
//output
[ ]
undefined
[ false, false, false, false ]
=== Code Execution Successful ===
================================================
✅ .map() – Transforms an array and returns a new array:
const doubled = [1, 2, 3, 4].map((it) => it * 2);
console.log(doubled); // [2, 4, 6, 8]
✅ .forEach() – Iterates over an array, but does not return anything:
[1, 2, 3, 4].forEach((it) => console.log(it * 2));
// Logs: 2, 4, 6, 8 (one per line)
undefined.
===========================================
function grpClassStu(arr) {
const final = [];
arr.forEach((item) => {
const group = final.find((g) => g.class === item.class);
if (group) {
group.names.push(item.name);
} else {
final.push({ class: item.class, names: [item.name] });
}
});
return final;
}
=============================================
console.log(typeof null == 'object'); //true
==========================================
,debounce, useCallback, useMemo ⇒ 2 arguments there.
===========================================
push();// push last
pop(); // remove last
shift(); // remove first
unshift(); // add first
========================================
To remove array specific positon value:
const arr = [10, 20, 30, 40];
arr.splice(2, 1); // Remove 1 item at index 2
console.log(arr); // [10, 20, 40]
=========================================
function abc (a,b,c) {
console.log(“test”);
}
console.log(abc.length) //3 → returns Arguments length
=================================================
function findLongestWords(str){
const strArr= str.split(" ");
let maxLength=0;
let maxWord =[];
strArr.forEach((item)=>{
if(item.length>maxLength){
maxWord= [item];
maxLength=item.length;
}
else if(item.length===maxLength){
maxWord.push(item);
}
})
return maxWord;
}
console.log(findLongestWords("The quick brown fox jumps over the lazy dog"));
// [“jumped]
====================================================
var a=1;
function b() {
a = 10;
return ;
function a() {} → function hoisted top then only code executes. So, a is local variable here
from function to 10 ;
}
b();
console.log(a); // 1 due to function hoisting
====================================================
let str1= 'dinesh'
let str2 ='hari'
var final=''
for(i=0;i< (str1.length>str2.length ? str1.length :str2.length ); i++){
if(str1[i]&& str2[i]){
final = final+str1[i]+str2[i];
}
if(str1[i] && !str2[i]){
final= final+str1[i];
}
if(!str1[i] && str2[i]){
final= final+str1[i];
}
console.log(final);
}
========================================
console.log([] == false);
[] is an object (array)
false is a boolean
👉 So JavaScript tries to convert both sides to the same type
[] == 0
"" == 0
0 == 0 // ✅ true
console.log([] === false); //false
==========================
let str = "DineshIsGivingTheInterview";
let final = '';
let first = true;
for (let i = 0; i < str.length; i++) {
const char = str[i];
const lower = char.toLowerCase();
if (char === lower) {
final += char;
} else {
final += first ? lower : ' ' + lower;
first = false;
}
}
console.log(final); // dinesh is giving the interview
====================================================
var a =[{a:'dinesh'},{b:'prabu'},{c:'ltimind'}]
// ['dnsh' , 'prb', 'ltmnd']
let vowels=['a','e','i','o','u'];
var final =[];
const removeVowels =(arr)=>{
arr.forEach((item)=>{
const objKeys= Object.entries(item).forEach((it,key)=>{
const strArr= it[1].split("");
const filterVowel = strArr.filter((fil)=>!vowels.includes(fil));
final.push(filterVowel.join(“”));
})
})
return final;
}
console.log(removeVowels(a));
===================================================================
useImperativeHandle Hook:
useImperativeHandle is a React hook that lets you customize what a parent
component can access when using a ref on a child component.
=====================================================
console.log(0.1 + 0.2);
// 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false
console.log(Number(0.1 + 0.2) === 0.3); //false
===========================================
Swap without temp variable
let a = 10, b = 20;
[a, b] = [b, a];
console.log(a, b); // 20 10
===========================================
var a =[0,1,false, "", 2, 3]
console.log(a.filter((item)=>item)); // [1,2,3]
=======================================================
Concepts of Javascript, React, Html, css:
1.Tree shaking
2.React Fibre
3.Reconcilation Process ( Diffing Alg)
4.Code Splitting, Lazy Loading, Suspense,Fallback (React.Lazy)
5.Event Loops
6.Event Delegation
7.Even bubbling
8.Event Capturing
9.Use Layout, useImperative
10.async/defer in js
