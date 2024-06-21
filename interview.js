// 1 ---> Fizz Buzz Implementation

// Qus : Given an integer n, for every integer i <= n, the task is to print “FizzBuzz” if i is divisible by 3 and 5, “Fizz” if i is divisible by 3, “Buzz” if i is divisible by 5 or i (as a string) if none of the conditions are true.


// Ans :

for(let i=0;i <=50;i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuss")
    }
    else if(i % 3 === 0){
        console.log('fizz')
        
    }
    else if(i % 5 === 0){
        console.log('buss')
    }
    else {
        console.log('')
    }
}


//
// 2 ====> reverse a String in without using reverse function method


function reverseString(str){
    let finalData = ''
    
    for(i = str.length - 1;i >= 0;i--){
        finalData += str[i]
    }
    console.log('ssssdd',finalData)
    return finalData
}

console.log('ssssdd',reverseString('Hari'))

//
// 3 ===> Fibbonacci series -
// Ans ===> 

function fibbonociSeries(){
    let finalValue = [0,1]
    
    for(let i = 2;i < 10;i++){
        finalValue[i] = finalValue[i -1] + finalValue[i -2]
    }
    return finalValue
}

console.log(fibbonociSeries())

//
//const dataa = parseInt(prompt('Enter a number'))    ---> using browser input type

// https://www.edureka.co/blog/interview-questions/react-interview-questions/

//
// 4 =====> remove duplicate array value

var abc =  ["a","b","c","d","e","a","b","f"]

console.log(...new Set(abc))

// 5======> Rest function

let ab =[1,2,3,4,5]

function array(b,...a) {
    console.log(a)
}
array(6,7,8,0)
console.log("Welcome to Programiz!");



// 6========> find the values
var a = 10;

{
    var a = -10
}
let b = a;

{
    let b = -20
}


console.log(b);


// 7=====> shallow copy vs deep copy 
https://youtube.com/shorts/AQr3vtFueKw?si=w-kovQadEAhe7sw7


// 8====> find duplicate array

const arr = [5,6,7,5,8,9,7]

const result = Array.from(new Set(arr)).map(value => {
    return {value :value ,count : arr.filter(item => item === value).length}
}) 


console.log('ssss',result)


// 9=====> apply some specfic commits only
// git cherry-pick [--edit] [-n] [-m <parent-number>] [-s] [-x] [--ff]
// 		  [-S[<keyid>]] <commit>…​
// git cherry-pick (--continue | --skip | --abort | --quit)



// 10=====> Event loop in js
// https://youtu.be/mQPm642N9OM?si=5mrEYqlc8gClkz4J

// 11===> find Non repeat word

function nonRepeat(str){
   for(let i = 0;i < str.length;i++){
       let j = str.charAt(i);
       console.log(j,'okkk')
           console.log(str.indexOf(j),str.lastIndexOf(j),'ddd')
       if(str.indexOf(j) === str.lastIndexOf(j)){
           return j
       }
   }
   return 'ahaha'
}
 
let str = 'abacb'
console.log('val',nonRepeat(str))


// 12=====> same obj

const input1 = {"a":"3","b":"11","c":"99"}
const input2 = {"b":"11","c":"99"}

function sameObj(input1,input2){
    let obj = {};
    
    for(let i in input1){
        if(input1[i] === input2[i]){
         obj[i] = input1[i]
        }
    }
        return obj
}

console.log("val",sameObj(input1,input2))


// 13====> 2nd large number

const input1 = [4,3,1,9,4,-1,55]
const input2 = [1,4,0,3,6,3,5]


function secoundlarge(input1){
    let arr = [...new Set(input1)].sort((a,b) => a -b)
    return arr[arr.length - 2]
}

console.log("val",secoundlarge(input1))


// 14===> remove duplicate string way

const arr = "000222445588"

//output 02458

function removeDuplicate(arr){
    
    const conversplit = arr.split('')
    
    let result = conversplit.filter((val,index) => {
        return conversplit.indexOf(val) === index
    })
   return result.join('')
}

console.log('val',removeDuplicate(arr))


// 15====> add sum string

