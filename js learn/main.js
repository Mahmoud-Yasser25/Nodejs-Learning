// (print codes)

// print in html using js (html=document)
document.write('java script');
// print in console using js
console.log('js console');
// popup on the screen but dangerous and less used because it doesn't show any of the html content until the user presses ok on the popu[]
// window.alert('1st alert do you accept?')



// select something 

document.querySelector('h1').style.color='red';
document.querySelector('h2').style.backgroundColor='blue';

// document - console - window

// we can write html tag in js file using document.write and don't forget ' '
document.write('<h3>written in js file</h3>');
// code in console shows error text
console.error('error test in js');
// code in window makes the page starts with print page
// window.print();
// window has all the things or events you can do in js so we can write window. at the start of any code literally but we don't need to as it is known that we are working on the browser window
window.console.error('made by window.console.error');
window.document.write('<h4>written in js file using window.document</h4>');
// like we said we can write window. at the start of any code but we don't need to and that applies to events like print() and alert()
//print();
//alert();('made without window.');


/* we should pay attention to order of our code as the compiler starts from the beginning
so we have to write those codes of styling after we wrote the codes to make h3 and h4 in js */
document.querySelector('h3').style.color='purple';
document.querySelector('h4').style.color='violet';




// primitive data types in js are string-number-boolean-null(object)-undefined 
document.write(typeof "mk");
document.write(typeof 10);
// there is no float-double data types all are number
document.write(typeof 1.5);
document.write(typeof true);
// typeof null will be object which we can consider a bug in js but not actually a bug
document.write(typeof null);
// undefined data type is when we see the type of a variable that we didn't define or a variable we defined without assigning value to it
document.write(typeof j);
let f;
document.write(typeof f);


// to find the error in large code of js we use console in our browser will show us the error with the exact line
// any code written after an error won't work but any one before will work
document.write('<p> to find the error in console </p>');
document.write('<p> to find the error in console </p>');
document.write('<p> to find the error in console </p>');
document.write('<p> to find the error in console </p>');
document.write('<p> to find the error in console </p>');


/* automatic semicolon insertion: we can write code without semicolon in js as it is automatically added at the end of each line
 but we don't do that as we may write 2 or more codes in the same line so we should separate them by semicolon
 but the main reason is whaen the file become .zip file the codes become on the same lines so will make errors and we don't know what's wrong */
 // note: when using document.write 2 times after each other it writes the 2 sentences on the same line in our webpage 
 document.write('without semicolon');
 document.write(' 2 codes on the same line');document.write('separates them a semicolon');


// how to make a variable (var-let-const)
// the difference between var-let  and const is that var and let firstly you can change the value of the variable but const you can't second we can declare the variable using var and let and then initialize it's value later but const we have to assign a value to the variable at the same line of declaration or there will be error
// the difference between var and let they are similar but var we can declare it then declare it again not just change its value which is dumb but let we can't do that 
// we use let most of the time
var name = 'mahmoud';
var n;
n = 'ali';
console.log(name);
console.log(n);

let age = 21;
let a;
a = 50;
console.log(age);
console.log(a);

const gender = 'm';
console.log(gender);



// concatenation by 2 ways
// the 2nd way is faster take care of spaces and they are not single quotation they are back tick
console.log('my name is '+ name + ' and my age is '+ age);
console.log(`my name is ${name} and my age is ${age}`);

// arithmetic 
let num1 = 5;
let num2 = 4;
console.log(num1 + num2 );
console.log(num1 - num2 );
console.log(num1 * num2 );
console.log(num1 / num2 );
console.log(num1 % num2 );
// ** means power
console.log(num1 ** num2);
// num2 will be string here due to concatenation
console.log("number" + num2);

// if the increment or decrement before the variable it has changed then printed if it is after so it will print then change the value
console.log(++num1);
console.log(num2--);
console.log(num2);

// js changes the data type of string into number if the arithmetic sign is - * / or any thing except + as it does concatenation
console.log('5'+'4');
console.log('5'-'4');
console.log('5'*'4');
console.log('5'**'4');
console.log('5'/'4');
console.log('5'%'4');

// if we want to change the data type to number we use + or - before the value we want to change its type and this applies to string - boolean - null - undefined

console.log(+'5'+ +'4');
// - changes the type to number but makes it negative
console.log(-'5'- -'-4');
// if a string of characters like ahmed here when it changes to number it becomes Nan which is abbreviation for not a number
console.log(+'ahmed'+ +'4');
// in boolean when true changes to number becomes 1 and false becomes 0
console.log(+true);
console.log(+false);
// in null when changes to number it becomes 0
console.log(typeof +null);
console.log(+null);
// in undefined when it changes to number it becomes NaN (not a number)
console.log(typeof +undefined);
console.log(+undefined);

// other ways to change string and other data types to number
// using Number object acts as + before a string and has a disadvantage as + that it can't change a string of number and words after it into that number it changes into NaN as words do
console.log(Number("4.2"));
console.log(Number(true));
console.log(Number(null));
console.log(Number("4 mahmoud"));
console.log(+"4 mahmoud");
// parseInt function acts as Number object but with string only not other data types
// has a problem changes to int always 4.2 --> 4
// if the word before the number it acts as Number and will be NaN
console.log(parseInt("4 mahmoud"));
console.log(parseInt("mahmoud 4"));
console.log(parseInt("4.2 mahmoud"));
console.log(parseInt(true));
console.log(parseInt(null));
console.log(parseInt(undefined));
// parseFloat like prseInt but solves the integer problem but other problems stay the same
console.log(parseFloat("4 mahmoud"));
console.log(parseFloat("mahmoud 4"));
console.log(parseFloat("4.2 mahmoud"));
console.log(parseFloat(true));
console.log(parseFloat(null));
console.log(parseFloat(undefined));

// Number is object and has functions
// some of these functions like max value or min value are the max and min values in java script you cant add to the max or subtract from the min
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
// any number between them is safely used in js
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
// important function isInteger checks if the entered is integer or not 
// doesn't check numbers does check integers so float numbers return false
console.log(Number.isInteger(4));
console.log(Number.isInteger("mahmoud"));
console.log(Number.isInteger(4.2));
// checks if the value is Nan --> true otherwise --> false
console.log(Number.isNaN(4));
console.log(Number.isNaN("mahmoud"));
console.log(Number.isNaN(+"mahmoud"));
console.log(Number.isNaN("mahmoud"+5));
console.log(Number.isNaN("mahmoud"-5));


// Math object --> some functions
console.log(Math.abs(-4));
console.log(Math.sqrt(9));
console.log(Math.pow(2,3));
console.log(Math.max(-4,100,5,4,6,7,8));
console.log(Math.min(-4,100,5,4,6,7,8));
// round means approximately rounds to the nearest integer
// ceil --> up   9.1 changes to 10
// floor --> down   9.9 changes to 9 
console.log(Math.round(9.5));
console.log(Math.ceil(9.1));
console.log(Math.floor(9.9));
// Math object --> some properties (properties written in capital)
// euler value and pi value
console.log(Math.E);
console.log(Math.PI);

// a way to take input from user and a small program that calculates zakah
/*let amount = window.prompt("enter the amount");
let zakah = amount * 0.025;
document.write(" the zakah percentage is "+zakah);*/

// we can convert number into string using the following: double quotation - string() object - tostring function
let p = 100;
console.log(typeof (String(p)));
console.log(typeof (p.toString()));
// .. as one . will give error as the compiler think we are trying to write float number
console.log(typeof (100..toString()));
// or we can use ( ) instead of ..
console.log(typeof((100).toString()));



// some functions for string

// repeat function it repeats my string by the value i have written
console.log("mahmoud ".repeat(5));
// note that string is sequence value so string like ali is saved 'a' 'l' 'i' and we can know the length of this sequence using .length
// space is calculated in the length of course
console.log("mahmoud".length);
console.log("mahmoud    ".length);
// we can access the string (access a specific character in the string using index or using charAt() function 
// note charAt function takes index between () and note that index starts from 0 not 1
console.log("mahmoud"[0]);
console.log("mahmoud"[1]);
console.log("mahmoud"[6]);
console.log("mahmoud"[10]);
// the difference between access using [] and using charAt is that when we put index that is not available in [] gives us undefined while in charAt function doesn't give us any thing
console.log("mahmoud ".charAt(0));
console.log("mahmoud ".charAt(1));
console.log("mahmoud ".charAt(6));
console.log("mahmoud".charAt(10));
// we can search for a character in the string(search for its index) using indexOf() or lastIndexOf() functions
// note those functions return the index of the first time the character appears only
console.log("i love java".indexOf("a"));
// we can specify the index in which the function starts to search and that benefits us when like "a" here is repeated and i don't want the index of first "a" i want the second one so i started searching from an index after the first one
console.log("i love java".indexOf("a",9));
// we can search for a word not chracter and when the function sees that word it returns the index of the first character at this word
// note if the word doesn't exist it will return -1
console.log("i love java".indexOf("java"));
console.log("i love java".indexOf("kimo"));
// lastIndexOf is the same as indexOf the only change is that it searches from the right 
// but note very important that you know the index stay the same the "i" here is still at index 0 but the difference that it searches from the right so if another "i" appears before this "i" from the right it will show its index
console.log("i love java".lastIndexOf("a"));
// slice function it slices my string into parts
// we can leave the parameter empty so slices all the sentence (doesn't slice give me the sentence complete) - we can specify start - we can specify start and end but note that the end index will not be included so if i write the end 8 it will show to the 7th index
console.log("i love java".slice());
console.log("i love java".slice(2));
console.log("i love java".slice(1,8));
// split function splits the sentence into words and put them into array (split means there is , between them)
// if the parameter empty it won't split it will put the whole sentence in array
console.log("mahmoud yasser abd elrazek".split());
// if the parameter a character it will split using this character so this character won't be written in splits but it will be the point of split
console.log("mahmoud yasser abd elrazek".split(" "));
console.log("mahmoud yasser abd elrazek".split("a"));
// if we put "" without space it will react as it is a character and will split each character
console.log("mahmoud yasser abd elrazek".split(""));
// if we put a character that doesn't exist it is like we didn't put anything so no split
console.log("mahmoud yasser abd elrazek".split("_"));
// we can specify the number of splits by this character so i want 3 splits using " " will show mahmoud, yasser, abd
// note if we put number more than the number that the character appears it will split the number it appears only so if 4 spaces and i specified 5 it will split 4
console.log("mahmoud yasser abd elrazek".split(" ",3));
console.log("mahmoud yasser abd elrazek".split(" ",5));


