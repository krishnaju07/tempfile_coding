// // The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// // Examples
// // "din"      =>  "((("
// // "recede"   =>  "()()()"
// // "Success"  =>  ")())())"
// // "(( @"     =>  "))(("

// function find(str){
//     let convert = str.split("")

//     let result = convert.map((item) => {
//         return convert.filter((value) => value.toLowerCase() === item.toLowerCase()).length > 1 ? ')' : '('
//     })

//   return result.join('')

// }

// console.log(find('Success'))


//
//1702 => 18
//1700 => 17
//1834 => 19
// find the century

// function findCentury(num){
//     for(let i =0;i < num.length;i++){
//         if(num[])
//     }
// }

// console.log(Math.ceil(1701/100))

// console.log(Math.floor(5.1))

// let str = 'Hey fellow warriors'
// // letter >= 5

// function reverse(str){
//    let result = str.split(" ")

// //    console.log(result)

//    for(let i=result.length-1;i >=0;i--){
//        if(result[i].length >= 5){
//         result[i] = result[i].split("").reverse().join('')
//        }
//    }
//    return result.join(' ')
// }

// console.log(reverse(str))


//
// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTr
// Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
//     Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
//     Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');

// let str = 'Vvttr'
// let convert = str.toLocaleLowerCase()


// function nonRepeat(str){
//     for(let i =0;i <str.length;i++){
//         let j = str.charAt(i).toLowerCase()
//         console.log(j)
//         if(str.indexOf(j) === str.lastIndexOf(j)){
//             return j
//         }
//     }
// }

// console.log(nonRepeat(convert))


// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.
// let str = '12'
// function add(str){
//     // const result = 
// }

// console.log(add(str))

//share input bro

let str = 'pwwkew'

function checkVal(str){
    let length =str.length
    let maxlength = 0
    let start = 0
    let seen = new Set()

    for(let i =0;i < length;i++){
        if(seen.has(str[i])){
            seen.delete(str[start])
            start++
        }
        seen.add(str[i])
        maxlength = Math.max(maxlength,i - start + 1)
    }
    return maxlength

}
console.log(checkVal(str))