let num = "3456789";

const lalala = Array.from(num).map(Number).reduce((a, b) => {
    return a + b 
},0);

console.log(lalala); 

// 16===> JavaScript Recursion


// 17====> add sum 

function sum(a,b){
    if(b === undefined){
        return function(b){
            console.log(a,b)
            return a + b
        }
    }
    return a + b
}


console.log(sum(2)(3))
console.log(sum(2,3))


// 18 ===>  merge numbers

'abc'
'123456'
output === 'a1b2c3456'

function interleaveStrings(str1, str2) {
    let result = '';
    let maxLength = Math.max(str1.length, str2.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (i < str1.length) {
            result += str1[i];
        }
        if (i < str2.length) {
            result += str2[i];
        }
    }
    
    return result;
}

console.log(interleaveStrings('abc', '123456')); // Output: 'a1b2c3456'


// 19 ====> 
// Dark theme

import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkmode, setIsdarkmode] = useState(false);

  const toggleTheme = () => {
    setIsdarkmode((prevState) => !prevState);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [isDarkmode]);

  const theme = isDarkmode ? 'Dark' : 'Light';

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 20 ===> swap numberss

let a = 5;
let b = 10;

console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

// Swapping logic using a temporary variable
let temp = a;
a = b;
b = temp;

console.log("After swapping:");
console.log("a =", a); // Output: 10
console.log("b =", b); // Output: 5


// 21====>  sort number

const arr = [1, 9, 4, 1, 'a', 3, 6, 'b'];

// Separate numbers and strings
const numbers = arr.filter(item => typeof item === 'number');
const strings = arr.filter(item => typeof item === 'string');

// Sort numbers in ascending order
numbers.sort((a, b) => a - b);

// Sort strings alphabetically
strings.sort();

// Combine the sorted arrays
const sortedArr = [...numbers, ...strings];

// Join the elements into a string
const result = sortedArr.join(',');

console.log(result); // Output: 1,1,3,4,6,9,a,b


// else use this

const arr = [3,4,7,2,'b','a']

const result = arr.filter((item) => !isNaN(item)).sort()

const string = arr.filter((item) => isNaN(item)).sort()


const merge = [...result,...string]

console.log("Welcome to Programiz!",result);


// 22=====> find letters is there or not

let arr = ['boy', 'oy'];

function checktrue(arr) {
    let fword = arr[0]
    let sword = arr[1]
    
    for(let i =0;i < sword.length;i++){
        let letter = sword[i]
        if(fword.indexOf(letter) === -1){
        return false
        }
    }
    return true
}

console.log('val',checktrue(arr))


// 23===> sort and remove duplicate without predefined

const array = ['a', 'd', 'a', 'b', 'd', 'c', 'b'];

// Step 1: Implement a custom sorting algorithm (Bubble Sort)
function customSort(arr) {
  const length = arr.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}


// Step 2: Implement logic to remove duplicates
function removeDuplicates(arr) {
  const result = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Step 3: Sort the array
customSort(array);

// Step 4: Remove duplicates
const uniqueArray = removeDuplicates(array);

console.log(uniqueArray); // Output: ['a', 'b', 'c', 'd']


// if u want use 1 loop...here its is


const array = ['a', 'd', 'a', 'b', 'd', 'c', 'b'];

function customSort(arr) {
  const length = arr.length;
  let swapped; // Flag to check if any swapping is done in a pass

  do {
    swapped = false; // Initialize swapped as false
    for (let i = 0; i < length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true; // Set swapped to true if swapping is done
      }
    }
    length--; // Decrementing length as the largest element is moved to the end
  } while (swapped); // Continue looping until no swapping is done in a pass
}

customSort(array);
console.log(array); // Output: ['a', 'a', 'b', 'b', 'c', 'd', 'd']



// 24======> HOC component

// https://youtu.be/Irh1saMX6GQ?si=Yfu9fZwzh8jyUn8_



//
import React, { useState } from 'react';

const Counter = (Oldcomponent) => {
  return function enHancedcomponent(props) {
    const [count, setCount] = useState(0);
    return (
      <Oldcomponent
        {...props}
        incremnt={() => setCount(count + 1)}
        count={count}
      />
    );
  };
};