// different ways to slice your string 
// the difference between slice function and substring function is that slice function can use negative values for index as if we read from write the first letter will be -1 then -2 and so on while substring won't give me an answer
console.log("i love java script".slice(2,6));
console.log("i love java script".slice(-6,-4));

console.log("i love java script".substring(2,6));
console.log("i love java script".substring(-6,-4));
// the difference in substr function is that its first parameter is the index we start from but the second parameter is the number of characters we want to show
// and it recognizes the negative values for an index so here start from index 2 (l) and show 6 characters love j
console.log("i love java script".substr(2,6));
console.log("i love java script".substr(-6,2));

// like we said before we can search in js using indexOf() and lastIndexOf()
console.log("i love java script".indexOf("a",9));
console.log("i love java script".lastIndexOf("a",9));
// includes is another way to search but it returns true if the letter exists and false if it doesn't
// we can specify in the 2nd parameter from what index we want to start our search and o is before index 4 so it will return false
console.log("i love java script".includes("o"));
console.log("i love java script".includes("o",4));
// just to remember the -ve index starts from the right
console.log("i love java script".includes("o",-1));
// startsWith() is another way for search returns true or false
// we can specify in the 2nd parameter from what index the string starts with that letter
console.log("i love java script".startsWith("i"));
console.log("i love java script".startsWith("i",7));
console.log("i love java script".startsWith("j",7));
// endsWith() is like startsWith() but for the end
// there is a huge difference between endsWith() and all the other search functions that the 2nd parameter takes length not index so 8 here means that t or j in the code below it is the 8th letter in the string (technically that it is the end of a string of length 8)
console.log("i love java script".endsWith("t"));
console.log("i love java script".endsWith("t",8));
console.log("i love java script".endsWith("j",8));



// Arrays in js
let names = ['mahmoud', 'ahmed', 'ayman', 'ibrahim'];
console.log(names);
// to access a certain index in the array
console.log(names[0]);
names[0]= 'hany';
names[1]= 'hany';
names[2]= 'hany';
names[3]= 'hany';
console.log(names);
// length-1 is the number of the last index as we started the indices from 0 so if we write the array name and put [array name.length-1] as an index it will give me the access to the last element in my array
console.log(names.length);
console.log(names.length-1);
console.log(names[names.length-1]);
// nested array and different data types
let calc = [1,2,3,'mahmoud',true,null,undefined];
console.log(calc);
// nested array if i want to print 8
// note that the array inside an array is an element so it must be separated from the element before using comma,
let nom = [1,2,3,[4,5,6,[7,8,9]]];
console.log(nom[3][3][1]);
// to add an element to the array 
// from the end we use push() function from the start we use unshift() function
// of course we can add more than one element
let the_names = ['mahmoud','ismail','kamal','ali'];
the_names.push('ayman', 'hamada');
console.log(the_names);
the_names.unshift("mama", 'baba');
console.log(the_names);
// to remove an element from the array
// from the end we use pop() function from the start we use shift() function
the_names.pop();
console.log(the_names);
the_names.shift();
console.log(the_names);
// we can erase more than one item by using the functions multiple times
the_names.pop();
the_names.pop();
console.log(the_names);
the_names.shift();
the_names.shift();
console.log(the_names);
// if we printed pop() or shift() function it will firstly remove element from the array then second it will save the element it just removed and print of course as we printed the function
// note only print the last element we just removed not all elements we removed using that function
// note it will remove first then print that element just removed (just removed!!!!)
// note it is not just a print function the pop() or shift() have done their job first then print that element that has been removed
let the_students = ['kimo', 'hany', 'fady', 'mohanad']
console.log(the_students.pop());
console.log(the_students);
console.log(the_students.shift());
console.log(the_students);

// splice() function removes elements from the array but from any place unlike pop() and shift() functions which are from the start or end
// it takes parameters first parameter is the index you want to start removing from - second parameter is the number of elements you want to remove - thirs parameter is rhe elements you want to add to replace the removed elements
// we can print splice function like pop() and shift() and will print the just removed elements after it did its job and removed those elements so if you print it it will remove first as it is its job and then print the removed ones
let array_names = ["ali",'gamal','faten','farid','ismail','kamal','mahmoud','ayman'];
array_names.splice(1,2);
console.log(array_names);
console.log(array_names.splice(0,1,'mohamed','mido'));
console.log(array_names);
array_names.splice(0,0,'makram');
console.log(array_names);

// slice() function does take slice fron the array by using index but note the second parameter is the index we end the slice but it is not included like the slice function does in string too
// slice() function does not effect the array itself so it stays the same but we print the slice function to see the slice we want and it does the same to a normal string too
let array_names2 = ['ahmed','mido','fady','mohamed','ahmed'];
console.log(array_names2.slice(1,3));
console.log(array_names2.slice(-3,-1));
// if -1,-3 instead of -3,-1 it won't show anything as it sees from left to right normally we use -v index but still from left to right
console.log(array_names2.slice(-1,-3));
console.log(array_names2);


// we can search in array like we used to in string using indexOf() and lastIndexOf() functions
// we can specify the index we will start the search from and if the element isn't there it will give -1
console.log(array_names2.indexOf('ahmed'));
console.log(array_names2.indexOf('ahmed',1));
console.log(array_names2.indexOf('mido',2));
console.log(array_names2.lastIndexOf('ahmed'));
console.log(array_names2.lastIndexOf('ahmed',3));
// for search we can use includes() function too like we used to do in string and we can specify the start of the search
console.log(array_names2.includes('mido'));
console.log(array_names2.includes('mido',2));
// the -ve index is from the right but still the search is from left to right
console.log(array_names2.includes('mido',-1)); // false
console.log(array_names2.includes('mido',-4)); // true


// we can reverse the array using reverse() function
// note reverse function affects the array itself not just print the reverse 
let array_names3 = ['ahmed','mido','fady','mohamed','ahmed'];
let array_no = [1,4,3,9,6,5];
console.log(array_names3.reverse());
console.log(array_names3)

// we can sort an array alphabetically or numbers ascendingly using sort() function
// note sort function affects the array itself not just print the sorted 
console.log(array_names3.sort());
console.log(array_no.sort());

// concatenation in arrays can be done by 2 ways the 1st way using + symbol 
// the problem with this method is that it converts the arrays into string
array_conc= array_names3 + array_no;
console.log(array_conc);
// the 2nd way is using concat function so they stay arrays and you can concat other things to them too as the following example
console.log(array_names3.concat(array_no,'mona',140));
// join() function is used to convert an array to string and can take a parameter which is the symbol that will be between the elements instead of comma, or leave it empty so it can be a comma,
console.log(array_names3.join('   #   '));







//comparison in js is done by using comparison symbols like == which means is that value equals to the other
// prompt is used to take input from user (can be window.prompt())
// we used toLowerCase() function so if the user enters a capital character accidently it won't matter in the comparison of emails
// we used trim() function so if the user enters spaces before or after his email accidently it won't affect our comparison of emails

/*let email = 'mahmoud@gmail.com';
let ask_email = prompt('enter your email');
console.log(ask_email.toLowerCase().trim() == email);*/

// more in comparison
// == and the other symbols of comparison don't compare the data type they just compare the value so number can be equal to string if they have the same value if we want to compare the data type too we use === instead of == 
console.log(5 == '5');
console.log(5 > '4');
console.log(5 === '5');
// other symbols for comparison <= , >= , > , < , != (not equal)
console.log(5 > 4);
console.log(5 < 4);
console.log(5 >= 5);
console.log(5 <= 9);
console.log(5 != 3);
console.log(5 != 5);
// symbols used in comparison so we have more than one condition &&(and) , ||(or)
let brand = 'samsung';
let size = 50;
let price = 10000;
// if we use && (and) all conditions should be true for the comparison to return true
console.log(size >= 50 && price < 12000 && brand == 'samsung');
console.log(size >= 50 && price < 9000 && brand == 'samsung');
// if we use || (or) if only one condition is true so the comparison gives you true but if all conditions are false then the comparison will return false
console.log(size >= 50 || price < 12000 || brand == 'samsung');
console.log(size >= 50 || price < 9000 || brand == 'samsung');
console.log(size >= 60 || price < 9000 || brand == 'toshiba');



// if conditional statement
// if takes condition and if the result of this condition euals true the code between the {} operates
let num5 = 10;
let num6 = 12;
if(num6 > num5){
    console.log('num6 is bigger than num5');
}
// we can add (else if) when we have more than 1 propability in our condition 
// the code after else operates when all the previous conditions' results are false

let role = 'admin';
if(role.toLowerCase().trim() == 'admin'){
    document.write(" you can create,update and delete");
}
else if(role.toLowerCase().trim() == 'moderator'){
    document.write(' you can update and delete');
}
else{
    document.write(' you are user you can only read');
};

