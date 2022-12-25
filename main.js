
// //1
// function check(num) {
//     if (num % 2 ==0) {
//         return ("True")
//     }
//     else {
//         return ("False")
//     }
// }

// console.log(check(5))

// //2
// function greaterNum (x,y,z) {
//     if (x>y && x>z) {
//         console.log (x)
//         return x
//     }

//     else if (y>x && y>z) {
//         console.log (y)
//         return y
//     }
//     else if (z>x && z>y) {
//         console.log (z)
//         return z
//     }

// }

// console.log(greaterNum(3,2,4)) 

// //3
// function helloWorld (languages) {
//     if (languages==="en") {
//         return('Hello, World')
//     }
//     else if (languages==="es") {
//         return('Hola Mundo')
//     }
    
//     else if (languages==="de") {
//         return('Hallo Wereld')
//     }
//     else {
//         return 'Hello, World'
//     }

// }
// console.log(helloWorld("es"))
// console.log(helloWorld("en"))
// console.log(helloWorld("de"))

// //4
// function assignGrade (score){
//     if (score>= 90 && score <=100) {
//         return "A" 
//     }
//     else if (score >=80) {
//         return "B" 
//     }
//     else if (score >=70) {
//         return "C" 
//     }
//     else if (score >= 60) {
//         return "D" 
//     }
//         return "F" 
// }

// console.log(assignGrade(80))
// console.log(assignGrade(11))
// console.log(assignGrade(75))

// //5
// function pluralize(string,num){
//     if (string=== "sheep" || string=== "geese"  ) {
//         return (`${num} ${string}`)
//     }
//     else if (num===1 || num===0) {
//         return (`${num} ${string}`)
//     }
//     else {
//         return (`${num} ${string}'s`)
//     }
// }
// console.log(pluralize ("dog",3) )
// console.log(pluralize ("dog",1) )
// console.log(pluralize ("sheep",7) )
// console.log(pluralize ("sheep",1) )

// // // 6
// // // Using logical operators, write an expression that represents the following statement: "I would like an ice cream with strawberry and chocolate, or stracciatella, or an ice cream of any flavor but caramel." //
// // // a = "strawberry", b="chocolate", c= "stracciatella", d= "caramel"
// // //  a && b ||  a && c || b && c || c || b 

// // //7
// // function getName() {
// //     let person = prompt("Please enter your name");
// //     if (person != null) {
// //         return(`Hello, ${person} Welcome!`)
// //       }

// //     return (`Hello friend, Welcome!`)
// //     }


// // console.log(getName())

// //8
// function take(number){
//     if (number===0){
//         return (`Zero`)
//     }
//     else if (number%2!==0 && number>=0) {
//         return (`Positive and odd`)
//     }
//     else if (number%2!==0 && number<=0) {
//         return (`Negative and odd`)
//     }
//     else if (number%2==0 && number>=0) {
//         return (`Positive and even`)
//     }
//     else if (number%2==0 && number<=0) {
//         return (`Negative and even`)
//     }
// }

// console.log(take(6))
// console.log(take(-6))
// console.log(take(-11))
// console.log(take(11))
// console.log(take(0))

// //9

// //10
// function calculator(num1,num2,operator) {
//     if (operator==="+") {
//         return num1+num2
//     }
//     else if (operator==="-") {
//         return num1-num2
//     }
//     else if (operator==="/") {
//         return num1/num2
//     }
//     else if (operator==="*") {
//         return num1*num2
//     }
//     else if (operator==="^") {
//         return num1^num2
//     }
//     else if (operator==="%") {
//         return num1%num2
//     }
// }

// console.log(calculator(2, 3, "+"))
// console.log(calculator(2, 3, "-"))

// //11
// function isLeapYear(year) {
//     if (year%4==0 && year%400==0 && year!==100) {
//         return true
//     }
//     return false
// }

// console.log(isLeapYear(2000))
// console.log(isLeapYear(1900))

// //13
// function sort(numb1,numb2,numb3) {
//     let a = [numb1,numb2,numb3].sort((a,b)=>b-a)
//     return a

// }
// console.log(sort(100,40,55))

// //14
// function Status (crewStatus, computerStatusCode, shuttleSpeed) {
    


//         if (crewStatus === true) {
//             console.log("Crew Ready")
//         } 
        
//         else if(crewStatus===false){
//             console.log("Crew Not Ready")
//         }
   

//         if (computerStatusCode==200) {
//         console.log( "Please stand by. Computer is rebooting.")
//         }

//         else if (computerStatusCode==400)  {
//         console.log("Success! Computer online")
//         }  

//         else if (computerStatusCode!==200 && computerStatusCode!==400 ) {
//         console.log("ALERT: Computer offline!")
//         }
  

//         if (shuttleSpeed>17500) {
//             console.log("ALERT: Escape velocity reached!")
//         }
//         else if (shuttleSpeed<8000) {
//             console.log( "ALERT: Cannot maintain orbit!")
//         }

//         else if (shuttleSpeed<17500 || shuttleSpeed>8000) {
//             console.log("Stable speed!")
//         }
//     }

// Status(true,400,17600)
// Status(false,300,17400)
// Status(false,200,400)

// //15

// function string (color) {

//     switch (color) {
//         case "red":
//             console.log("Red is the color of danger")
//         break;
//         case "orange":
//             console.log("Red is the color of danger")
//         break;
//         case "yellow":
//             console.log("Yellow is the color of sunshine")
//         break;
//         case  "green":
//             console.log("Green is the color of nature")
//         break;
//         case "blue":
//             console.log("Blue is the color of the sky")
//         break;
//         case "purple":
//             console.log("Purple is the color of royalty")
//             break;    
//         default:
//             console.log("Invalid color")
//         break;
// }
// }

// string("green")

let fox = ['Django', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Titanic']

let movies = []

//remove and add django
let django = fox.shift()
console.log (fox)

movies.unshift(django)
console.log (movies)

//add monday
fox.unshift('Monday')
console.log (fox)

//remove and add titanic
let titanic = fox.pop ()
movies.push (titanic)
console.log (fox)
console.log (movies)

//sunday
fox.push ('Sunday')