export default Counter;


// 25    ====>   

const data = [
  { id: 1, category: "A", value: 10 },
  { id: 2, category: "B", value: 20 },
  { id: 3, category: "A", value: 30 },
  { id: 4, category: "C", value: 40 },
  { id: 5, category: "B", value: 50 }
];

const groupedData = data.reduce((acc, obj) => {
  const key = obj.category;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(obj);
  return acc;
}, {});

console.log(groupedData);



// 26 =====>

let arr = [1,2,3,4,5]

let obj = {...arr}

console.log(obj)




const company = {
    "name": "Acme Corporation",
    "departments": [
        {
            "name": "Engineering",
            "employees": [
                {
                    "name": "Alice",
                    "skills": ["Python", "JavaScript"]
                },
                {
                    "name": "Bob",
                    "skills": ["Java", "C++"]
                }
            ]
        },
        {
            "name": "Sales",
            "employees": [
                {
                    "name": "Charlie",
                    "skills": ["Sales", "Negotiation"]
                },
                {
                    "name": "David",
                    "skills": ["Marketing", "Communication"]
                }
            ]
        }
    ]
};

function getEmployeesWithSkill(skill) {
    const result = [];
    company.departments.forEach(department => {
        department.employees.forEach(employee => {
            if (employee.skills.includes(skill)) {
                result.push(employee.name);
            }
        });
    });
    return result;
}

console.log(getEmployeesWithSkill("Python")); // Output: ["Alice"]




//Shalloe copy and deep copy

const obj = {
    name : 'hari',
    age : 23,
    pincode : 600042
}

const shallowCopy = {...obj}
shallowCopy.age = 25

const deepCopy = JSON.parse(JSON.stringify(obj))
deepCopy.age = 22

console.log(deepCopy,shallowCopy)



// Razerpay interview

1 =====>

// var test = 1;

// console.log(myFunction2());
// console.log(myFunction1())

// const myFunction1 = () => {
//   return myFunction2();
// }
// function myFunction2() {
//   function test() {}
//   test = 10;
//   return test;
// }

// console.log(test);


// 2=====>

function path(obj, pathString) {
  const pathArray = pathString.split('.');
  return pathArray.reduce((acc, key) => acc && acc[key], obj);
}

const post = {
  title: 'Food Of Bangalore',
  caption: 'Hello, explore the best food of bangalore at Sheraton Hotel.',
  images: ['', ''],
  created_at: 1652069177530,
  created_by: {
    name: 'Goutam',
    contact: '+919999999999',
    email: 'goutam@goutambseervi.tech',
    features: {
      insta_groups: {
        ramp: 10,
        exclude: ['__razorpay__']
      }
    }
  }
};

const groups = path(post, 'created_by.features.insta_groups');
console.log(groups);



// 3 ====> 

const isEven = (x) => x % 2 === 0;

function partition(arr, predicate) {
  return arr.reduce(
    (acc, element) => {
      if (predicate(element)) {
        acc[0].push(element);
      } else {
        acc[1].push(element);
      }
      return acc;
    },
    [[], []] // Initial value: an array with two empty arrays
  );
}

console.log(partition([1, 2, 3, 4, 5, 6], isEven));


// 4 ===> 

const input = [
  {
    name: "Nithesh",
    tech: ["HTML", "CSS", "JAVA", "JS"]
  },
  {
    name: "hari",
    tech: ["NodeJS", "CSS", "React", "JS"]
  },
  {
    name: "sathish",
    tech: ["Angular", "CSS", "React", "HTML"]
  }
];

const uniqueTechnologies = [...new Set(input.flatMap(person => person.tech))];

console.log(uniqueTechnologies);



/////with out using Reduce

let data = [
  { key: "Sample1", data: "Data1" },
  { key: "Sample1", data: "Data1" },
  { key: "Sample1", data: "Data1" },
  { key: "Sample2", data: "Data2" },
  { key: "Sample3", data: "Data3" },
  { key: "Sample4", data: "Data4" }
];

const groupedData = {};