// another example 
// we didn't need to put another condition like st_res >=80 && st_res < 90 in this example because the first condition to be true the code will operate and only this code so we don't have to worry about more than 1 code operates as only 1 of them operates

/*let st_res = prompt('enter your grade');
if(st_res >= 90){
    console.log('excellent');
}
else if (st_res >= 80){
    console.log('very good');
}
else if (st_res >= 70){
    console.log('good');
}
else if (st_res >= 50){
    console.log('acceptable');
}
else{
    console.log('fail');
}*/

// another way to write if statement in js
let st_res2 = 90;
st_res2 >= 90? console.log("Excellent") 
: st_res2 >= 80? console.log('very good')
: st_res2 >= 70? console.log('good')
: st_res2 >= 50? console.log('acceptable')
: console.log('fail');

// we can write the code of the other way of if statement all on the same line

/*let st_res3 = prompt("enter your grade");
st_res3 >= 90? console.log("Excellent") : st_res3 >= 80? console.log('very good'): st_res3 >= 70? console.log('good'): st_res3 >= 50? console.log('acceptable'): console.log('fail');*/

// we can use the second way of writing if statement in assigning the value that will result from the if statement into a variable
// it is equal to writing if statement by the 1st way or even the second way and write let variable = value under each if and condition
let age2 = 18;
let authority = age2 > 18? 'welcome user' : age2 == 18? 'you are 18 now, welcome' : 'you are so young';
console.log(authority);


// switch conditional statement
// switch is like if statement it plays the same role as a conditional statement but it differs as it is used only in case of == comparison ,so it can not be used for other comparisons as > < >= <= !=
// default is like the last else in if statement as if nothing of the cases are true then the code in default will operate
let role2 =  'editor';
switch(role2){
    case "admin": 
        console.log("you can create,delete and update");
        break;
    case "moderator":
        console.log("you can create and delete");
        break;
    case "editor":
        console.log("you can update only");
        break;
    default:
        console.log("hello user");

};
// break is used so when the case is true the code in this case operates and only this code so it won't operate the code of other cases ,so break makes switch be like if statement in this particular area
// while if we remove break if the case is true so it's code will operate but not alone as all cases' code below this case will operate too unlike if statement
let role3 =  'user m'
switch(role3){
    case "admin": 
        console.log("you can create,delete and update");
        
    case "moderator":
        console.log("you can create and delete");
        
    case "editor":
        console.log("you can update only");
       
    default:
        console.log("hello user");
};

// for loop
// loop is used to repeat my code for number of times
// for loop takes between brackets the start, the condition, and the increase or decrease of the counter and then the code between the {} will operate number of times according to your specifications between brackets
for(let i = 0 ; i <3 ; i++){
    console.log("hello world "+i);
};
// we can start the loop from a low number and increase it or we can start from a high number then decrease it
// here is the counter displayed descendingly as we decrease it
// we can increase or decrease by the amount we want so we can write i += 2 , i += 3 , i += 100, i-=100 , etc..... and of course we can initializa  the counter i with any value we want
for(let i = 10 ; i >= 0 ; i-=2){
    console.log(i)
};
// to know the uses for loop here is an example we can print the elements of an array one after each other using for loop and by putting the counter as the index for the array when printing as the counter's value increases it will print the next index and so on
// we used .length as we might do that to an array which we don't know its last index is what number
let names2 = ['mahmoud', 'ayman', 'ibrahim', 'ashour', 'faten'];
for(let i = 0 ; i < names2.length ; i++){
    console.log(names2[i]);
};
// here we print the elements of the array but backwards by initializing i as the lenght -1 of the array so if the length of the array equals 5 as here i will be 4 so it has the value of the last index so we can print backwards 
// and the condition is till i >= 0 so we can print the index of value 0 then stop and of course weused decrement here so the value of i decreases as we print the elements backwards
for(let i = names2.length-1 ; i>=0 ; i--){
    console.log(names2[i])
};

// nested loop
// here we used nested loop so a loop inside the 1st loop as the 1st loop prints the names of the cars one after each other in the cycle we put a code of another loop that will print the array of the models of the cars so in each cycle of the 1st loop a name of a car will be printed then the second loop operates so the models array will be printed then we go to the cycle after it and so on
// nested loop is used in database so it is important
let cars = ['Mercedes', 'BMW', 'Ferrari'];
let models = ['2021', '2022', '2023'];
let colors = ['black', 'blue', 'red'];
for( let i = 0 ; i < cars.length ; i++){
    console.log(`Car : ${cars[i]}`);
    for( let j = 0 ; j < models.length ; j++){
        console.log(`Models : ${models[j]}`);
    };
    for( let k = 0 ; k < colors.length ; k++){
        console.log(`Colors : ${colors[k]} `);
    };
};
// the same as the last example but more complicated example as we wanted to specify certain models and colors for each car not all models and colors
// so we put if condition as if i == index of a certain car it will operate the 2 for loops (models and colors) inside the if condition which prints some models and some colors so we can print some of them for each car
for( let i = 0 ; i < cars.length ; i++){
    console.log(`Car : ${cars[i]}`);

    if(i == cars.indexOf('Mercedes')){

        for( let j = 0 ; j < models.length ; j++){
             console.log(`Models : ${models[j]}`);
        };
        for( let k = 2 ; k < colors.length ; k++){
            console.log(`Colors : ${colors[k]} `);
        };
    }

    else if(i == cars.indexOf('BMW')){
        
        for( let j = 1 ; j < models.length ; j++){
           console.log(`Models : ${models[j]}`);
        };
        for( let k = 1 ; k < colors.length ; k++){
            console.log(`Colors : ${colors[k]} `);
        };
    }

    else if(i == cars.indexOf('Ferrari')){

        for( let j = 0 ; j < models.length-1 ; j++){
            console.log(`Models : ${models[j]}`);
        };
        for( let k = 0 ; k < colors.length-1 ; k++){
            console.log(`Colors : ${colors[k]} `);
        };

    }
};

// continue
// continue is written by this syntax (in if conditional statement) and it means that you want to skip what you written in the condition
// so here i want to skip all the indices of type number so i will skip 1,2,3,4 so they won't be printed
let names4 = ['mahmoud', 'gamal', 'ali', 'ibrahim', 'ahmed',1,2,3,4,'mohamed', 'ayman'];
for( let i = 0 ; i < names4.length ; i++){

    if(typeof (names4[i]) == 'number'){
        continue;
    }
    console.log(names4[i]);
};
// we have to write the continue first then the code we want to operate after skipping so here we wrote the printing code first so the whole array is printed including the numbers i wanted to skip
for( let i = 0 ; i < names4.length ; i++){

    console.log(names4[i]);
    if(typeof (names4[i]) == 'number'){
        continue;
    }
    
};
// example on that we can skip any thing in the array not only using type of and skip a whole type but we can specify like here we specified to skip ali
for( let i = 0 ; i < names4.length ; i++){

    if(names4[i] == 'ali'){
        continue;
    }
    console.log(names4[i]);
};
// here we specified to skip all but ali as we wrote != so we can skip any thing != ali
for( let i = 0 ; i < names4.length ; i++){

    if(names4[i] != 'ali'){
        continue;
    }
    console.log(names4[i]);
};
// we can write more than 1 continue so we can skip what we want
for( let i = 0 ; i < names4.length ; i++){

    if(typeof (names4[i]) == 'number'){
        continue;
    }
    if(names4[i] == 'ali'){
        continue;
    }
    console.log(names4[i]);
};
// we can specify more in the condition instead of using 2 continue
for( let i = 0 ; i < names4.length ; i++){

    if(typeof (names4[i]) == 'number' || names4[i] == 'ali'){
        continue;
    }
    console.log(names4[i]);
};

// break
// break is used to stop the operating of the code we write at a certain place or a certain index
// if we write the printing code after break so the index which we specified in the condition of break will not be included
for( let i =0 ; i < names4.length ; i++){
    if( names4[i] == 'ahmed'){
        break;
    }
    console.log(names4[i]);
};
// if we write the printing code before the break so the index which we specified in the condition of break will be included
for( let i = 0 ; i < names4.length ; i++){

    console.log(names4[i]);
    if(names4[i] == 'ahmed'){
        break;
    }
};

// while loop
// while loop is like for loop but the syntax changes as the initialization of the counter i is outside the brackets then the condition between brackets then the increment is in the body of the loop written after writing the code we want to apply the loop on
let i = 0;
while(i < 3){
    console.log('i is still less than 3');
    i++
};
// do while loop
// do while loop is like the other loops and as while loop the initialization of the counter outside the brackets the condition inside the brackets and the increment or decrement inside the bode of the loop after the code we apply the loop on

let w = 0;
do{
    console.log("do while loop test")
    w++
} while(w < 3);
// the main difference between do while loop and while loop is that do while loop the body of it operates at least once even if the condition is false
let t = 0;
do{
    console.log("do while loop test even if false")
    t++
} while(false);
console.log(t);

// function
// function is one of the most important concepts in programming it is used to reuse your code instead of eriting the code again
function calcAge(age3){
    let age_in_days = age3 * 365;
    console.log(age_in_days);
};
// in the first one we left the parameter empty so it gave us Nan but in the second one we put 25 as parameter and the function applied the code inside it
calcAge();
calcAge(25);
// another example
function calcTotal(price2,taxes,ads){
    let total = price2 + taxes + ads;
    console.log(`the total price of your product is ${total}`);
};
calcTotal(500,2,40);
// here the result is Nan as we left the ads empty so it is Nan which lead to Nan at the end instead we can put the parameter as 0
calcTotal(400,3);

// if we tried to use the variable total which is the result in our function calcTotal() it is not defined because of the scope as it is local variablw which is defined only inside the curly brackets of our function not outside it
// global variable is the variable outside the function so it is defined inside it and outside and can be used in both situations
/*console.log(total/2);*/

