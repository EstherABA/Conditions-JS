////////////////////////////EX1////////////////////////////


////////1///////
//////////////
function array(arrOne) {

  return arrOne.slice(1,3)
}

let arrOne = [4,5,6,7]
console.log(array(arrOne));


/////////2///////
//////////////
function arrayS(arrTwo) {
    arrTwo.unshift('new begining');
    arrTwo.push ('new ending');
    return arrTwo
}

let arrTwo = ["dog","cat","baloon"];
console.log(arrayS(arrTwo));


////////3///////
//////////////
function returnFive (arrThree) {
  if (arrThree.includes(5)) {
    return true
  }
  return false
}

let arrThree =[2,3,4,5];
console.log(returnFive(arrThree));


////////4///////
//////////////
function combine(arrFourOne,arrFourTwo) {
  return arrFourOne.concat(arrFourTwo)
}

let arrFourOne = [1,2,3]
let arrFourTwo = [4,5,6]
console.log(combine(arrFourOne,arrFourTwo));


////////5///////
//////////////
function ifN(arrFiveOne,n) {
  if (arrFiveOne.includes(n)) {
    return true
  }
  return false
}
let arrFiveOne = [1,2,3,4,5]
let n = 3
console.log(ifN (arrFiveOne,n));


////////6///////
//////////////
function inclueds(arrSix) {
  const c = Array.from(arrSix).indexOf('s');

  return c
  
}

const arrSix = ['d', 's', 'l', 'm'];
console.log( "index : " ,inclueds(arrSix));

////////7///////
//////////////
function revers (arrSeven) {
  return arrSeven.reverse()
}

let arrSeven = [22,45,63,85]
console.log("arrSeven : " , revers(arrSeven));

////////8///////
//////////////
function reversOnly (arrEight) {
  // let a = [a]
  if (arrEight.length >= 5 && arrEight.length<=10) {
    return arrEight.reverse()
  }
  return arrEight
}

let arrEight = [1,2,3,4,5,6,7,8,9,10]
console.log("arrEight : ", reversOnly(arrEight));

////////9///////
///////////////
function rever (arrNine,n) {
  for (i in arrNine) {
    if (n== arrNine[i]) {
    
    return arrNine.reverse ()
    }
  }
  return arrNine
}

let arrNine = [11,21,24,56,24]
console.log("arrNine : " ,rever (arrNine,1));

////////10///////
/////////////////
function arrayClone (arrTen) {
  return [...arrTen]
}

let arrTen = [22,33,44,55]
console.log("clone :", arrayClone(arrTen));


////////11///////
/////////////////
function firstNparameter (arrEleven, n) {
  return arrEleven.slice(0,n)
}

let arrEleven = [1,2,7,8,9]
console.log("first : ", firstNparameter  (arrEleven,3));

////////12///////
/////////////////
function lastNparameter (arrTwelve, n) {
  return arrTwelve.slice (-n-1,-1)
}
let arrTwelve = [1,2,7,8,9]
console.log("last : ", lastNparameter  (arrTwelve,2));

////////13///////
////////////////
function checking (arrThirteen) {
  if (arrThirteen.at(0) == arrThirteen.at(-1)) {
    return true
  }
  return false
}

let arrThirteen = [1,22,66,54,87,9,1]
console.log(arrThirteen [0]);
console.log(arrThirteen [-2]);
// console.log(arrThirteen );
console.log("true or false :",  checking(arrThirteen));

////////14///////
////////////////
function btw (arrFourteen) {
  if (arrFourteen.at(0) == arrFourteen.at(-1)) {
    let a = arrFourteen.slice(1,-1)
    return a.length
  }
  return false
}
let arrFourteen = [1,22,66,54,87,9,6,88,34,21,1]
console.log("how many :" , btw (arrFourteen));

////////////////////////////EX2////////////////////////////
let a = [1,2,3,4,5,6,7,8]
let b = a.slice(0,-1)
console.log ("b: " , b)