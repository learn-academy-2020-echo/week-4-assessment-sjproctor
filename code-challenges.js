// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

// Fisher–Yates shuffle
const shuffles = (array) => {
  console.log("array length", array.length)
  if(array.length <= 1){
    return "The array is empty."
  } else {
    array.shift()
    for(let i=0; i<array.length; i++){
      let randomIndex = Math.floor(Math.random() * array.length)
      console.log("randomIndex:", randomIndex)
      let temp = array[randomIndex]
      console.log("temp:", temp)
      array[randomIndex] = array[i]
      array[i] = temp
    }
    return array
  }
}
console.log(shuffles(collections))
console.log(shuffles(collections))
console.log(shuffles(collections))
console.log(shuffles(collections))
console.log(shuffles(collections))


const shuffler = (array) => {
  if(array.length > 1){
    array.shift()
    return array.sort((a, b) => 0.5 - Math.random())
  } else {
    return "The array is empty."
  }
}
console.log(shuffler(collections))
console.log(shuffler(collections))
console.log(shuffler(collections))
console.log(shuffler(collections))
console.log(shuffler(collections))


// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const sumOfAll = (array) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  const mapper = (value) => Math.pow(value, 3)
  let arrayItem = array.map(mapper)
  return arrayItem.reduce(reducer)
}
console.log(sumOfAll(cubeAndSum1))
console.log(sumOfAll(cubeAndSum2))


const cubeAndSum = (array) => {
  let sum = 0
  for(var i in array){
    sum += Math.pow(array[i], 3)
  }
  return sum
}
console.log(cubeAndSum(cubeAndSum1))
console.log(cubeAndSum(cubeAndSum2))


// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]

const leastToGreatest = (array) => {
  array.sort((a, b) => a - b)
  return [array[0], array[array.length - 1]]
}
console.log(leastToGreatest(nums1))
console.log(leastToGreatest(nums2))


const minMax = (array) => {
  return [Math.min(...array), Math.max(...array)]
}
console.log(minMax(nums1))
console.log(minMax(nums2))

// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

const everyOther = (string) => {
  let splitString = string.split("")
  let upperCasedOddIndexes = splitString.map((value, index) => {
    if(index % 2 !== 0){
      return value.toUpperCase()
    } else {
      return value
    }
  })
  return upperCasedOddIndexes.join("")
}
console.log(everyOther(testString1))
console.log(everyOther(testString2))


// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

const combineArraysNoDuplicates = (array1, array2) => {
  const set = new Set([...array1, ...array2])
  return Array.from(set)
}
console.log(combineArraysNoDuplicates(arr1, arr2))


const combineWithNoDups = (...array) => {
  let combo = array.reduce((acc, currentValue) => {
    return acc.concat(currentValue)
  })
  let checker = combo.filter((value, index) => {
    return combo.indexOf(value) === index
  })
  return checker
}
console.log(combineWithNoDups(arr1, arr2, [1, 2, 3, 4], [3, 4, 5, 6, 7, 8]))


const combineArraysNoDuplicates2 = (...array) => {
  let comboArray = array.reduce((acc, currentValue) => {
    return acc.concat(currentValue)
  })
  const set = new Set([...comboArray])
  return Array.from(set)
}
console.log(combineArraysNoDuplicates2(arr1, arr2))


const noDuplicates = (array1, ...array2) => {
  var noDuplicateArray = []
  let combinedArray = array1.concat(...array2)
  for(var value of combinedArray){
    if(noDuplicateArray.indexOf(value) === -1){
      noDuplicateArray.push(value)
    }
  }
  return noDuplicateArray
}
console.log(noDuplicates(arr1, arr2, [1, 2, 3, 4, 5]))