// so if we want to take the result of our function not print it but we want to take it to manipulate it put it in a variable do other stuff on it maybe do a mathematical equation on it add or subtract from it so we have that result outside the scope of the function only, we have to use return function
// the return function will return the value we put beside return so the value of this function is that value besides return so if we assign a function to a variable it is like assigning the result of the function to taht variable then we use this result print it, add on it, subtract, any thing
function calcAgeDays(age4){
    let age_in_days2 = age4 * 365;
    return age_in_days2;
};
// won't print as there is no printing code but the function returns the variable age_in_days2
calcAgeDays(32);
// so we can assign the function as the value of a variable
let day = calcAgeDays(32);
console.log(day);

function calcAgeHours(ageDays){
    age_in_hours = ageDays * 24;
    return age_in_hours;
};
// here we used the variable that carries the result from the 1st function as the parameter of the second function then assign the 2nd function in a variable and print it
let hour = calcAgeHours(day);
console.log(hour);
// of course we can put the function as the parameter without assigning it first to a variable as its value is the return value
let hour2 = calcAgeHours(calcAgeDays(32));
console.log(hour2);
// any code after return is not seen so we can write whatever we want after it and it won't affect or be seen at all
function calcAgeHours_TEST(ageDays){
    age_in_hours = ageDays * 24;
    console.log(age_in_hours)
    return age_in_hours;
    ngnfgnfgnfsvsdbvsdfbsfbsbsbsb
    return 100; snsfgffnfgnfgnfngdbdfbdfb
    tbtbdbdbdbdbfdbfdbdbdb
    rvfdbdsbfsbdsbsbsbwsbsb
};
// here it printed twice as there is a print code in the function itself and print code that we wrote here 
xx = calcAgeHours_TEST(5000)
console.log(xx);

// hoisting 
// in js the declaration of variables and functions is read before any other code which is different from other programming languages
// so in js we can print a variable which we didn't declare yet and we declare it after printing it and js will normally print it as it reads the declaration first before any other code
// note it read the declaration not the initialization so here it knows p2 but not the value of it so will print undefined
console.log(p2);
var p2 = 10;
// js sees the previous code like that 
/* var p2;
console.log(p2);
p2 = 10; */

// if we don't want the hoisting in variables we use let instead of var which is the main reason that let is made to prevent hoisting
// if we did the opposite here it will give us an error
let p3 = 11;
console.log(p3);

// the same thing with functions the declaration is read first so here we called the function before even declare it but it will work due to hoisting
hello();
function hello(){
    console.log('hello world');
};
// js sees the code like that 
/* function hello(){
    console.log('hello world');
};
hello(); */

// if we want to prevent that in functions we use expression function instead of declaration function which will be done using let too
// here we have to call the function after declaring it as we used let (expression function) if we did the opposite will give us an error
let welcome = function(){
    console.log("welcome user");
};
welcome();
// if we want to print the function we write the function with brackets normally but if we didn't write the brackets like that it will print the js code itself 
// and that in declaration or expression function both of them
console.log(welcome);


// scope and invoke 
// if a variable or a function is written in any block of code it should be local to this block of code and not read globally 
// here the variables pp and ss and function k give error when calling them outside the function hi() as they are local to it not global
function hi(){
    let pp = 3;
    var ss = 10;
    function k(){
        return(1);
    };
    console.log('hi');
};

/* console.log(pp);
   console.log(ss);
   console.log(k());*/
hi();

// but it should be like that in any block of code however in if(), for(), while(), do while() we find out that the variables we put in are global
// here we could call variable j and function m however they are in a block of code they are global
for(var j = 0; j < 10 ; j++){
    function m(){
        console.log("hello");
    };
   
};
console.log(j);
m();
// the solution for that is to write the variable using let instead of var and to write expression function instead of declaration function using let too
// and that is due to hoisting as the variables declared using var and the declation functions are all declared at the start which will make them global even if we put them local
for(let z = 0; z < 10; z++){
    let mm = function(){
        console.log('expression function');
    };
};
/* console.log(z);
mm(); */

// we can make a function that calls itself when making it and it is without a name so we can't call it again and it has a purpose
// its purpose is that if i have bunch of codes and put them in it what is the difference if i put them outside it and never use it as it is the same result as ican't call this function again and it callsitself on the spot one time?? the purpose is that if i have variables or function that i want them to be local and happen for one time only and not global so i put them in this self calling function
(function(){
    let s = 4;
    let k = 2;
    let kk = function(){
    };
    console.log(s);
    console.log(k);
})();
    /*console.log(s);
    console.log(k);*/ 

// quiz on hoisting ,scope and invoke understanding
// choose 1 or 0 or error
console.log(     x()    );
function x(){
    function y(){return 1;};
    return y();
    function y(){return 0;};
};
// the answer is 0 as there is local hoisting in the body of function x() so js sees the code like that
/*   

function x(){
    function y(){return 1;};
    function y(){return 0;};  //local hoisting as the functions declared first inside the main function
    return y();
};
console.log(     x()    );

*/

// parameters and arguments
// parameters are what we write between the function's brackets during fuction's declaration while arguments are what we write between fuction's brackets when calling the function so writing the values of the parameters is called arguments
// if the user left the arguments empty while the function has parameters if string it will give undefined if number will give Nan
function helloUser(name3){
    console.log(`hello ${name3}`);
};
helloUser(); // hello undefined

function ageCalculation(age5){
    console.log(age5 * 365);
};
ageCalculation(); // NaN

// to solve that problem as we can't leave it undefined or Nan we use default parameter so it appears instead of undefined or Nan when the user doesn't write an argument
function helloUser2(name4 = 'user'){
    console.log(`hello ${name4}`);
};
helloUser2(); // hello user
helloUser2('mahmoud');

function ageCalculation2(age6 = 0){
    console.log(age6 * 365);
};
ageCalculation2(); // 0
ageCalculation2(35);

// if we want to make a function which the user can put unknown number of arguments maybe infinite no. of arguments we can do that by making our parameter as an array
// here is an important example where the user can put any number of arguments and all of them will be stored in an array as the array can take infinite no. of elements
// and then we make a variable = 0 as we make for loop that adds each index in the array to the value of the variable and assign the new value in the variable again so we have the sum of the indices of the array stored in that variable so we have the sum of the numbers the user entered as arguments
function calcSum(  ...numbersFromUser  ){
    let result = 0;
    for(let i =0; i<numbersFromUser.length; i++){
        result += numbersFromUser[i];
    };
console.log(result);
}

calcSum(3,4,5,6,6,7,7);

// arrow function
// arrow function for now is like the expression function but easier in syntax
let arr_fun = () => {
    console.log('hello');
};
arr_fun();
// if we have only one code we can get rid of the {} and the code written after the => will be returned actually anything we put after => will be returned without even writing return or any code
let arr_fun2 = () => 1; // return 1
console.log(arr_fun2());
// if we have only 1 parameter we can remove the () of parameter but if we have more than 1 parameter we have to put ()
let arr_fun3 = num11 => 3*num11;
console.log(arr_fun3(6));
// if we have no parameter we can put () or _ instead
let arr_fun4 = _ => 'hi';
console.log(arr_fun4());

// object 
// if we have a website of car dealership and we have a new car to store it has properties as title, price, color, model do we have to make a variable for each and will be global and the properties won't be in one specific place if i want to access them when i am dealing with this specific car??
// instead we can make object of this car that will carry those properties and also carry methods or functions that we can access all of them using the object of this car
// in the properties of an object we can put any type of data string, number, array
let car = {
    title: 'BMW',
    price2: 500000,
    color: ['black', 'silver', 'red'],
    model: 2024,

    tax: function(){
        return 500000*0.02;
    }
};
console.log(car.title);
console.log(car.color[0]);
console.log(car.tax());

// nested object
// if the properties of an object can take any type of data as object is a type of data so it can be stored in a property
let user = {
    firstname: 'mahmoud',
    lastname: 'yasser',
    age7: '21',
    email: 'mahmoudyasser2828@gmail.com',
    active: true,
    phoneNumber: {
        first: '0121022114',
        second: '0112342343'
    },
    address2: {
        egypt: 'ibrahimia',
        uae: 'dubai'
    },
    
    isActive: function(){  
        if(user.active === true){ // when we want to usea property in the object to use it in a function inside it don;t forget that even inside the scope of the object you have to specify object.property
            return 'hello user';
        }
        else{
            return 'sorry you are not active';
        };
    },

    ageAppropriate: function(){
        if(user.age7 >= 18){
            return 'you can access';
        }
        else{
            return 'sorry you are under age';
        };
    },

}
// you can access property or function in an object by those 2 ways . or ['']
console.log(user.phoneNumber.first);
console.log(user['phoneNumber']['first']);

console.log(user.isActive());
console.log(user['ageAppropriate']());

// if we made an empty object without properties or methods or we want to add properties or methods on an existing object we use the same way of access
let user2 = {};
user2.firstname = 'kamal'
user2['lastname'] = 'hamada'
user2.hi = function(){
    return 'hi user'
};
console.log(user2.firstname);
console.log(user2.lastname);
console.log(user2.hi());

// we can make object with another way using keyword new
let user3 = new String();
console.log(typeof user3);

let user4 = new Object({
    firstname: 'ayman',
    lastname: 'ahmed',
    hellouser3: function(){
        return 'hello'
    }
});
user4['age'] = 22;
console.log(typeof user4);
console.log(user4.firstname);
console.log(user4.age);
console.log(user4['hellouser3']());

// this keyword
// this refers to the object that it is in
// here this refers to the object user5 instead of writing user5.firstname we wrote this.firstname where this refers to objrct user5
let user5 = {
    firstname: 'ahmed',
    getName: function(){
        return this.firstname;
    }
};
console.log(user5.getName());

