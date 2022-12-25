//1
function array(num1,num2,num3,num4) {
  let a = [num1,num2,num3,num4];

  return a.slice(1,3)
}

console.log(array(4,5,6,7));

//2
function arrayS(wortOne,wordTwo,wordThere) {
    let a = [wortOne,wordTwo,wordThere];
    a.unshift('new begining');
    a.push ('new ending');
    return a
}

console.log(arrayS('dog','cat','baloon'));

//3
function returnFive (num1,num2,num3,num4) {
  let a = [num1,num2,num3,num4];
  if (a.includes(5)) {
    return true
  }
  return false
}

console.log(returnFive(1,5,6,9));
console.log(returnFive(1,7,6,9));

//4
let ab = [1,2,3]
let cd = [4,5,6]
function combine (ab,cd) {
  return ab.concat(cd)
}

console.log(combine(ab,cd));

//5
let x = [1,2,3,4,5]
let n = 3
function ifN(x,n) {
  if (x.includes(n)) {
    return true
  }
  return false
}
console.log(ifN (x,n));

//6

// function inclueds(wordOne, wordTwo,wordThere,wordFour) {
//   // let words = wordOne + wordTwo + wordThere + wordFour;
//   let ind = "wordOne".index0f('s')
//   return ind
// }

// console.log( inclueds ('dog', 'smile', 'love', 'moon'));

//7
function revers (num1,num2,num3,num4) {
  let a = [num1,num2,num3,num4]
  return a.reverse()
}

console.log(revers(22,45,63,85));

//8
let a = [1,2,3,4,5,6]
function reversOnly (a) {
  // let a = [a]
  if (a.length >= 5 && a.length<=10) {
    return a.reverse()
  }
  return a
}

console.log(reversOnly(a));

//9

function rever (num1,num2,num3,num4,n) {
  let a = [num1,num2,num3,num4]
  if (n== num1 ||n== num2 || n== num3 ||n== num4) {
    
    return a.reverse ()
  }
  return a
}
console.log(rever (11,21,24,56,24));

//10

//11