for (const item of data) {
  if (!groupedData[item.key]) {
    groupedData[item.key] = [];
  }
  groupedData[item.key].push(item);
}

console.log(groupedData);

//checkbox program

import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [selected, setSelected] = useState([]);
  const data = [
    { id: 1001, value: 'value1' },
    { id: 1002, value: 'value2' },
    { id: 1003, value: 'value3' },
    { id: 1004, value: 'value4' },
    { id: 1005, value: 'value5' },
  ];

  const handleChange = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
    console.log(selected);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%' }}>
      {data.map((item) => {
        return (
          <>
          <h5>{item.id}</h5>
          <input
          type="checkbox"
          value={selected}
          name="select"
          onChange={() => handleChange(item.id)}
          />
          </>
        );
      })}
    </div>
  );
}

////

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(b[i]), 1000);
}


////image

import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [text, setText] = useState('');

  const url = 'https://66307bafc92f351c03d9fa7b.mockapi.io/test';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setFilterData(res);
      })
      .catch((err) => console.log('err', err));
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
    const result = data.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilterData(result);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      name: text,
      // avatar: data.avatar,
    };
    console.log(payload);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <input
        name="name"
        type="text"
        value={text}
        onChange={handleTextChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {filterData.map((item, index) => (
          <li key={item.id}>
            {index + 1}. {item.name}
            <img src={item.avatar} alt={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}


///apply and call

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let obj1 = {
    first_name : 'hari',
    last_name : 'krishna',
    full_name : function() {
        return this.first_name + this.last_name
    }
}

let obj2 = {
  first_name : 'dinesh',
  last_name : 'prabhu'
}

console.log("Try programiz.pro",obj1.full_name.call(obj2));

///////////////////////////
// i have parent div and child div display child div in horizontal and vertical center

<div class="parent">
  <div class="child">Centered Content</div>
</div>


//cssss
.parent {
  display: flex;
  justify-content: center;  /* Centers horizontally */
  align-items: center;      /* Centers vertically */
  height: 100vh;            /* Set a height for the parent div, e.g., full viewport height */
  border: 1px solid #000;   /* Optional: to visualize the parent div */
}

.child {
  border: 1px solid #f00;   /* Optional: to visualize the child div */
  padding: 20px;            /* Optional: add some padding to the child div */
}



////function////
(function() {
console.log('a');
setTimeout(function() {console.log('b')}, 3000);
Promise.resolve().then(() => console.log('Promise 1'));			
setTimeout((function() {console.log('c')})(), 4000);	
console.log('d');
})();


///// some new 
// find bound index given bound

let arr =['bound','unbound','unbound','bound','unbound','unbound','bound','bound']

let number = 2

let str = 'bound'

function find(arr,num,string){
    let count  = 0;
    
    for(let i =0;i <arr.length;i++){
        if(arr[i] === string){
            count++;
        }
        
        if(count === number){
            return i
        }
        
    }
    
}
console.log(find(arr,number,str))


////// output will be a3b2c1d3

let str = "aaabbcdddeeeea";

function merge(str){
let convert = str.split("");
let res = ''
for(let i =0;i<convert.length;i++){

   let count = 1
   while(convert[i] === convert[i+1]){
       count++ ;
       i++
   }
   res += convert[i] + count
}
    return res
}


///// find prime number

function prime(num){

     if(num < 2){
         return false
     }
     for(let i =2;i < num;i++){
         if(num % i === 0){
             return false
         }
     }
         return true
}

console.log(prime(13))

//substring and find largest num
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

let str = 'bbabcb'

function substring(str){
    let length = str.length
    let maxLength = 0
    let start = 0
    let seen = new Set()
    
    for(let i = 0;i < length;i++){
        while(seen.has(str[i])){
            seen.delete(str[start])
            start++
        }
        seen.add(str[i])
    maxLength = Math.max(maxLength,i - start + 1)
    }
    return maxLength
}

console.log(substring(str))
console.log(lengthOfLongestSubstring(str));  // Output: 1


//map without
let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
}

console.log(arr);  // Output: [2, 4, 6]


//Timer react js
import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          let { hr, min, sec } = prevTime;
          sec += 1;
          if (sec === 60) {
            sec = 0;
            min += 1;
          }
          if (min === 60) {
            min = 0;
            hr += 1;
          }
          return { hr, min, sec };
        });
      }, 1000);
    } else if (!isRunning && timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStartResume = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime({ hr: 0, min: 0, sec: 0 });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Timer</h1>
      <div style={{ fontSize: '2em' }}>
        {String(time.hr).padStart(2, '0')}:
        {String(time.min).padStart(2, '0')}:
        {String(time.sec).padStart(2, '0')}
      </div>
      <div>
        <button onClick={handleStartResume}>Start/Resume</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;


//node
// https://www.turing.com/interview-questions/node-js

//
// // The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// // Examples
// // "din"      =>  "((("
// // "recede"   =>  "()()()"
// // "Success"  =>  ")())())"
// // "(( @"     =>  "))(("

function find(str){
    let convert = str.split("")

    let result = convert.map((item) => {
        return convert.filter((value) => value.toLowerCase() === item.toLowerCase()).length > 1 ? ')' : '('
    })

  return result.join('')

}

console.log(find('Success'))


 let str = 'Hey fellow warriors'
// // letter >= 5

function reverse(str){
   let result = str.split(" ")

//    console.log(result)

   for(let i=result.length-1;i >=0;i--){
       if(result[i].length >= 5){
        result[i] = result[i].split("").reverse().join('')
       }
   }
   return result.join(' ')
}

console.log(reverse(str))


//
function capitalizeFirstWords(text) {
  let sentences = text.split(' ');

  let capitalizedSentences = sentences.map(sentence => {
      if (sentence.length > 0) {
          return sentence.charAt(0).toUpperCase() + sentence.slice(1);
      } else {
          return sentence;
      }
  });

  let capitalizedText = capitalizedSentences.join(' ');

  return capitalizedText;
}

let originalText = "this is my world";
let capitalizedText = capitalizeFirstWords(originalText);
console.log(capitalizedText);


//Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2.

//simple
let num = [2,7,11,18]
let target = 9

function findind(num,target){
     let res = []
     for(let i =0;i < num.length;i++){
         for(let j =i+1;j < num.length ;j++){
             if(num[i] + num[j] === target){
                 res.push(i+1,j+1)
             }
         }
     }
     return res
}

console.log(findind(num,target))

//

function twoSum(numbers, target) {
  let numDict = {};
  for (let i = 0; i < numbers.length; i++) {
      let complement = target - numbers[i];
      if (complement in numDict) {
          return [numDict[complement] + 1, i + 1];  // 1-based index
      }
      numDict[numbers[i]] = i;
  }
  return [];
}


//naan pannadhu


//

let num = [1,2,3,4,5,6,7]
let target = 3
// Output: [5,6,7,1,2,3,4]
let length = num.length
let current = length - target

let postVal = num.splice(current,length)
let currentval = num.splice(0,current)

let merge = [...postVal,...currentval]

console.log(merge)





//////interviw time
// Input: 
let num = [1,2,3,4,5,6,7]
let target = 4
    let length = num.length
    let current = length - target
    
    let postVal = num.splice(current,length)
    let currentval = num.splice(0,current)
    
    let merge = [...postVal,...currentval]
    
    console.log(merge)
    
// Output: [5,6,7,1,2,3,4]


///thappu
function rotate(num,target){
    let length = num.length
    let current = length - target
    let res = []
    
    for(let i =0 ;i < length;i++){

        if(i < current){
            // console.log(i < current)
          res.push(num[i])
        }else {
            
        }
    }
    return res
}

// console.log(rotate(num,target))


//Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const n = merged.length;
  if (n % 2 === 1) {
      return merged[Math.floor(n / 2)];
  } else {
      return (merged[n / 2 - 1] + merged[n / 2]) / 2;
  }
}

// Examples:
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5


//status code
// 200 - ok
// 201 - created
//202 - accepted
//400 - bad request
//401 - unauthrozied
//404 - not found
//500 - internal server error
//502 - bad gateway