// here we used this to refer to an object and there is no object so it refers to window as window is an object 
// we can use the functions of window using b as b = this and this refers to window and the same to this alone without using b
let b = this;
console.log(b);
console.log(b == window);
/*b.alert(); b.prompt("hi");*/
/*this.alert()*/


// since function is not an object so this will not refer to the function and acts as it refers to window 
function hi2(){
    return this;
};
console.log(hi2());

// use strict (it should be written at the start of the script not here)
// is used as js helps us with a small mistake that it applies the code even with that mistake like forgetting let when declaring a variable or using the same name for 2 parameters in a function
// in use strict mode js doesn't do that and returns error for any mistake the same happens with this keyword when using it in use strict mode where there is no object it won't refer to windows but when printing it it won't give an error it will give undefined

ff = 'kamal'; // it's ok because we are not using "use strict"
console.log(ff); 
function hi3(j1,j1){ // it's ok because we are not using "use strict"
    return 1;
};
console.log(hi3()); 
// this refers to the elements in html like button element because the element is an object (there is a code in the html script as an example on it)

// object create
// we can copy the content of an object into another object using object.create
let dev1 = {
    firstname: 'ismail',
    getName: function(){
        return `hello ${dev1.firstname}`;
    }
};
let dev2 = Object.create(dev1);
dev2.devAge = 22;
dev2.firstname = 'hany';
console.log(dev2.firstname);
console.log(dev2.devAge);
// we can use the syntax of object.create to add property 
let dev3 = Object.create(dev2,{devPartner:{value:true}});
console.log(dev3.devPartner);
// here we have a problem because we changed the property firstname value to hany but in the function getName() it still print the firstname ismail of object dev1 as the function returns dev1.firstname so the solution is to use this instead of dev1. or dev2. so we can copy the objects in a right way as this refers to the object it is in
console.log(dev2.getName());
let dev4 = {
    firstname: 'ismail',
    getName: function(){
        return `hello ${this.firstname}`;
    }
};
let dev5 = Object.create(dev4);
dev5.firstname = 'moataz';
console.log(dev5.getName());

// object assign
// we can copy the contents of more than 1 object and put them all in one object using object.assign
let a1 = {
    nu:1,
    hey: function(){
        return 'hey';
    }
};
let a2 = {
    nu2:2,
    
};
let a3 = {
    nu3:3,
    
};
let a4 = Object.assign(a1,a2,a3);
console.log(a4.nu2);
console.log(a4.hey());
console.log(a4);
// if 2 objects have property of the same name of course it is local so no problem but if we copy their content in a new object using object.assign the last property will override with the new value
// we can make a new object in the object.assign syntax in the object we are already making
let b1 = {
    nu:1,
    hey: function(){
        return 'hey';
    }
};
let b2 = {
    nu:2,
    
};
let b3 = {
    nu3:3,
    
};
let b4 = Object.assign(b1,b2,b3,{
    nu4: 4
});
console.log(b4);

// DOM select elements by js
// we can select the elements of html in js using id
let h = document.getElementById('head');
h.style.background='green';
console.log(h);
// we can select the elements of html in js using class
// as more than 1 element can have the same class unlike using id so js gets the elements of the class in an array even if it is 1 element as class may be for more than 1 element
// if we want to access on 1 element only from this array we can use index []
let h2 = document.getElementsByClassName('myh2');
console.log(h2);
let h22 = document.getElementsByClassName('myh2')[2];
h22.style.color='orange';
console.log(h22);
// we can select elements of html in js using tag name
// it is like using class name as more than 1 element can have the same tag name so js gets the elements of the tag name in an array even if it is 1 element and to access a specific elemnt is by using index too []
// the index of the tag made in js is after the index of the tag made in html as you can make tags as h4 in js using window.document
let h4 = document.getElementsByTagName('h4');
console.log(h4);
let h44 = document.getElementsByTagName('h4')[0];
h44.style.background='yellow';
console.log(h44);
// we can select elements of html in js using queryselector which can select by id or class or tag name as id we use # class we use . 
let h5 = document.querySelector('#head2');
h5.style.background='red'
console.log(h5);
// when using query selector with class name it selects the first element with this class name not all of them unlike getElementsByClassName
let h6 = document.querySelector('.myh2');
h6.style.color='purple';
console.log(h6);
// when using query selector with tag name it selects the first element with this tag name not all of them unlike getElementsByTagName
let h7 = document.querySelector('h3');
h7.style.background='red';
console.log(h7);
// to solve the problem of query selector with class name and tag name to select the element we want we will use querySelectorAll which will act like getElementsByClassName and getElementsByTagName
// querySelectorAll will select all the elements of the same class or tag in an array and to access a specific one we will use index []
let h8 = document.querySelectorAll('.myh2');
console.log(h8);
let h88 = document.querySelectorAll('.myh2')[3];
h88.style.color = 'green';
console.log(h88);
// querySelectorAll with tag name
let h9 = document.querySelectorAll('h3');
console.log(h9);
let h99 = document.querySelectorAll('h3')[2];
h99.style.background='red';
console.log(h99);

// we can select the whole body of html by js
// the content of the body will be in an array
let body = document.body;
body.style.background = 'grey';
console.log(body);

// we can select the title of html by js
let title = document.title;
console.log(title);
title = 'js learning by mahmoud';
console.log(title);

// we can select images of html by js
// all the images will be in an array and we can access a specific one using index[]
let images = document.images;
console.log(images);
// here we selected the image of index 0 and chaged it's src into the image of index 1 and add its alt and print all of the information
let image1 = document.images[0];
image1.src = 'man2.jpeg';
image1.alt = 'a photo of a man'
console.log(image1);
console.log(image1.src);
console.log(image1.alt);

// we can select links of html by js
// all the links will be in an array that we can access using index []
let links = document.links;
console.log(links);
// here we selected the link of index 1 and changed its href from https://www.google.com into https://www.youtube.com and printed the results
let link1 = document.links[1];
link1.href = 'https://www.youtube.com';
console.log(link1);
console.log(link1.href);

// we can select forms of html by js 
// all the forms will be in an array and we can access a specific one using index []
let forms = document.forms;
console.log(forms);
// here we selected the form of index 0 and printed the variable which carries its tag
let form1 = forms[0]; // which is the same using document.forms as forms is variable carries document.forms
console.log(form1);

// attributes 
// get attribute: we can get the attributes of an element in html by js just by using .
let image2 = document.getElementById('img3');
console.log(image2);
console.log(image2.src);
console.log(image2.className);
console.log(image2.id);

// if we want to check that the element has attributes or not we can use function hasAttributes() which returns true or false
// if we want to check that the element has a certain attribute we can use function hasAttribute('attribute') which returns true or false
// we can see all the attributes of an element using .attributes and choose a specific one using index []
console.log(image2.hasAttributes());
console.log(image2.hasAttribute('id'));
console.log(image2.hasAttribute('anything'));
console.log(image2.attributes);
console.log(image2.attributes[2]);

// set attribute: we can change the value of an attribute by 2 ways using . or by using the function setAttribute()
image2.className = "changed";
console.log(image2.className);
image2.setAttribute('class','changed2'); // we write class not className
console.log(image2.className);
// if the attribute i am changing its value doesn't exist it is the way to create a new attribute
image2.title = 'new attribute';
console.log(image2.title);
image2.setAttribute('alt','alt3');
console.log(image2.alt);

// we can remove an attribute using removeAttribute() function and if we print that attribute after removing it nothing will be printed no result at all just empty line
image2.removeAttribute('alt');
image2.removeAttribute('title');
console.log(image2.alt);
console.log(image2.title);
console.log(image2);

// outer/inner html - outer/inner text
// if we use outerHtml so we will replace the whole html code that we are applying outerHtml on like a div tag (note: not the whole html page just the code we get and put in a variable)
// while if we use innerHtml we will replace the code inside the html that we applying innerHtml on
let container = document.getElementById("container");
console.log(container);
console.log(container.outerHTML);
console.log(container.innerHTML);
// here we will replace the whole div tag by paragraph tag using outerHtml
// note the variable which carries the div tag will stay the same and still carries the div tag not paragraph tag as it is connected by its id but the effect of outer html made the paragraph tag replaces the div tag in elements page of our webpage
container.outerHTML = '<p> replace div tag using outer html </p>' ;
console.log(container);

 // inner html
let container2 = document.getElementById('container2');
console.log(container2);
// here we will replace the inside of the div tag by a pragraph tag using innerHtml but the div tag will stay the same 
// the variable which carries the div tag of course will stay carrying it as we change the inside of it only and the variable will print the div tag with the new code inside it of a paragraph tag
container2.innerHTML = '<p> replace the inside of div tag using inner html </p>';
console.log(container2);

// outer text
// outer text is like outer html but we replace the tag by a text not by another tag even if we write another tag like the example below it will print the tags as text and won't define them as tags
// note the variable carries the div will stay carry it if we print it
// note: outer html can work as outer text if we write text instead of tag 
let container3 = document.getElementById('container3');
console.log(container3);
container3.outerText = '<p> we are changing the tag into text using outerText </p>';
console.log(container3);

// inner text 
// inner text is like inner html but we replace the code inside of tag code by text instead of another code or a tag even if we write a tag it will be defined as a text not a tag 
// note: inner html can work as inner text if we write text instead of tag
let container4 = document.getElementById('container4');
console.log(container4);
// note the variable will print the div tag but inside it is the text we wrote instead of the h3 tag that was inside it
container4.innerText = '<p> we are changing the inside of the tag into text using innerText </p>'; 
console.log(container4);

