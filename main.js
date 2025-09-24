//task1
var age=28;
if(age>18)
    document.writeln("You are an adult");

document.writeln("</br></br>");

//task2
var score=45;
if(score<=50)
    document.writeln("You failed the test");

document.writeln("</br></br>");

//task3
var  name = "John";
if(name =="John")
    document.writeln( "Hello, John");

document.writeln("</br></br>");

//task4
var  day = "Monday";
if(day !="Saturday" && day !="Sunday" )
    document.writeln( "It's a weekday");

document.writeln("</br></br>");


//task5
var  num = 4;
if(num%2==0)
    document.writeln( "The number is even");

document.writeln("</br></br>");


//task6
var char = 'a';
if(char.length==1 && char.match(/[a-z]/i))
    document.writeln( "It's a letter");


document.writeln("</br></br>");

//task7
var  list = [1, 2, 3];
if (Array.isArray(list)) 
 document.writeln("It's an array");

document.writeln("</br></br>");

//task8
var x = 5;
if (x>0) 
 document.writeln("y is a positive number");

document.writeln("</br></br>");


//task9
var x = -5;
if (x<0) 
 document.writeln("y is a negative number");

document.writeln("</br></br>");

//task10
var  z = 9;
if (z%3==0) 
 document.writeln("z is a multiple of 3");


document.writeln("</br></br>");


//task11
var GPA="A";
switch(GPA) {
     case "A" :
     case "a" :
         document.writeln("Your GPA is Excellent");
     break;
     case "B" :
     case "b" :
         document.writeln("Your GPA is Very Good.");
     break;
     case "C" :
     case "c" :
        document.writeln("Your GPA is Good");
        break;
     case "F" :
     case "f" : 
        document.writeln("Your GPA is Failed");   
}

document.writeln("</br></br>");


//task12
var month="August";
switch(month) {
     case "January" :
     case "December" :
     case "December" :
         document.writeln(month+" is a winter month");
     break;
     case "March" :
     case "April" :
     case "May" :
         document.writeln(month+" is a Spring month");
     break;
     case "June" :
     case "July" :
     case "August" :
         document.writeln(month+" is a Summer month");
        break;
     case "September" :
     case "October" :
     case "November" :
         document.writeln(month+" is a Autumn month");
}

document.writeln("</br></br>");


//task13
var  password = "mypassword123";
if(password.length>=8)
  document.writeln("Your password is strong");


document.writeln("</br></br>");

//task14
var email="admin@admicom";
var  password = "12345Admin";

if(email=="admin@admicom")
   {
    if (password =="12345Admin")
              document.writeln("Welcome");
    else        
        document.writeln("Incorrect password");
   }
else
      document.writeln("Incorrect email");


document.writeln("</br></br>");


//task15
document.writeln(Number.isNaN(11));
document.writeln("</br></br>");

document.writeln(Number.isNaN("19"));
document.writeln("</br></br>");

document.writeln(Number.isNaN("xyz"));
document.writeln("</br></br>");

document.writeln(Number.isNaN("17.5"));
document.writeln("</br></br>");

document.writeln(Number.isNaN("21F"));



