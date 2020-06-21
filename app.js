// CHAPTER 21 -25 

// // Task 1
// var firName = prompt("Enter The First Name")
// var lasName = prompt("Enter The Last Name")
// alert("Welcome " + firName + " " + lasName)

// // Task 2
// var favMobile = prompt("Enter Your Favourite Phone Name")
// favMobile = favMobile.length
// document.write("The Length Of Your Phone Is" +favMobile)

// // Task 3
// var conName = "Pakistan"
// document.write("String : " + conName + "<br>")
// document.write("The Index Of N Is : " + conName.indexOf("n"))

// // Task 4
// var name = "Hello World"
// var names = name.lastIndexOf("l")
// document.write("String " + name + "<br>")
// document.write("Last Idex OF L is : " + names)

// // Task 5
// var country = "Pakistani"
// var cone = country.charAt(3)
// document.write("The Character At 3rd Index Is : " + cone)

// // Task 6
// var firName = prompt("Enter The First Name")
// var lasName = prompt("Enter The Last Name")
// var third = firName.concat(lasName)
// alert("Welcome : " + third)

// // Task 7
// var city1 = "Hyderabad"
// var replace = city1.replace("Hyder", "Islam")
// document.write("City : " + city1 + "<br>")
// document.write("After Replacement : " + replace)


// // Task 8
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var replacing = message.replace(/and/g, "&")
// document.write("Before Replacement : " + message + "<br>")
// document.write("After Replacement : " + replacing)

// // Task 9
// var str = "472"
// var replacing = str.replace("472", 472)
// document.write("String : " + str + "<br>")
// document.write("Number : " + replacing)

// // Task 10
// var inp1 = prompt("Enter The Words")
// var uppercase = inp1.toUpperCase()
// document.write("User Input : " + inp1 + "<br>")
// document.write("Upper Case : " + uppercase)

// // Task 11
// var enter = prompt("Enter Your Words")
// var first = enter.slice(0, 1)
// first = first.toUpperCase()
// var second = enter.slice(1)
// second = second.toLowerCase()
// document.write("Before Title Casing : " + enter + "<br>")
// document.write("After Title Casing : " + first + "" + second)

// // Task 12
// var num = "35.56"
// num4 = num.replace(".", "")
// document.write("number : " + num)
// document.write("result : " + num4)



// // Task 14
// var bakery = prompt("Enter The Item You Want")
// var firstChar = bakery.slice(0, 1);
// var secondChar = bakery.slice(1);
// firstChar = firstChar.toUpperCase()
// secondChar = secondChar.toLowerCase()

// var bakery = firstChar + secondChar;

// var A = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"]
// for (var i = 0; i < A.length; i++) {
//     if (A[i] === bakery) {
//         alert("The Item Has Found")
//     } else {
//         alert("Sorry We Dont Have This Item")
//     }
// }


// // Task 15
// var entpass = prompt("Enter The Password")
// var num = entpass.slice(0, 1)
// var char = entpass.charCodeAt(0)
// var num1 = entpass.length
// if ((num >= 0 && num <= 9) || num1 < 6) {
//     alert("Enter A Valid Password")
// }

// // Task 16
// var university = "University of Karachi";
// for (i = 0; i < university.length; i++) {
//     document.write(university[i] + "<br>")
// }

// // Task 17
// var enterval = prompt("Enter Your Words")
// enterval = enterval.slice(-1)
// document.write("Last Character Of Input Is : " + enterval)

// // Task 18
// var myText = "the quick brown fox jumps over the lazy dog"
// document.write("Text : " + myText)
// myText = myText.
// console.log(myText)





// CHAPTER 26-30
// // Task 1
// var inp1 = prompt("Enter A Positive Integer")

// if (inp1 >= 0) {
//     var inp2 = Math.round(inp1)
//     var inp3 = Math.floor(inp1)
//     var inp4 = Math.ceil(inp1)
//     document.write("Number : " + inp1 + "<br>")
//     document.write("Round : " + inp2 + "<br>")
//     document.write("Floor : " + inp3 + "<br>")
//     document.write("Ceil : " + inp4 + "<br>")
// } else {
//     alert("Kindly Refresh The Page And Enter Correct Positive Integer")
// }