// textContent is the same as innerText
let container5 = document.getElementById('container5');
console.log(container5);
container5.textContent = '<p> we are changing the inside of the tag into text using textContent </p>'; 
console.log(container5); 

// parent and sibling
// we can select element of html from selecting another element sibling to it (means before it or after it)
let paragraph = document.getElementById("par");
console.log(paragraph);
// here we selected the element previous to the element we got using previousElemetSibling 
// note: we selected the element previous to it not any rhing previous to it as the code previous to it was actually a text says 'hello before' but that is not an element and there was a comment too but it is not an element so it will select the first element previous to our element
let paragraphBefore = paragraph.previousElementSibling;
console.log(paragraphBefore);
// here we selected the element after the element we got using nextElementSibling 
// and the same as previousElementSibling it will select the next element not the next text or the next comment no it will select the next element so here it selected the next paragraph
let paragraphAfter = paragraph.nextElementSibling;
console.log(paragraphAfter);

// here we selected any thing previous to our element which was a text using previousSibling
let anythingBefore = paragraph.previousSibling;
console.log(anythingBefore);
// here we selected any thing after our element which was a text using nextSibling
let anythingAfter = paragraph.nextSibling;
console.log(anythingAfter);
// here we selected the parent element of our element so the element which contains our element here it was a div using parentElement
// note: in all of those cases we can do anything on the elements we selected using another element so we can remove them do any fuction like inner html or set attribute any thing we want as we selected that element
let parentDiv = paragraph.parentElement;
console.log(parentDiv);
parentDiv.setAttribute("id", 'parent');
console.log(parentDiv.attributes[0]);

// dom style css
// we can access the css properties for html elements by 3 ways
// first way by using .style.property
let div1 = document.getElementById("div1");
div1.innerText = 'hello one';
div1.style.backgroundColor = 'yellow';
div1.style.color = 'blue';
div1.style.padding = '15px';
div1.style.borderLeft = '4px';

// second way is by using style.cssText
let div2 = document.querySelector('#div2');
div2.innerHTML = '<p>hello two</p>';
div2.style.cssText = `background: white; 
color: pink;
padding: 15px;
borderLeft: 4px
`; // we used backtick instead of "" to put each property on a single line but we can do the same functionality using "" but beside each other and ofcourse with ; at the end of each property

// note if we do the 1st way on an element then use cssText on the same element it will remove all the effects of the 1st way and  the same if we use 2 cssText on the same element the second will remove the effects of the first
/*div1.style.cssText = `background: white;
color: pink`;*/

// the 3rd way is by using setProperty('property','value')
let div3 = document.querySelectorAll('#div3')[0];
div3.innerText = 'hello three';
div3.style.setProperty('background','yellow', 'important'); // we can add important as a third argument
div3.style.setProperty('color','blue');
div3.style.setProperty('padding','15px');
div3.style.setProperty('borderLeft','4px');

// to remove any property in the 3 ways we use style.removeProperty() 
div1.style.removeProperty('color');
div2.style.removeProperty('color');
div3.style.removeProperty('color');

// create element of html using js
// by this way we can build a whole html page without writing anyrhing in html just by using js
// first of all we can use a way we learnt by selecting the body then use innerHTML and back tick `` to write inside all html tags we want but we have a better way

// first step #1 is creating the elements of html using document.createElement() and assign all of them to variables and assign the body of html to a variable too
// note: all those elements we have created are not seen or used yet in any way to the html
let contain = document.body;
let div4 = document.createElement('div');
let headline = document.createElement("h1");
let image3 = document.createElement('img');
// second step #2 we will make our content that will be put in our elements and assign it into a variable
let content2 = document.createTextNode('HTML IN JS');
image3.src = 'man.jpg';
image3.style.width = '200px';
// third step #3 we will put the content we made for our elements in those elements and finally we put our elements we made inside the body 
// but note we will put the childs to parents that is the way so h1 and img will be put into the div first then the div will be put in the body
headline.appendChild(content2);
console.log(headline); // here the content of h1 is put in element h1 we made earlier
div4.appendChild(headline);
div4.appendChild(image3);
console.log(div4); // here the h1 and img we made are put in the div we made too and note: that the order is important as here the h1 will appear above the image as it is above in the div
contain.appendChild(div4); 
console.log(contain); // here all of our elements are put in the body of html and therefore they are seen and have been used
div4.style.background = 'lime';
div4.style.color = 'white'; 
div4.style.padding = '10px'; // some styling for the div
div4.style.textAlign = 'center';

// cards project as an example on the previous (we will make html page in js only)

function element2 (name5,age8){ // parameters will make it dynamic

    // create elements
    let card = document.createElement('div');
    let headline2 = document.createElement('h2');
    let paragraph2 = document.createElement('p');
    let image4 = document.createElement('img');

    // create content
    let headline2_content = document.createTextNode(name5);
    let paragraph2_content = document.createTextNode(age8);
    image4.src = 'man2.jpeg'; // static bacause there is a beteer way for different images will know it later

    // put the content into the elements and put elements inside each other
    headline2.appendChild(headline2_content);
    paragraph2.appendChild(paragraph2_content);

    card.appendChild(headline2);
    card.appendChild(paragraph2);
    card.appendChild(image4);
    document.body.appendChild(card);

    // style
    card.style.width = '200px';
    card.style.background = 'purple';
    card.style.color = 'white';
    card.style.padding = '10px';
    card.style.margin = '4px';
    card.style.textAlign = 'center';
    card.style.display = 'inline-block';
    image4.style.width = '100%'; // 100% of div width
};
// content of the parametrs
let name5_array = ['mahmoud','ahmed','ibrahim','kamal','fady','ismail'];
let age8_array = ['21 years old','19 years old','28 years old','20 years old','17 years old','30 years old'];

for(let i=0 ; i < 6 ; i++){ // to invoke the function 6 times an use the counter as the index of array used as an argument in the function
    element2(name5_array[i],age8_array[i]);
};

// events
// there are 3 ways to make an event 
// first way #1 is in html page like a code like that <button onclick="console.log('1st way to make an event is by html')">click for event by html</button> and the event can take a js code to apply and each time we click the button the code is applied

// second way #2 is by using .onevent = function in js like .onclick 
// note the function can have a name or not and it can be an arrow function but at the end it has to be a function not just a code and of course each time we click the button the function is applied
// note we can make a function and write its name (.onclick = anyFunction;) note: the function has to be without brackets () as it to be like we write a function not writing a code as if we call it its like just writing a code
let btn = document.getElementById('btn');
btn.onclick = function(){
    document.body.style.background = 'black';
    console.log('event using .onevent');
};

// third way #3 is to use .addEventListener() function in js which takes two arguments the name of the event (without on) and the function we want to apply when the event happens 
// note it has to be a function not a code that will be  put as an argument in addEventListener and the function can have a name or not and can be an arrow function and of course each time we click the button the function is applied
// note we can make a function and write its name in the argument
let btn2 = document.getElementById('btn2');
function hhh(){
    document.body.style.background = 'blue';
    console.log('event using addEventListener');
};
btn2.addEventListener('click', hhh); // the function has to be without brackets () as it to be like we write a function not writing a code as if we call it its like just writing a code

// there are 2 differences between .onevent and .addEventListener()
// the first difference is that .onevent if written two times or more only the last one count and seen unlike .addEventListener
let btn3 = document.getElementById('btn3');
btn3.onclick = function(){document.body.style.background = 'green'};
btn3.onclick = function(){btn3.style.background = 'blue'}; // only this will be applied

let btn4 = document.getElementById('btn4');
btn4.addEventListener('click',function(){document.body.style.background = 'green'}); 
btn4.addEventListener('click',function(){btn4.style.background = 'blue'}); // both will be applied

// the second difference is that addEventListener is more intelligent so when we write .onevent = 'text' it is string not function nothing will happen but no error will be shown unlike .addEventListener
/*btn4.ondblclick = 'any text';
btn4.addEventListener('dblclick','any text');*/

// mouse events
// note: the events can be applied on all elements not just a button maybe h1 or paragraph any element
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btn10 = document.getElementById('btn10');
// onclick event the function is applied when we click on the element and release on the element if we click but release away or click away and release on the element the function won't be applied
btn5.onclick = function(){console.log('onclick')};
// onmouseup event the function is applied if we click any where even if not on the element but have to release on the element 
btn6.onmouseup = function(){console.log('onmouseup')};
// onmousedown event the function is applied when clicking on the element without the need to release we don't have to release
btn7.onmousedown = function(){console.log('onmousedown')};
// onmouseover event doesn't work with click and release just move the cursor on the element and the function is applied for one time then move it away and again move it on the element the function is applied again
btn8.onmouseover = function(){console.log('onmousedover')};
// onmouseout event doesn't work with click and release the function is applied when the cursor on the element and move away will apply once if we want to apply it again put the cursor on the element then move away from the element again
btn9.onmouseout = function(){console.log('onmouseout')};
// onmousemove eventdoesn't work with click and release the function is applied when we move on the element a very very small move the function is applied for a very large number to thousands in seconds 
btn10.onmousemove = function(){console.log('onmousemove')};

// keyboard events
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
// onkeyup event the function is applied when we press a key and release it if press a key again and release it the function is applied again
inp1.onkeyup = function(){console.log('onkeyup')};
// onkeydown event the function is applied when we press a key we don't need to release and when we press the key without releasing the letter or number or whatever is written again and again and again and with each time it is written the function is applied so if we press a key and continue pressing the function is applied a large number of times
inp2.onkeydown = function(){console.log('onkeydown')};
// onfocus event the fuction is applied when we put the element on focus like input box whwn we click on it
inp1.onfocus = function(){this.style.border='5px solid red'};
// onblur event the function is applied whenwe put the element on focus then put it on blur by clicking on any othe place
inp1.onblur = function(){this.style.border='0px'};

