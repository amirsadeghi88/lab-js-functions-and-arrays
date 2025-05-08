// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2){
        return num1;
    }else{
        return num2;
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    
    let longestWord= "";
    if(array.length === 0){
        return null;
    }
    array.forEach((word) => { 
        if (word.length > longestWord.length){
            longestWord = word;
        }
    });
    return longestWord;
}





// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let total = 0;
    array.forEach((number)=>{
         total += number;
    });
    return total;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(items) {
    let sum = sumNumbers(items);
    if(items.length === 0){
        return 0;}
    return sum / items.length;
       
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, names) {

let isInTheArray = false;

    if(array.length === 0){
        return null;}

        for (let i=0; i<array.length; i++){
            if (names === array[i]){
                isInTheArray = true;
            } /*else { isInTheArray = false;}
            break;*/
        }
        return isInTheArray;

}