// // Task 2
// var inp1 = prompt("Enter A Negative Integer")

// if (inp1 < 0) {
//     var inp2 = Math.round(inp1)
//     var inp3 = Math.floor(inp1)
//     var inp4 = Math.ceil(inp1)
//     document.write("Number : " + inp1 + "<br>")
//     document.write("Round : " + inp2 + "<br>")
//     document.write("Floor : " + inp3 + "<br>")
//     document.write("Ceil : " + inp4 + "<br>")
// } else {
//     alert("Kindly Refresh The Page And Enter Correct Negative Integer")
// }

// // Task 3
// var entnum = prompt("Enter The Negative Num To Get Its Abolute Value")
// var abs = Math.abs(entnum)
// document.write(abs)

// // Task 4
// var radDice = Math.random() * 7
// var flr = Math.floor(radDice)
// if (flr === 0) {
//     document.write("The Random Dice Value Is : Your Dice Fell Off The Ludo Table")
// } else {
//     document.write("The Random Dice Value Is : " + flr)
// }

// // Task 5
// var hed = prompt("Enter Head User Name")
// var tai = prompt("Enter Tails User Name")
// var tossRad = Math.random() * 2
// var tossflr = Math.floor(tossRad)
// if (tossflr === 0) {
//     alert("Heads " + hed + " Win The Toss")
// } else {
//     alert("Tails " + tai + " Win The Toss")
// }
// // Task 6
// var ranVal = Math.random() * 100
// var FloVal = Math.floor(ranVal)
// document.write("The Random Num B/W 1 To 100 : " + FloVal)

// // Task 8
// var radVal = +prompt("Enter The Number Between")
// var radMan = Math.random() * 11
// var radflr = Math.floor(radMan)
// if (radflr === radVal) {
//     alert("Your Number Is Equal To The Computer Number")
// } else {
//     alert("Try Again")
// }



// CHAPTER 31-34
// // Task 1
// var a = new Date();
// document.write(a)

// // Task 2
// var da = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var mon = new Date();
// var dat = mon.getMonth()
// var namoftod = da[dat]
// document.write(namoftod)

// // Task 3
// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var day = new Date();
// var neDate = day.getDay()
// var naOfDay = dayNames[neDate]
// var another = naOfDay.slice(0, 3)
// alert(another)

// // Task 4
// var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var day1 = new Date();
// var newDate = day1.getDay()
// var OfDay = dayName[newDate]
// if (OfDay === "Sunday" || OfDay === "Saturday") {
//     document.write("Its A funday")
// } else {
//     document.write("Its A Regular Day")
// }

// // Task 5
// var date = new Date()
// var myDate = date.getDate()
// if (myDate <= 15) {
//     document.write("First Fifteen Days Of The Month")
// } else {
//     document.write("Last Fifteen Days Of The Monts")
// }
// Task 6

// // Task 7
// var tim = new Date()
// var mytim = tim.getHours()
// if (mytim <= 12) {
//     document.write("Its AM")
// } else {
//     document.write("Its PM")
// }

// // Task 8
// var laterDate = new Date("December 31, 2020")
// document.write("Later Date : " + laterDate)

// // Task 9
// var firRam = new Date("June 18 , 2015")
// var an = firRam.getTime();
// var today = new Date();
// var todram = today.getTime();
// var diff = todram - an
// var diffday = diff / (1000 * 60 * 60 * 24)
// var flrdiff = Math.floor(diffday)
// document.write(flrdiff + " days have passed since 1st Ramadan, 2015")

// // Task 10
// var firRa = new Date("January 1, 2015")
// var an = firRa.getTime();
// var tod = new Date("December 5 , 2015");
// var todr = tod.getTime();
// var differ = todr - an
// var diffdays = differ / (1000 * 60)
// var flrdiffs = Math.floor(diffdays)
// document.write("On Refrence Day " + tod + "  " + flrdiffs + " seconds had passed since beginning")