// window events

// onload event the function is applied when the webpage loads 
window.onload = function(){console.log('onload window event')};
// first of all we can remove the word window as any thing for window can be written without it as we work in it
// onresize event the function is applied when we resize the window of the browser
onresize = function(){console.log('onresize window event')};


// project on events of usd to egp exchange rate

// get the elements assign them into variables
let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound');
// by using onkeyup event whenever we write a new number in dollar input the function is applied where the value of dollar input * 50 will be assigned to the value of pound input
dollar.onkeyup = function(){
    pound.value = dollar.value*50; // note: .value is for input element not all elements 
};
// by using onkeyup event whenever we write a new number in pound input the function is applied where the value of pound input / 50  will be assigned to the value of dollar input
pound.onkeyup = function(){
    dollar.value = pound.value/50; // note: .value is for input element not all elements
};


// after-before-append

// get the elements
let afterBtn = document.getElementById("afterBtn");
let beforeBtn = document.getElementById("beforeBtn");
let appendBtn = document.getElementById("appendBtn");
let par2 = document.getElementById("par2");
let cont = document.getElementById("cont");
// style
cont.style.background = 'pink';
cont.style.height = '50px';
// here we made a function that will be applied when we click on after button the function makes the paragraph element moves after the div element (named cont) using after() function which moves the elements of html after
// note even if we open the elements page in browser we will see after clicking the after button that paragraph tag becomes after the div tag
afterBtn.onclick = function(){
    cont.after(par2);
};
// here we made a function that will be applied when we click on before button the function makes the paragraph element moves before the div element (named cont) using before() function which moves the elements of html before
beforeBtn.onclick = function(){
    cont.before(par2);
};
// here we made a function that will be applied when we click on append button the function makes the paragraph element moves inside the div element (named cont) using append() function which moves the elements of html inside another one
appendBtn.onclick = function(){
    cont.append(par2);
};


// add-remove-toggle class

let headline3 = document.getElementById("h5");
// here when we click on our element (h4) the function is applied which adds a class to the class list of our h4 and this class carries style properties as we defined this class between our <style> tag in html and adding this class to the class list isdone by using .classList.add("class_name")
headline3.onclick = function(){
    headline3.classList.add('styleClass');
};
// here when we right click on our element (h4) the function is applied which will remove the styleClass from the class list of our element which will remove the style from element using .classList.remove('class_name')
headline3.oncontextmenu = function(){            // we used here right click as we can't use onclick twice as only the second onclick will count as it can't add and remove the class at the same time when we click on our element
    headline3.classList.remove('styleClass');
};
// here when we click on element (h4) the function is applied which add a class (styleClass2) to the class list of our element and when we click again it removes that class from the class list all of that using .classList.toggle('class_name') so it solves the problem of add then remove class as we had to make one in left click and the other in right click as onclick will not change the function it applies when using it the second time and we can't and we don't want to make it add and remove the class at the same time as nothing will happen
// class is still while what happens is that class with certain style is added to the class list of h4 and removed from the class list of h4
let headline4 = document.getElementById('h6');
headline4.onclick = function(){
    headline4.classList.toggle('styleClass2');
};

// project navbar as an example on add-remove class

// in html we made 2 buttons one is open and one is close and we made a div which contains 6 paragraphs and we styled all of that with colors and hover styles in style tag
// we made a class named hide with one property display: none so if this class is added to the class list of an element the element won't display 
// and at the start we put this class in the class list of open button so it won't display at the start as we don't want the 2 buttons and nav bar we want the nav bar with close button then when we click on close the nav bar is closed and button open appear as button close disappear

// get elements
let btnOpen = document.getElementById('btnOpen');
let btnClose = document.getElementById('btnClose');
let navdiv = document.querySelector('.container6');

// here when we click on close button the class hide is added to the class list of both nav bar and the close button so they will disappear while we remove class hide from the class list of open button so it appears
btnClose.onclick = function(){
    navdiv.classList.add('hide');
    btnOpen.classList.remove('hide');
    this.classList.add('hide');
};
// here when we click on open button the class hide is removed from both nav bar and close button so they both appear while class hide is added again to the class list of open button so it disappears
btnOpen.onclick = function(){
    navdiv.classList.remove('hide');
    btnClose.classList.remove('hide');
    this.classList.add('hide');
};


// auto event
// we can make an event happen automatically when another event happens

// get elements
let clbtn = document.getElementById("clbtn");
let inp3 = document.getElementById('inp3');
// when the event of loading the window happend the input will focus automatically as we put focus() in the function of onload event so it is like avent inside an event 
// we also made the button click automatically when the onload event happens using click() in the function of onload event
window.onload = function(){
    inp3.focus();
    clbtn.click();
};
// here we made the button be styled when we click on it so in the previous event of onload when it happens the click will happen which will make the button styled
clbtn.onclick = function(){
    this.style.background = 'yellow';
};
// here is another example of auto event when the event of right click on the input happens another event will happen that the input will be blur not focus using blur() in the function of the event oncontextmenu
inp3.oncontextmenu = function(){
    this.blur();
};


// gallery project
// we made a div of 4 images and styled it then we made a div with 1 large image and another div of 4 images with the same style the aim is to make a gallery when we click on the photos above the main large photo the large photo becomes the photo i clicked while when we hover on a photo of the 4 photos below the 1 main image the main image becomes this photo

// get elements
let g1 = document.getElementById('image1');
let g2 = document.getElementById('image2');
let g3 = document.getElementById('image3');
let g4 = document.getElementById('image4');
let mainImage = document.getElementById('mainImage');

// when we click on 1 of the images above the main large image the src of the main one becomes the src of the image we clicked on
g1.onclick = function(){
    mainImage.src = this.src;
};

g2.onclick = function(){
    mainImage.src = this.src;
};

g3.onclick = function(){
    mainImage.src = this.src;
};

g4.onclick = function(){
    mainImage.src = this.src;
};

// get elements
let g5 = document.getElementById('image5');
let g6 = document.getElementById('image6');
let g7 = document.getElementById('image7');
let g8 = document.getElementById('image8');

// here when we enter(hover on) 1 of the images below the main image the src of the main image becomes the src of the one we hovered on
g5.onmouseenter = function(){
    mainImage.src = this.src;
};
g6.onmouseenter = function(){
    mainImage.src = this.src;
};
g7.onmouseenter = function(){
    mainImage.src = this.src;
};
g8.onmouseenter = function(){
    mainImage.src = this.src;
};

// we can make that same project in html only using js in html by using onclick and by replacing id of the images by name which in html tag for images like alt
// this code of image 1 when we click on it the src of the main image of name main will be the src of image 1 we can give image 1 a name and use it instead of this.src 
// we do the same thing for the rest of images and the images below the main we use different event (onmouseenter)
/* <img onclick="main.src = this.src"  src="img1" alt="anything">
   <img src="img4" name="main" alt="anything">*/






// BOM (browser object model)
// very important concept talks about how js communicate with the browser (data in the browser-colors depth-window width and height-url-how many times the code runs and how often)

// window object is the main thing we have to know we have to know that every thing is in the window js that we write is in the window object
// very important thing to know that the hoisting idea of that variables declared using var and declaration functions are declared at the window object so that they are declared vefore anything else happens in js code
// that is the first idea of bom to know that hoisting is declaring the declaration functions and variables declared using var are declared first at window object
function hi4 (){
    console.log('hi');
};
window.hi4(); // so originally we should write the code like that but for ease we don't write window. 

var gg = 10;
console.log(window.gg); // so originally we should write the code like that but for ease we don't write window. 

let hi5 = function(){
    console.log('hi'); 
};
/*window.hi5():*/ // here will give me error as if we declared functions or variables by using let so they are not declared in window object




// scroll
// those are functions for scroll in the browser the result of those functions won't appear if we write them here if we want to see results we write them in the console of the browser then press enter
// but we use them here in events or functions or whatever but we use then in something not just write them like that
// scrolls to 200px from the top and 80 from the left
scroll({
    top: 200,
    left: 80
});
// it can take parameters directly the 1st one is x coordinate (horizontal) and the second is y coordinate (vertical)
scroll(80,200); // left - top
// scrollTo is like scroll
scrollTo(80,200); // left - top
// scrollBy adds that amount to the place you are so every time it increases 200 from left and 400 from top
scrollBy(200,400); // left - top

// those we can see their result as we printing scrollX and scrollY which shows us where we are from left and from top
console.log(scrollX);
console.log(scrollY);

// project on scroll 
// we made a button in the right bottom corner and styled it and its job will be to take us to the top of the webpage

// get element
let scrollingBtn = document.getElementById("scrolling");
// here we made the button appear if scrollY is >= 400 and the button will disappear if scrollY is < 400 using onscroll event as we scroll if scrolly >= 400 the button will appear else it won't
// if we wrote the part if else only without onscroll event so when the page load if scrolly >=400 button will appear else it won't but when we scroll it won't affect that so it is useless unless with onscroll event that will do this function every time we are scrolling
window.onscroll = function(){
    if(scrollY >= 400){
        scrollingBtn.style.display = 'block';
    }
    else{
        scrollingBtn.style.display= 'none';
    };
    
};
// here when we click on the button it will apply the function scroll and we used behavior: 'smooth' to scroll smoothly not show the top of the page suddenly
scrollingBtn.onclick = function(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
};


// screen
// here what we mean with screen not the browser we mean the screen of the device literally we can know its height - width - resolution - color depth - pixel depth - orientation type etc. which can benefit us in many ways like designing a game with different graphics quality for different screens of devices

