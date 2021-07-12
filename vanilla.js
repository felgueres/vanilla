// Defining variables with var and let, these two vary in scope.
{
    // Var has global scope, in and out of brackets.
    var block_x = 1;
}

{
    // Let has block scope (within curly brackets)
    let block_y = 'amazing_block';
}

// Defining constants: Const must be assigned when declared
// Arrays, Objects, Functions and RegExp, because they don't change, should be defined as const

const isEqual = function (a, b){
    return a == b 
}

// Doing basic operations, findMin, findMax, etc
const findMin = function (arr){
    if (arr.length == 1){
        return arr[0]
    }
    var minValue = arr[0];
    for (let i=1;i < arr.length; i++){
        currValue = arr[i]
        if (currValue < minValue){
            minValue = currValue
        }
    }
    return minValue;
}

// Find max in array
function findMax(arr){
    maxValue = arr[0];
    for (let i=1; i<arr.length;i++){
        curValue = arr[i];
        if (curValue>maxValue){
            maxValue = curValue}
    }
    return maxValue
}

function power(num, exp){
    return num ** exp
}

// Return array with fizz if div by 2, buzz if div by 5, fizzbuzz if div by 2 and 5, else num.
function fizzBuzz(num, divNum1, divNum2){
    arr = [];
    for(let i=1; i <= num; i++){
        curNum = i 
        if (curNum % divNum1 == 0 && curNum % divNum2 == 0){
            arr.push('fizzbuzz');
        } else if (curNum % divNum1 == 0){
            arr.push('fizz')
        } else if (curNum % divNum2 == 0){
            arr.push('buzz')
        } else {
            arr.push(curNum);
        }
    }
    return arr
}

function isEqualArray(arr1, arr2){
    if (arr1.length != arr2.length){
        return false}
    for (var i=0; i < arr1.length; i++){
       if(arr1[i]!=arr2[i]){ 
        return false;
        }
    }
    return true;
}

console.log('Pass Min Test 1', 0.9 == findMin([1,3,100,200,0.9]));
console.log('Pass Min Test 2', 1 == findMin([1]));
console.log('Pass Min Test 3', -1000 == findMin([1000, -1000]));
console.log('Pass Max Test 1', 2000 == findMax([1000, 2000, 1001, 199]));
console.log('Pass Max Test 2', 2000 == findMax([2000]));
console.log('Pass Max Test 3', 2001 == findMax([2000, 2001, -1000]));
console.log('Pass Power Test 1', 8 == power(2,3));
console.log('Pass isEqualArray 1', true == isEqualArray([1,2,3],[1,2,3]))
console.log('Pass isEqualArray 2', false == isEqualArray([1,2,3],[1,2,1]))
console.log('Pass isEqualArray 3', false == isEqualArray([1,2,3],[1,2]))
console.log('PassfizzBuzz',isEqualArray([1,'fizz','buzz','fizz',5,'fizzbuzz'], fizzBuzz(6,2,3)))

// https://www.w3schools.com/js/js_loop_forin.asp (forEach)
// [].forEach(callbackFunction);
// Note: For each gives you access to value, index and array

// Neat way to check the constructor of something
console.log('Returns true if it is an array', [1].constructor.toString().indexOf("Array") > -1)
console.log('Another way to do it', [1].constructor === Array)


