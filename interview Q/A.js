// 1-> Reverse String 
console.log(Reversestring('hari'))

// 2-> Fibbonci Series
console.log(Fibbonci())

//3 => Remove Duplicate
var abc =  ["a","b","c","d","e","a","b","f"]
console.log()

//4 => find duplicate array
const arr = [5,6,7,5,8,9,7]
console.log();

//5 -> find Non-repeat 
let str = 'abacb'
console.log('val',nonRepeat(str))

//6 -> Find same object values
const input1 = {"a":"3","b":"11","c":"99"}
const input2 = {"b":"11","c":"99"}

console.log(sameObj(input1,input2));

// 7 -> Merge 2 array values
// output === 'a1b2c3456'
let str1 = 'abc'
let str2 = '123456'
console.log(Merge(str1,str2));

//8 -> remove and sort data without using pre-defined
const array = ['a', 'd', 'a', 'b', 'd', 'c', 'b'];
const sorted = sortdata(array)
console.log(remove(array));

/// 9 -> Groupby data as key
const data = [
    { id: 1, category: "A", value: 10 },
    { id: 2, category: "B", value: 20 },
    { id: 3, category: "A", value: 30 },
    { id: 4, category: "C", value: 40 },
    { id: 5, category: "B", value: 50 }
  ];

  console.log(result);

  //10 -> get skills owned name
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
  console.log(getEmployeesWithSkill("Python")); 

  //11 -> Get exact value
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

  //12 --> check is even ,give odd,even
  console.log(partition([1, 2, 3, 4, 5, 6], isEven));

//   13 --> get without duplicate
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
  console.log();

  //14 --> find index
  let num = [2,7,11,18]
let target = 9

console.log(findIndex(num,target))