// // Task 11
// var curr = new Date();
// var cur = new Date();
// cur = cur.getHours() - 1;
// document.write(curr + "<br>")
// document.write(cur)

// // Task 13
// var age = +prompt("enter Your Age")
// var as = new Date()
// var eg = as.getUTCFullYear();
// var h = eg - age
// document.write("Your Date Of Birth Is " + h)

// // Task 14
// var nam = prompt("Enter Your Name")
// var mon = prompt("Enter The Month Of Your Bill")
// var charg = +prompt("Enter The Used Unit")
// var uni = 16
// var late = 350
// var payable = (uni * charg)
// var nonpayable = payable + late
// document.write("K - Electric Bill" + "<br>" + "<br>" + "<br>")
// document.write("Customer Name : " + nam + "<br>")
// document.write("Month : " + mon + "<br>")
// document.write("Number Of Units : " + charg + "<br>")
// document.write("Price Of Each Unit : " + uni + "<br>")
// document.write("Net Amount (Within Due-Date) : " + payable + "<br>")
// document.write("late Payment Surcharge : " + late + "<br>")
// document.write("Gross Amount (After Due-Date) : " + nonpayable + "<br>")





// CHAPTER 35-38

// Task 1
// function currTim() {
//     var curTim = new Date();
//     document.write(curTim)
// }
// currTim()

// // Task 2
// function greet() {
//     var ent1 = prompt("Enter Your First Name")
//     var ent2 = prompt("Enter Your Second Name")
//     alert("Welcome " + ent1 + " " + ent2)
// }
// greet()

// // Task 3
// function addTwo(entNum1, entNum2) {
//     var entNum1 = prompt("Enter The 1st Number")
//     var entNum2 = prompt("Enter The 2nd Number")

//     return (entNum2 + entNum1)
// }
// alert(addTwo())

// // Task 4
// function calc(nm1, opr, nm2) {
//     if (opr === "+") {
//         return nm1 + nm2
//     } else if (opr === "-") {
//         return nm1 - nm2
//     } else if (opr === "*") {
//         return nm1 * nm2
//     } else if (opr === "/") {
//         return nm1 / nm2
//     }

// }
// alert(calc(5, "-", 6))

// // Task 5

// function factorialize(num) {
//     if (num < 0)
//         return -1;
//     else if (num == 0)
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
// }
// console.log(factorialize(5))

// // Task 7
// function call(start, end) {
//     var start = +prompt("Enter 1st Number")
//     var end = +prompt("Enter 2nd Number")
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }
// document.write(call())

// // Task 8
// function form(hyp, bas, per) {
//     var bas = +prompt("Enter The Value Of Base")
//     var per = +prompt("Enter The Value Of Perpendicular")
//     var hyp = (bas * bas) + (per * per)
//     return hyp
// }
// alert("The Hypotenuse Is : " + form())

// // Task 9
// function tri(width, height) {
//     return width * height
// }
// document.write(tri(4, 5))

// // Task 11 
// function uppercase(str) {
//     var arr = str.split(' ');
//     var newarr = [];
//     for (var i = 0; i < arr.length; i++) {
//         newarr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
//     }
//     return newarr.join(' ');
// }
// document.write("EXAMPLE STRING : the quick brown fox" + "<br>")
// document.write("EXPECTED OUTPUT :" + (uppercase("the quick brown fox")))

// // Task12
// function word(string) {
//     var arrs = string.match(/\w[a-z]{0,}/gi);
//     var result = arrs[0];
//     for (var i = 1; i < arrs.length; i++) {
//         if (result.length < arrs[i].length) {
//             result = arrs[i];
//         }
//     }
//     return result;
// }
// document.write("EXAMPLE STRING : Web Development Tutorial" + "<br>")
// document.write("EXPECTED OUTPUT : " + (word('Web Development Tutorial')));