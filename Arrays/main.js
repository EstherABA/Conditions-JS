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
let weirdArray = ['Inception', 'Spiderman', 'Tuesday']
let weirderArray = ['Green', 'Saturday', 'Friday', 'Wednesday']
//1
let a = weirderArray.reverse()
console.log(a);
//2
let b = weirdArray.concat(weirderArray)
console.log(b);
//3
let movies = [weirdArray.shift(0),weirdArray.shift(1)]
console.log(movies);
console.log(weirdArray);
//4
weirdArray.unshift('Monday')
console.log(weirdArray);
//5
weirdArray.push('Thursday')
console.log(weirdArray);
//6
let colors = weirderArray.pop(-1)
//7
weirderArray.unshift('Sunday')
console.log(weirderArray);
//8
let weekend = [weirderArray.pop(), weirderArray.shift()]
console.log("weekend : " ,weekend);
console.log("weirderArray : " ,weirderArray);

////////////////////////////EX3////////////////////////////
///1///
let practiceFile = [273.15]
console.log(practiceFile);
practiceFile.push (42)
console.log(practiceFile);
practiceFile.push ("hello")
console.log(practiceFile);
practiceFile.push (false, -4.6, "87")
console.log(practiceFile);

///2///
//1
let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket']
cargoHold [5] =  'space tether'
console.log(cargoHold);
//2
let remove = cargoHold.pop()
console.log("remove : ",remove);
console.log(cargoHold);
//3
let removeStart = cargoHold.shift()
console.log("remove start : ",removeStart);
console.log(cargoHold);
//4
cargoHold.unshift (1138)
cargoHold.push ('20 meters')
console.log(cargoHold);
//5
let bb = cargoHold.length
console.log(`the final is: ${cargoHold} and its length: ${bb}`);

///3///
//1
cargoHold.splice(3,0,'keys')
console.log(cargoHold);
//2
cargoHold.splice(4,1)
console.log(cargoHold);
//4
cargoHold.splice(2,3,'cat', 'fob', 'string cheese')
console.log(cargoHold);

///4///
let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23]
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip']
//1
console.log( holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);
console.log(holdCabinet2);
//2
let aa = holdCabinet1.slice(0,2)
console.log("aa:",aa);
console.log(holdCabinet1);
//3
let z = holdCabinet1.reverse()
console.log("z:",z);
console.log(holdCabinet1);
let x = holdCabinet2.sort()
console.log("x:",x);
console.log(holdCabinet2);

///5///
//1
let str = 'In space, no one can hear you code.'
console.log(str.split());
console.log("by e:",str.split('e'));
console.log("by ' :", str.split(''));
console.log("by  :", str.split(""));
//2
let arr = ['B', 'n', 'n', 5]
console.log("join:", arr.join());
console.log("a:", arr.join('a'));
console.log(":", arr.join(''));
console.log("'':", arr.join(""));
console.log(arr)

////////////////////////////EX4////////////////////////////
//1
let numbers1 = [1, 2, 3, 4, 5]
let numbers2 = numbers1
console.log("number 1 : " , numbers1)
console.log("number 2 : " , numbers2)
numbers1.push(6)
console.log("number 1 : " , numbers1)
console.log("number 2 : " , numbers2)
//2

let numbers1New = [1, 2, 3, 4, 5]
let numbers2New = numbers1New.slice()
console.log("numberNew 1 : " , numbers1New)
console.log("numberNew 2 : " , numbers2New)
numbers1New.push(6)
console.log("numberNew 1 : " , numbers1New)
console.log("numberNew 2 : " , numbers2New)