console.log(window.screen.height); // height of the screen (we can write window. or remove it of course)
console.log(screen.width) // width of the screen
console.log(screen.availHeight); // available height for my application as we might can't take all the space like here my screen there is the task bat at the bottom which takes 48 px
console.log(screen.availWidth); // the same as available height but here i have all the width for my application
console.log(screen.colorDepth); // color depth of my screen
console.log(screen.pixelDepth); // pixel depth of my screen
console.log(screen.orientation.type); // type of my screen landscape or portrait



// location object
// location object controls url so first of all we have to know the parts of url 
// all of the url is called href 
// https:// - http:// part is called protocol
// www.facebook.com is called host name
// https://www.facebook.com/(mahmoud-yasser) this part in brackets is called path name

console.log(window.location.href); // will show the whole url link
console.log(location.protocol);  // will show the protocol only the protocol here in our local file is file:
console.log(location.hostname); // will show the hostname only we don't have host name in our local file
console.log(location.pathname); // will show the path name only
console.log(location.port); // will show the port but we don't have port in our local file

// we can set them too so we can set the href,protocol,hostname and pathname
/*location.href = "https://www.facebook.com/";
location.protocol = "http:"
location.hostname = 'www.instagram.com'
location.pathname = 'home?lang=en'
location.port = 8080*/

// there is a function in object location is called reload() which reloads our webpage
// here we made a reload button if we click on it the function reload() will be applied
let reloadBtn = document.getElementById("reload");
reloadBtn.onclick = function(){
    location.reload(); 
};

// we have two functions in object history called back() and forward() which will go backward or forward like the arrows buttons in the browser
// they won't do anything in our website as it is the first thing we open in browser tab and we don't go to something else from it
/*history.back();
history.forward();*/

// here we made two buttons and input for experimenting location.assign() and location.replace() functions when clicking on the buttons
let locAssignBtn = document.getElementById('location.assign');
let locreplaceBtn = document.getElementById('location.replace');

// location.assign() assigns new href in the tab of the browser but of course doesn't change the href of our website it just enters a new website 
// location.replace() replaces the href in the tab of the browser so enters a new website but of course it has nothing to do with href of our website
// the difference between the 2 functions is that assign() leaves the website before in history so i can go back to it and saves the data in the website that it left in history so here we will find what we wrote in the input as it is if we go back
// while replace() doesn't leave the website before in history and of course doesn't save its data so here the input won't have what we wrote and we won't even be able to go back to our website in history of the browser
locAssignBtn.onclick = function(){
    location.assign('https://www.facebook.com/'); 
};                                                
locreplaceBtn.onclick = function(){
    location.replace('https://www.facebook.com/'); 
};                                                 
                                                      

// setTimeout - setInterval

// setTimeout's job is to apply a function after a certain amount of time so it takes two arguments the function we want to apply and the amount of time but by milliseconds (1 second = 1000 milliseconds)
// note: the function in setTimeout is applied once just once 
let settimevariable = setTimeout(function(){
    console.log('hello');
},3000);
// clearTimeout's job is to stop the setTimeout from working by assigning the setTimeout into a variable and pass this variable as an argument to clearTimeout()
clearTimeout(settimevariable);

// setInterval's job is similar to setTimeout's but it applies the function not only one time after certain seconds no it applies this function every this amount of seconds so not just one time no it repeats the function
// note: if we don't stop the setInterval it will continue to repeat the function to infinity
// we stop setInterval using clearInterval and pass the variable we assigned the setInterval to as an argument in clearInterval
let o = 0;
let setIntervalvar = setInterval(function(){
    console.log(o++);
    if(o==4){
        clearInterval(setIntervalvar);
    };
},2000);



// localStorage - sessionStorage
// first of all localStorage and sessionStorage are like any storage like a usb or drive for example but for our website localStorage(5-10 MB) - sessionStorage(5 MB)
// localStorage data are saved forever in our website even if we reload or close the tab of the browser while session storage data are only saved in that session so if we closed the tab of the browser this data is deleted but if we reload it will stay so it is deleted only if we cloase the tab
// localStorage and sessionStorage are the same in everything in the code so what we write using localStorage can be applied by the same way using sessionStorage

// we set the data in localStorage by 2 ways first way using setItem() function which takes 2 arguments the key and its value second way by writing the key after localStorage.
// the key must be string and the value should be string too even if we wrote a number,object,array it will be saved as string but in this case if we write the value as number,array or object it won't be read properly especially the array and the object won't be read as an array or object
// the solution to put number,array or object as string in value and be read properly as object,array,number we use JSON.stringify it will make their type string but they can be read as an array or an object or number using JSON.parse in getItem()
// what we will save even if we deleted the code it will stay be saved and won't be removed as it is in storage

localStorage.setItem('name','mahmoud');
localStorage.name2 = 'ahmed';
localStorage.setItem('age', JSON.stringify(26) );
localStorage.setItem('no.',JSON.stringify([1,2,3]));
localStorage.user = JSON.stringify({
    skill: 'programming',
    skill2: 'English'
});

// to get-read data from localStorage we use getItem() and write the key within the brackets or we use localstorage. and write the key
// like we said if we get the data of an object for example and print its type it will be string if we want to get this data in its original form we will use JSON.parse will return this data from string to its original type
console.log(localStorage.getItem('name'));
console.log(typeof localStorage.user);
console.log(typeof JSON.parse(localStorage.user));

// to remove data from localStorage we use removeItem() and write the key within the brackets
// if we want to remove all data at once we use localStorage.clear()
localStorage.removeItem('name2');
/*localStorage.clear();*/

// if we want to get the key we use .key() and write its index between the brackets
// note: we can know the index of key from local storage in our website from applications then storage then local storage as the order is different from the order we set those items with
console.log(localStorage.key(1));

// this is an example on how to use localSorage or sessionStorage 
let txt1 = document.getElementById('txt1');
// here we have an input we want to save the data entered in this input so we used onkeyup event and when we write anything on the keyboard the function of setItem in localStorage is applied
txt1.onkeyup = function(){
    localStorage.setItem('txt',JSON.stringify(txt1.value)); // we didn't have to use JSON.stringify as the type of input is text so we can't write numbers or anything else except text
};
// then we want to get the data in local storage and put it in the input so if we reload or close the tab what we wrote in the input will stay written in the input like google forms
// note: we used if the localStorage.length>0 as if it is empty so why will we apply this code and put no data in the input
if(localStorage.length>0){
    txt1.value = JSON.parse(localStorage.getItem('txt'));
};

// map 
// it is used to do a function on each element in my array and assign the result into a new array (and this is an important note that it does assign the result into a new array not work on my array)
// we use map by writing the array.map() and the map takes 2 arguments a callback function and this (note: we can and most of the time we do that we write the callback function only) in this argument we write any number like 10 for example
// the callback function takes 3 arguments which are the element of the array the index and the array we can write the element argument only and do whatever we want on this element in the callback function that the map will put each element as the argument in this callback function
// here as map goes on each element so we print the steps of it each step we are on a new element in map with its new index

let numbers2 = [1,-8,19,82,-3,-22];
let inv = numbers2.map(function(ele,ind,arr) {
    
    console.log(`the element => ${ele}`);
    console.log(`the index => ${ind}`);
    console.log(`the array => ${arr}`);
    console.log(`this => ${this}`);
    return -ele
},10 );

console.log(inv);

// filter 
// like map but it filters the array by the function that it takes as a parameter 
// so here it will checks each element if it starts with 'a' it will return it while if we used map here it will take each element and apply the function on it so will take 1st element and apply startswith('a') on it which will return true not the element while filter checks if it true the element will be assigned to the new array
let arr4 = ['ayman','kamal','samy','ahmed','akram'];
let filtered_arr4 = arr4.filter(function(el){
    return  el.startsWith('a');
});
console.log(filtered_arr4);

// reduce 
// it is used to apply a function on the elements of the array and reduce the array to one single result like adding all the elements of our array to each other so the result is one number at the end
// reduce takes two parameters a callback function and an initial value of course we can ignore the initial value which will play a role of initial element in the array but without an index
// the callback function takes 4 parameters the accumulator which is the past element you just passed then current which is the element you are on then index which is the index of the current element then array which is the array yo are using reduce on and we can use acc and current only of course
// here we made the callback function to add the accumulator on the current (note: as reduce like map and filter goes on each element so we can print the steps here we printed the steps each step the accumulator was added to the current element and a result of new accumulator is shown which will be added to the new current)
let arr5 = [10,2,14,30,50];
let addElements = arr5.reduce(function(acc,current,ind,arr){
    console.log(`the accumulator => ${acc}`);
    console.log(`the current element => ${current}`);
    console.log(`the index of the current element => ${ind}`);
    console.log(`the array => ${arr}`);
    console.log(acc+current);
    return acc+current;
},5); // initial value is 5

console.log(addElements);


// forEach
//forEach differs from map-filter-reduce that it loops on the elements of our array like the others but first of all the result is not in different array and the most important thing that mostly it doesn't change the values of elements
// instead of that it is used in a situation like some elements of html we want to loop on them to make an event on each of then onclick for example here we use forEach
// it takes 2 parameters the same as map one is callback function with 3 parameters element - index - array then the second parameter is this argument like map and ofcourse we can use the callback function parameter only and inside the callback function we can use 1 parameter element only

let allLists = document.querySelectorAll('ul li');
console.log(allLists);
// here for each element in our array which are the lists when we click on element it will remove the class from all the elements then add the class to the element we clicked on
allLists.forEach(function(ele){
    ele.onclick = function(){
        allLists.forEach(function(el){
            el.classList.remove('active');
        });
        ele.classList.add('active');

    };
});






// function to run the code after loading the whole body using onload event so we can put the script tag at the head tag (above the body) and the code still runs
/*onload = function(){

    document.querySelector('h2').style.backgroundColor='blue';
}*/     

