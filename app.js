// node js app consists of many modules
// call the other modules we made so we can use what they export in my app
const names = require("./module2");
const funcs = require('./functions');
const obj = require('./objects1');

console.log(names);
console.log(funcs);
console.log(obj);


funcs.sayHello(names.name1);
// here we can use function sayHello without funcs.sayHello due to that the model exports this function only and due to this code below
const { sayHello } = require("./functions");
sayHello(names.name2);
sayHello("ali");

console.log(obj.myperson);
console.log(obj.items[0]);

// here we called a module which doesn't export anything so this module will run in my app once but i can't use what in it 
require('./addnumbers');
/*addNum();*/


// print directoty name and file name for my app
console.log(__dirname);
console.log(__filename);

// code to import the os module
const os = require('os');
// here these functions will return my devices's os informartion so my windows 11 but later we will use these functions on the server to get its info 
const userinfo = os.userInfo();
console.log(userinfo);

console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    free_space: os.freemem()
};
console.log(currentOS);

// import path module
const path = require('path');

console.log(path.sep); // it will print the separator i should use between folders' names like \

const filepath = path.join('/content','myfolder','exp.txt'); // here we assign a path to a variable using path.join which collects the folders and file i gave to it and make the path for the file
console.log(filepath);
console.log(path.basename(filepath)); // path.basename takes a file path and returns the name of the file at the end of this path

const absolute = path.resolve(__dirname,'content','myfolder','exp.txt');
console.log(absolute);

// import 4 functions from file system module so we can use them with their names only without fs.
const {readFileSync , writeFileSync , readFile , writeFile} = require('fs');

// readFileSync() is used to read a file in my app we put the path of the file we want to read as the first argument and the second argument we put utf-8 so we can read the text 
const expText = readFileSync('./content/myfolder/exp.txt','utf-8');
console.log(expText);

const mahmoudText = readFileSync('./content/mahmoud.txt','utf-8');
console.log(mahmoudText);

// writeFileSync() is used to write a new file we put the path we wanna our file to be in with the name of the new file in the path in the first argument then we put the content of that file in the second argument
// the third argument we put {flag: "a"} so the content we put will be added not replace so we can write another things in this file and not be replaced with that content when we run our app instead it will be added to the existing content and we can write after it in both situations
// here we put the variables that carry the files they read so they will become the content in our new file with some of words too that we wrote 
// we din't assign the function into a variable as it returns nothing
writeFileSync('./content/result.txt',`exp: ${expText}    mahmoud: ${mahmoudText}`, {flag: 'a'}); // a in flag is appreviation for append

const result = readFileSync('./content/result.txt','utf-8');
console.log(result);

// readFile and writeFile are async which means that they work in different lines so they don't block my code until this task finishes instead this task works in a different line while my other tasks after it run and work and when it finishes it will give me a hint
// when to use readFile and writeFile instead of readFileSync and writeFileSync ? when the files are too big so it will take time then using sync will block my code until this task finishes so we use async
// readFile takes 1st parameter the path of the file then the other parameters are the encoding and the callback function which takes two parameters error and result 
// we can't assign readFile function into a variable due to the callback function inside readFile function which controls the result instead we assign the result parameter from the callback function into a variable 

var myresult; // variable to assign the result parameter into
readFile('./content/myfolder/exp.txt','utf-8',(err,result)=>{

    
    if(err){
        console.log(err); // so if there is an error it will print it as if we didn't write this code and there was an error it won't show it just no result will happen
    }
    else{
        myresult = result;
        console.log(result); // we can print result or myresult which is the variable we assigned result into
    };
});

var myresult2;
readFile('./content/mahmoud.txt','utf-8',(err2,result2)=>{

    
    if(err2){ // notice err2 as we named the error parameter, here means if error happens
        console.log(err2);
    }
    else{
        myresult2 = result2
        console.log(result2);
    };
});

//(three V.I notes 1-2-3 read them)
// V.I note1 : the following code will return undefined as each readFile we did are async on different lines so we won't be able to use the variables carrying their results in the normal line and this code we will see its result before the readFile codes too
console.log(myresult);

// all the things that are applied on readFile are applied on writeFile 
// writeFile takes 1st parameter the path of the new file with its name 2nd parameter the content of the file then parameter for flag then parameter of the callback function which is like the callback function of readFile takes 2 parameters error and result
// here we don't print the result as writeFile doesn't return thing like writeFileSync as they write not read but of course a new file will be written and we can see it 

// V.I note2: as each readFile we did and that writeFile are async on different lines so writeFile here won't be able to use the variables carrying the results of readFile

writeFile('./content/result-async-wrong.txt',`1: ${myresult}   2: ${myresult2}`/*,{flag: 'a'}*/,(wErr,wResult)=>{
    if(wErr){
        console.log(wErr);
    }
});

// V.I note3: if we want to be able to use the results of the readFile in the writeFile so we must make them in the same line so we put each readFile in the callback function of the previous one then the writeFile in the callback function of the previous readFile
// and of course they will be in different line from the normal line so we can't print them in the normal line as an example 


readFile('./content/myfolder/exp.txt','utf-8',(err,result)=>{

    var myresultInside; 
    if(err){
        console.log(err); 
    }
    else{
        myresultInside = result;
        console.log(result);

        
        readFile('./content/mahmoud.txt','utf-8',(err2,result2)=>{

        var myresultInside2;
        if(err2){ 
           console.log(err2);
        }
        else{
           myresultInside2 = result2
           console.log(result2);

              writeFile('./content/result-async-right.txt',`1: ${myresultInside}   2: ${myresultInside2}`/*,{flag: 'a'}*/,(wErr,wResult)=>{
                if(wErr){
                    console.log(wErr);
              }
                    readFile('./content/result-async-right.txt','utf-8',(err3,result3)=>{
                        if(err3){
                            console.log(err3);
                     }
                        else{
                            console.log(result3);
                    };
                 });
                
        });
       };
    });

    };
});

// import http module 
// http module will make us deal with internet,networks,servers,api
const http = require('http');

// function in http module to create a server 
// note: createServer() function is async as well as 90 % of functions in http module so it will work on another line
// createServer() function takes a callback function as a parameter and this callback function takes two parameters which are request and response
/*const server = http.createServer((req,res) => { // request is the reuest the user requested like reloading the webpage and response is the result or the response that the server gives 

    console.log(req); // we printed the request but it won't print anything until we make a request on the webpage like reloading it then the request will be printed and every request we will make every time it will be printed too
    if (req.url === '/'){ // if the request was to go to the url of the homepage (/ means the homepage)
    res.write('welcome to our new server'); // here will write this sentence in the webpage
    res.end();} // it means the end of the response so we write it last and we can't use res.write() after it but if we wrote a code like for loop after res.end() it will run normally
    
    else if(req.url === '/about'){ // if the request is to go to url of about page
        res.end('this is the about us page'); // we can write in the parameter of .end() instead of .write() then .end() if we want to write a one thing quickly 
    }
    else{
        res.end(`<h1> no content </h1> 
         <p> there is no content here please click on the link below to return to the home page </p> 
         <a href = "/"> home page </a>`); // we can write html code 
    };
    
    
});
// to assign a port to our server so we can run it now on (localhost:5000)
server.listen(5000);*/


// we will talk about npm which is a package manager for node through it we can download a package in our project to use it to ease our work without writing much code we can get it from a package from npm
// first step #1 : we initialize npm in our project by writing (npm init) in the terminal
// second step #2 : after initialization it will ask me questions about my project like the entry point of it etc (note: we can skip all of this if we wrote in initialization (npm init -y) instead of (npm init))
// third step #3 : after that a json.package file will be created in our project which carries the information about our project that we entered in the previous step and carries the dependencies which the packages we install will be in it
// fourth step #4 :  install the package using (npm install ) or (npm i ) and write the package name after npm install and there is two categories we can download the package local for our project or global for all projects to be used in and we prefer local so we control the packages in each project (to install it globally (npm install -g))
// fifth step #5 : a file named node modules will be created carrying these packages and we can use them in our project finally
// sixth step #6 : if we shared our code using git and github and we don't want to upload the packages we used as if they are a lot it will take much time and also when other team members working on the project download our code it will take time to download those packages instead we make a file named .gitignore and write (/node_modules) in it so when we upload our project it will ignore the packages as the packages in node_modules folder
// seventh step #7 : when other team member download my code and want to use it it will make errors as the packages are not in the project so he writes (npm install) and all the packages in dependencies in package.json file will be downloaded with the versions written in dependencies so absolutely no error will happen
// note: after doing those steps for only one time then we can install packages using npm install without doing them again

// example on the package we installed (lodash) we import it as we import modules and built in modules of course it is different from built in modeules as built in modules are in node itself while those packages are written by the community of node to ease and facilitate the coding 
const lodash = require('lodash');


const nested_arr = [1,[2,[3,[4]]]];
const arr_from_nested_arr = lodash.flattenDeep(nested_arr); // function remove nested arrays and return all the elements in one array
console.log(arr_from_nested_arr);

// dev dependencies
// there are dev dependencies in package.json like dependencies but the difference between them that dev dependencies has the packages that we need for developing stage only and we don't need them in production and release stages like testing and formatting packages they are for the developer environment but they are not needed in the project no error will happen if someone downloaded the project and didn't download dev dependencies unlike dependencies 
// to install a package in dev dependencies we write (npm install nameOfThePackage -D)
// note: if someone downloaded our project and used (npm install) it will install dependencies and dev dependencies both of them but dev dependencies as we know they have no importance on running the code so they can remove them
// here we installed nodemon package in dev dependencies then we put in scripts in package.json "dev": "nodemon app.js" which allow us to enter dev mode using nodemon package by writing npm run dev in terminal and in this dev mode if we saved our code it run automatically and gives us info about the code like it has clean exit
// note: we also put "start": "node app.js" so when we write npm start it will run the code in app.js
// to uninstall a package we write npm uninstall nameOfThePackage or we can delete the name of the package from the dependencies and write npm install so it will install all the packages in dependencies only and the package we wanted to delete will be uninstalled


// Event loop
// event loop is how node js works while every other backend or api framework works by multithreaded idea 
// so multi threaded idea if we have some clients and each of them is making requests those requests are transferred to thread pool (queue of threads) each request is in a thread and the request is transferred by the thread to make I/O operation in database or filesystem or whatever and then transferred back into the thread then the thread terminate the request and give response to the client
// the problem with multi threaded idea is that if my clients are a lot with a lot of requests exceeds the number of threads it will make over flow in thread pool queue and our server crashes not taking new requests
// while event loop is for node js only it is an infinity loop another layer added to multi threaded idea between the client and the thread pool which makes node js single threaded as in event loop the requests of clients are classified into I/O operations and not I/O operations
// if the request is I/O operations so it goes through the event loop into the thread pool then the layer of database or file system whatever the I/O operation is then goes the other way to thread pool then event loop then client 
// while if the request is not I/O operations so it is done in the event loop itself and transfer back the response to the client that is what node js use and node js is single threaded
// and here is the async idea as the not I/O operations are done by the event loop while I/O operations at the same time are going into the thread pool and if they are more than one I/O operation so each of them is assigned into a different thread or different line

// here is an example on event loop concept
// the main thread of console.log written three times are done first by event loop then the async function which is an I/O operation done second on different thread in the thread pool
// then the infinity loop of event loop is applying the setInterval as every 2 seconds the setInterval sends a request to the event loop which responds to that request

console.log('start of the first task');
readFile('./content/mahmoud.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        /*console.log(result);
        console.log('end of first task');*/
    }
});
console.log('end system, set the second task');

/*setInterval(()=>{
    console.log('hi there');
},2000);

console.log('end of second task');*/

// second example on event loop
// here each request in our website like clicking reload is a request sent to the event loop which responds to that request that's why we printed sentence: request event happened

/*const server2 = http.createServer((req,res)=>{
    console.log('request event happened');
    res.end('welcome to our website');
});

server2.listen(7000,()=>{
    console.log('port 6000 has been assigned');
});*/



// async pattern
// async pattern doesn't magically convert synchronous code into asynchronous code but what it is actually used for is to put the async code in it so it is more manageable and readable and consistent with other async codes 
// and also to put this async code in a function that can be used in many places and even when that async code is running in a thread and still not done we can use the function we made by the async pattern in other place and again and again while all of them are done in different threads
// promise is very important built in function in node js as it has the status of the async code if it has finished it will return that status if an error happened it will return that status if it didn't return a status yet so the async code is still pending 

const getText = (path)=>{
    return new Promise((resolve,reject)=>{ // promise takes a callback function as a parameter and this callback function has 2 parameters resolve and reject
                                           // inside this callback function we put our async code 
                                           // it is very important where to place resolve() and reject() in our code
        readFile(path,'utf-8',(err,result)=>{
           if(err){
            reject(err); // when reject() is called it means that the promise is in reject status that an error happened to the function in promise and it can't be fulfilled and .catch() is applied after and the value put as a parameter in reject() will be transferred as the value of the parameter in the function put in .catch()
                         // the value put as a parameter in reject() is optional we can leave it reject() and it means failed status and .catch() is applied after but no value will be transferred as a parameter to the function in .catch()
           }
           else{
            
            resolve(result); // when resolve() is called it means that the promise is in a fulfillment status and .then() is applied after and the value which has been put as a parameter in resolve will be transferred as the value of the parameter of the function put in .then()
           };                // the value put as a parameter in resolve is optional we can leave resolve() like that and it means fulfillment status and .then() is applied after but no value will be tranfered to the function in .then()
        });                  // note: very important that we know that if we assign this function to a variable in async await the return of the function will be the value of the parameter in resolve so even though we can ignore it but in this case we will need to put it or it will return undefined in the variable assigned to

    });
};

getText('./content/xxx.txt').then((data)=>console.log(`read completed: ${data}`)).catch((reason)=>console.log(`failed this is why ${reason}`)); // here the function in .then() will be applied if promise status is fulfilled (resolve() function is called) and here the value of result will be transferred to the parameter of the function in .then() and the function in .catch() will be applied if the promise status is failed (reject() function is called) and here the value of err will be transferred as the value of the parameter of the function in .catch()



const writeText =(path,file1,file2)=>{
    return new Promise((resolve,reject)=>{
        writeFile(path,`1: ${file1}   2: ${file2}`,(wErr,wResult)=>{
            if(wErr) reject(wErr);
            else resolve(wResult);
            });

    });
};

// async await
// the job of async await is to catch the threads so if we have async function like the readfile above and we want to assign its return to a variable and use this variable in things so we use async await and catch that thread in a variable
// also it catches different threads so if we used the function above 3 times each in different thread of course or if we have another different async function in a different thread we can catch all of them (returns of them) into variables and use this variables together like 2 readfile and 1 writefile all done in the async await function
// so to summarize its job it completes the job of async pattern of promises it integrates threads together and allow me to carry operations on them in the async await so gives me sort of synchronous vibe as i can use the returns of different threads in my system and carry operations on them 

const getFiles_andWriteNew = async() =>{
try{        // so here we will wait till the function getText is done and assign its return (which by the way will be the value of the parameter of resolve() or reject() ) to a variable 
    const file1 = await getText('./content/xxx.txt');     // thread 
    const file2 = await getText('./content/mahmoud.txt'); // different thread
                                                          // note: the functions will be applied first then the returns assigned so if we where to put console.log(result) in the structure of getText() function it was gonna print it then assign the parameter of resolve to the variable
    await writeText('./content/concat.txt',file1,file2);                                                 
}
catch(err){
    console.log(err);
   }                        // note: we used try catch because if the return of the function getText is the err so as the function is applied first then the return is assigned to the variable after as we said before so an error will happen before the err assigned to the variable but that is not good code as if the error of the function wasn't gonna happen an err was gonna be assigned to the variable and then we use this variable in things
                            // so we used try catch as they are designed in js to catch any error 

                                              
};

getFiles_andWriteNew(); // do not forget to call the function to run the code inside it

// import util module
const util = require('util');

// util has a function called promisify we use util.promisify with any callback-based functions in node js to put them in the async pattern of promise so we can use them directly in async await 
// like we said just with callback-based functions which are the functions that take callback function as an argument where the parameters of this callback function is error and result and maybe more but should at least have those 2 like readFile and writeFile 
// so util.promisify convert callback-based functions into promise-based functions

// so now we can use readFileUtil and writeFileUtil directly in async await
const readFileUtil = util.promisify(readFile);
const writeFileUtil = util.promisify(writeFile);

const getFiles_andWriteNew2 = async()=>{
    
    try{
    const file3 = await readFileUtil('./content/xxx.txt','utf-8');     // do not forget the preferred arguments as util.promisify doesn't put our preferred arguments in readFile of course 
    const file4 = await readFileUtil('./content/mahmoud.txt','utf-8'); // but of course it put the argument of callback function has err and result to use them in reject and resolve
    await writeFileUtil('./content/concatUtil.txt',`file3: ${file3}  file4: ${file4}`);
                           }
    catch(err){
        console.log(err);
       } 
};

getFiles_andWriteNew2();

// we also can use .promises when we are importing the function from fs module only to convert callback-based functions in fs models into promise-based functions
// notice just for fs module' functions
/* const {readFile,writeFile} = require('fs').promises */   

// events in node js

// import event module
const EventEmitter = require('events');
// here we took an object from this class and use it to make events on it but in the following steps we will use the events directly on something like server.on('request',())
const customEmitter = new EventEmitter;

// here we make an event when event named response (we can name the event anything) happens this callback function is applied
customEmitter.on('response',()=>{
    console.log("we are here");
});
// we can repeat the same event and we can add parameters to the callback function that is applied when the event happens
customEmitter.on('response',(name,age)=>{
    console.log(`we are here again ${name} your age is ${age} `);
});
// we use .emit to make the event happens as it is not front end here we use .emit so the event happens and we pass the name of the event then the parameters of the callback function if they exist
// the big advantage of events in node js that when we emit the event all the events we made with that name will happen and the ones needed parameters the parameters we put in emit will go to them
customEmitter.emit('response','mahmoud',21);

// here we use the events of http module so request event is an event already known in http module not event we made like the last example 
// and the event request does the same job of callback function inside createServer when a request happened on this server the callback function of (req,res)=>{} will happen

/*const server5 = http.createServer();
server5.on('request',(req,res)=>{ // so here when we request the server res.end('welcome :)') will happen
                                  // we don't need .emit of course as request is a built in event of http module
    res.end('welcome :)');
});

server5.listen(5500);*/


// streams
// it is preferred to not deal with the files directly like we used to do with readFile and writeFile sync or async 
// instead we use streams there are readable streams, writable streams and both at the same time readable and writable streams where we can put our data deal with it and then after we finish working on it we can transfer it to a file or database or api or whatever
// that is because it is faster to deal with data in streams not in file

// import readable stream from file system module
const {createReadStream} = require('fs');

// to make a big data file to read it in a stream
for(let i = 0; i < 10000; i++){
    writeFileSync('./content/bigData.txt',`hi there ${i} - `,{flag: 'a'});
};

// here we used createReadStream() function which creates a readable stream 
// and it takes the path of the data maybe from a file or network and encoding and assign them to the stream
const stream = createReadStream('./content/bigData.txt','utf-8',{highWaterMark: 150000}); // here highWaterMark allows me to control the buffer capacity it's default is 64kb-64000 bytes as here it will appear the difference without utf-8 encoding that the data were in two buffers but we increased its capacity to take all data 

// we made an event (built-in event) 'data' which emitted when there is data in stream and has a callback function which has a parameter in this parameter is the data
stream.on('data',(result)=>{
  /*  console.log(result);   */
});
// we made an event (built-in event) 'error' which is emmited when an error happens in stream like no file in this path or network error and has a callback function of parameter which carries the error
stream.on('error',(err)=>{
    console.log(err);
});


// streams with http module
// this is a pattern used to read data inside the website using streams instead of reading from the file directly
// which is an important pattern as it is faster and the transfer-encoding will be chunked
/*http.createServer((req,res)=>{

    //const bigDataFile = readFileSync('./content/bigData.txt','utf-8');   // here is the code of reading the data from the file directly using readFileSync 
    //res.end(bigDataFile);

    // create a stream that has my data
    const bigDataStream = createReadStream('./content/bigData.txt','utf-8'); // instead we use streams

    // we made an event (built-in event) 'open' which is emitted with readable stream and writable stream
    // emmited with readable stream when the file opened successfully and the stream ready to read the data from it
    // emmited with writable stream when the stream is ready to recieve the data that will be written in it
    bigDataStream.on('open',()=>{
        bigDataStream.pipe(res); // very important .pipe() function is used to connect the output of one stream to the input of another stream typically but here we took the output of readable stream and made it the input of the respond of our website so we can write the read content in our website
                                 
    });

    bigDataStream.on('error',(err)=>{ 
        res.end(err);
    });


}).listen(5400);*/

// http meassages 
// http is appreviation for hypertext transfer protocol and to summarize it's job there is a request and a respond maybe from the user to the server of our application or maybe from our application to an api for another application that we need something from it
// the request and respond is done by http request and http respond as http is the way where anything connects to each other through the internet
// for example we need to use api for sending sms to phones to connect to this api we send http request which consists of header and body the header may carry the authentication and the body carries the information like the phone number and the content of the sms and it is in a json format
// the http respond consists of header and body too and in json format the header may carry the status of the respond with code like 200

/*const server6 = http.createServer((req,res)=>{

    console.log('request sent'); // when a request happens like reloading but if we write this and we didn't write a respond at all we will request the server but no respond will be given so it will just load and load without giving us a result
    res.writeHead(200,{'content-type' : 'text/html'});  // when we open the network of the website in the browser of course after requesting to enter this website we will notice the header of the respond which will carry the status code we written and the content type and that content type controls the type of content as if we changed text/html to text/plain it will write <h1>this is the home page</h1> as it is
    res.write('<h1> this is home page </h1>');       // we will use about 7 status codes in our life not all of the codes of course just the important ones like 200 which means successful and gives green mark while there is 404 the famous error which means not found 
    res.end(); // any respond should have an end
});
server6.listen(5300);*/

/*const server7 = http.createServer((req,res)=>{

    const url = req.url;
    // here we print request method and the request url so url maybe the home page the about page or any thing the user write in url
    // while request method can be GET or POST to differentiate between them for now GET is when the user requests and something appears in front of him like when he sees a button 
    // while POST is when the user interacts with the something appeared in front of him like clicking on that button
    // we will know later that GET sends the data in the url so limited length while POST sends data in the request body so a larger amount of data can be sent

    console.log(req.method,req.url);

    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>this is home page</h1>');
        res.end();
    }
    else if(url==='/about'){
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<h1>this is about page</h1>");
        res.end();
    }
    else{
        res.writeHead(404, { "content-type": "text/html" });
        res.write("<h2> 404 ERROR </h2> <h1>Sorry no content here</h1>");
        res.end();
    };

})
server7.listen(5200);*/



// here we read our html file using readFileSync and assign it to a variable 
const homePage = readFileSync('./js learn/index.html');

const hpManJpg = readFileSync("./js learn/man.jpg");
const hpMan2Jpg = readFileSync("./js learn/man2.jpeg");
const hp1Jpg = readFileSync("./js learn/1.jpg");
const hp2Jpg = readFileSync("./js learn/2.jpg");
const hp3Jpg = readFileSync("./js learn/3.jpg");
const hp4Jpg = readFileSync("./js learn/4.jpg");
const hpJs = readFileSync("./js learn/main.js");

/*const server8 = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage); // here we put the variable that carries our html file
                         // but we will face a problem that not all the content is here and there is a confusion and if we open network and see requests there are 404 errors so we print the request url to understand what is the problem
    res.end();           // we will see that the problem is the url takes the paths of the files in my project (style files .css or images or the js file) directly starts from their names and not starting from the name of the folder then the other folders then the name of the file and here we are especially talking about the js file
                         // so one solution is to remove all the files from the folders and put them in the main folder of the node project so the paths of them will be just their names like it did but it is not a good solution as we don't want all the files to be together
                         // instead we have another solution which is to read all the files using readFileSync and put their variables in res.write() after making if else with their url that appears when we printed the url of the request
                         // of course this is not an optimal solution especially with a lot of files and images and the optimal solution we will find out when using express js
  }else if (url === "/man.jpg") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(hpManJpg);
    res.end();
  } else if (url === "/man2.jpeg") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(hpMan2Jpg);
    res.end();
  } else if (url === "/1.jpg") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(hp1Jpg);
    res.end();
  } else if (url === "/2.jpg") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(hp2Jpg);
    res.end();
  } else if (url === "/3.jpg") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(hp3Jpg);
    res.end();
  } else if (url === "/4.jpg") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(hp4Jpg);
    res.end();
  } else if (url === "/main.js") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(hpJs);
    res.end();


  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>this is about page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h2> 404 ERROR </h2> <h1>Sorry no content here</h1>");
    res.end();
  }
});
server8.listen(4900);*/


// import express module 
const express = require('express');
// we are taking an instance from express module and express() function is provided by express module to take an instance from express module so we can use it
const app = express();
const { get } = require("https");
// here when we use .listen() in express it creates an internal server automatically and assign this port to it without the need to use http.createServer() and all of that
/*app.listen(4000,()=>{
    console.log('port 4000 assigned to our server');
});
// get method is a route handler for GET requests so here when GET request is invoked on the home page the callback function will be applied
app.get("/", (req, res) => {
  console.log("request invoked");
  res.send("<h1>Welcome to the Home Page</h1>"); // .send() is a function in express 
                                                 // the difference between .send and .write is that .send ends the response automatically so we can't write after it like using res.end() and of course due to that it is written once unlike .write and also there are differences in the types of data we will talk about it later
});

app.get('/about',(req,res)=>{
    res.send('<h1>this is about page</h1>');
});
// .all is a route handler for all methods not just GET so GET,post,etc. 
// "*" means it will match any path that is not specified so any path except '/' and '/about'
// note: we can ignore that code and express will make an error page itself if a different path is requested and with status 404 so we can remove this code
// and of course we can replace all by get we just wanted to know what all does
app.all("*", (req, res) => {
  res.status(404).send("no content");
});*/

// express.static is used to serve static files now when a request is applied on something inside this folder express will take care of finding that file for the request
// so this is the optimal solution for the problem happened before when we put the html file in our server and the requests done on the urls of the resources directly the names of them directly without the start of the path
// so here when this will happen express will find the resource for that request whatever the urls are from the folder we gave to express as a static and don't worry it doesn't take much space
// more about static assets in express js : what we put as a static in express, express is intelligent and when a bad request happens express starts to look at the statics we gave to it to handle this bad request 
// even the home page itself like here if we didn't specify the home page ("/") or the root so express starts to look at the statics we gave to it so here will find our html file in the folder we put as a static and will put it for our home page or root path but we should name this html file index.html in order for express to find it and assign it to the root page
// so express automatically assign the html file named index.html in the static to the root page or the home page if we didn't specify it
//app.use(express.static('./js learn'));


// we didn't need this code as express automatically assigned index.html to the root page
/*app.get("/", (req, res) => {   
  console.log("request invoked");
  res.sendFile(path.resolve(__dirname,'./js learn/index.html'));  // .sendFile() like .send() is a function in express
                                                                        // .sendFile() takes the path from the beginning so it needs from the c: drive that's why we used path.resolve() to concat the directory name with the path of our file
});

app.get("/about", (req, res) => {
  res.send("<h1>this is about page</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send("no content");
});

app.listen(200, () => {
  console.log("port 200 assigned to our server");
});*/


// API introduction
// API differs from SSR they are 2 different approaches with similarities in writing the code
// in summary API works with data we send a data request in json format to the API then API works with the database and return a respond with json format carrying the data we requested before
// for an example if we want to know the bank account balance the client use the software enters his code and this code is being put in a json format with a data request to the api to know the balance then api queries the database and returns the result of the query in a json format then it converts to the form that the user sees


// json files
// first of all we made a json file using array of objects in js (we made 2 arrays of objects in my-data.js file)
// we exported the two arrays from the module and imported the users array from the module here
const {users} = require('./my-data');

/*app.listen(300,()=>{
    console.log('port 300 is assigned to the server');
});

app.get('/',(req,res)=>{
    res.send('<h1>HOME PAGE</h1>  <a href = "api/data/users"> get users </a>'); // we made a hyper link so when we click on it carries us to the url api/data/users
});

// here we used get to handle the respond for the request on the url /api/data/users
app.get('/api/data/users',(req,res)=>{
    // here we made this code just to filter some of the properties of the objects we made in json file out, here we didn't want the emailAddress property in the objects so we mapped on the array of objects named users
    // we made const object with 3 properties only without the emailAddress property and assign the element named user to it the element we mean is the element of the array
    // so the data in element is assigned to the new object and the array had 3 elements so our object will be 3 objects with the data of the three objects in the array and just like that we filtered out the emailAddress property 
    // then we returned the objects we made and all of that is assigned to the new array (myUsers) which will be the array of objects that we will use
    const myUsers = users.map((user)=>{
        const {userId,name,phoneNumber} = user; 
        return {userId,name,phoneNumber};     
    });

    res.json(myUsers); // res.json() will send a json formatted response to the request on the given url
                       // .json() function takes objects or array of objects (or string that will be converted into json format) as a parameter
});

// route parameters

// the element in url is called parameter so 1 here is a parameter 
// if the user requested 1 we wrote that code to make a variable named myUser that carries the object in users array whose userId equals 1 
// using .find() function that takes callback function as a parameter which its parameter is the element in the something we applied .find() function on
app.get('/api/data/users/1',(req,res)=>{

    const myUser = users.find((user) => user.userId === 1);
    res.json(myUser);
});

// but we have a problem that if we have say 10000 users or items if we talking about e-commerce website for an example so now we need to write the above code 10000 times for each id in order to respond to the request on id 9999 for example
// the solution in express is using req.params by writing : before the parameter that we need to deal with so when the user requests the value of the parameter will be saved in property with the same name of that parameter (that we put : before it) in object called req.params
// so here we put : before Id parameter so the value in this place that the user will request will bes saved in object req.params in property named Id
app.get('/api/data/users/:Id',(req,res) => {

    console.log(req.params); // to print the object req.params to see it when a request happens
    const { Id } = req.params; // here we made an object with 1 property only named Id that takes its value from the property named Id too in the object req.params and this is why we named the property in this object Id in order to take the value from req.params
    const myUser = users.find((user) => user.userId === Number(Id)); // here we made a variable named myUser that carries the object in users array which its property userId equals to the value the user requested which is saved in Id property in the object we made that takes the value from req.params

    // here we print user not found in our website if the variable myUser has no value which happens if the user requested id that we don't have so when function find() is applied won't find any value to put in variable myUser 
    if(!myUser){
        res.send('user not found');
    };
    res.json(myUser);
});

// query string parameter

// it is a better way to access parameters than the way before
// here instead of writing : before the parameter we want to store its value the user goes to this url then adds ? after in the url any parameter he enters will be stored in req.query object which is similar to req.params object
// for example user enters /api/v1?Search=m&Limit=2 
// note : between the parameter and the one before it & is written  
// and by using this way if we have 10 parameters we don't need to write : before each one instead all parameters written after ? are stored in req.query
app.get('/api/v1',(req,res)=>{

    console.log(req.query); // to print req.query object
    const{Search,Limit} = req.query; // we made an object of 2 properties Search and Limit that will take their values from the values stored in req.query object
    let sUsers = [...users]; // here we copied the users array into another array so we don't risk the original data and this is the pattern to copy an array as if we wrote sUsers = users in js it passes by reference so any change in sUsers will change users too instead we use this pattern called spreading as it spreads the elements of the array

    if(Search){ // if Search not equal null (the user put a value in Search parameter)
        // so here the sUsers array we filter it and return the array with the elements or objects which their name property's value starts with the value user entered in Search parameter that has been stored in Search property in req.query then Search property in the object we made
        sUsers = sUsers.filter((user)=> { 
            return user.name.startsWith(Search.toUpperCase()); // we used .toUpperCase() as the names in our data start with capital letters so we want to make the letters user entered in capital too to match
        } );
    };
    if(Limit){ // if Limit not equal null (if the user put a value in Limit parameter)
        // so here sUsers will be sliced to return number of elements that the user entered in Limit parameter and of course the filtering happened first
        sUsers = sUsers.slice(0,Number(Limit));
    };
    if(sUsers.length<1){ // here if the Search and Limit parameters lead to that sUsers be an empty array we don't want to show it instead we want to return the meassage that no users found that their name starts with the value user entered in Search parameter
        res.status(200).json(`No Users Starts With ${Search}`);
    }
    else{ // else that sUsers is not an empty array we return it 
        res.status(200).json(sUsers);
    };

});


// middleware functions
// middleware functions are very important in express they are functions that have access to req and res parameters 
// so they are functions that we can reuse but the main thing that they have access to request and respond and they take them as parameters and the third parameter is a function named next that should be called at the end of the middleware function 
// if we have a code that we want to repeat in each get request or any request not just get so we want to put this code in a function to call in each request to become easier then we use middleware functions which are called in the parameters of app.get('url',middleware_function,(req,res)=>) before the callback function

// here we made a middleware function that we commented as we put it in a module we made for middleware functions and exported this function from it
// and here we called this function from the module to use
const {logger,authorize} = require("./middleware_functions");

/*const logger = (req,res,next)=>{ // the function's idea is simple it prints the request url, request method and date by making object from Date class
      const url = req.url;
      const method = req.method;
      const time = new Date().getFullYear();
      console.log(url, method, time);  
      
      next(); // next() function is called at the end of any middleware function so the next middleware function after it in the stack is applied and so on and if there is no next middleware function so in order to pass the control to the next route handler 
              // so if we didn't call next() function at the end the middleware function will work but no control will be passed to the next middleware or even route handler and the req-res cycle will be interrupted and no respond will reach to the user
              // so it is very important to call this function at the end and even if we removed it from the parameters the same thing will happen as we won't be able to call it so the req-res cycle will be interrupted

      // res.send('middleware function test'); // instead of calling next() function at the end we can make any respond the middleware function will be applied and here the difference that a respond will be sent but as we said no control will be passed to the next middleware function or route handler so req-res cycle will be interrupted and no respond after that will be sent
      
};*/


// instead of writing the name of middleware function in each request as a parameter we can just use app.use() and write the name of the middleware function as the parameter
// like that app.use(logger) 
// note : if we wrote app.use(logger) before the request it will be applied on this request while if we wrote it after the request so it won't be applied on it so if we have requests that we don't want the middleware function to be applied on we can just write this code after them
// here we put a part of url as a parameter before the name of the middleware function in order to that this function be applied on the requests with route starts with /api so the request with route /about the middleware function won't be applied on it
/*app.use("/api", logger);


// middleware function named logger won't be applied on that request due to the route we specified in app.use()
app.get('/about',(req,res)=>{

    res.send('about');
});

// in those 2 following requests the logger middleware function will be applied but the req.url that will be printed in logger function will start after /api as we specified the /api part already in app.use so this part won't be printed
app.get('/api/products',(req,res)=>{

    res.send('products');
});

app.get('/api/items',(req,res)=>{

    res.send("items");
});

// here we made another middleware function that we commented as we put it in the same module as the previous middleware function and export it it then call it in our app with the previous one

/*const authorize = (req, res, next) => {
  const { user } = req.query; // here we made an object of 1 property named user that takes its value from req.query object
  if (user) {                   // if user not null (the user entered a value for user parameter so user property is not null)
    // here we used some of authentication logic so if the value user entered is mahmoud (that we can replace by our data in a database file)
    if (user === "mahmoud") {
      req.user = { name: "mahmoud", id: 11 }; // req.user is an object like req.parms and req.query usually used in express so we can use it in route handler as here we put the data of the user in it so in route handler we can use it like if it is not null it means that the authentication is successfull so we render its content and show it and if it is null so authentication failed and we can redirect user into login page
    } else {
      return res.status(401).send("Unauthorized"); // if the parameter value not equal mahmoud we send that response to the user
                                                   // note: here we used return so the function stops there and doesn't apply next() function which will lead to apply the next middleware function or route handler which will lead to multiple responses to only 1 request and give us an error
    }
  }
  next(); // next() function is called in any case even if the user parameter is null so req-res cycle won't be interrupted except the else case that we put return in it so we don't run next() function that will lead to multiple responses to 1 request and give an error
};*/

// if we want to use app.use() and put more than 1 middleware function we put them in an array
/*app.use([authorize,logger]);

app.get('/api/profile',(req,res)=>{
    console.log(req.user); // here we print req.user that will print the data we put in this object in the middleware function
    res.status(200).send('profile');

});

app.get('/api/login',(req,res)=>{
    console.log(req.user);
    res.status(200).send('login');
});*/

// middleware function are like gates for the request that has to pass those gates in order to get a response from our api
// like authorization middleware functions or other types of middleware that the request will pass on first to get a response and whichever gate the request reaches and stop there will get an appropriate response to this level it reached


// Restful api methods (GET-POST-PUT-DELETE)
// GET is used to request a webpage or an object from the server for example a client wants to see the orders he ordered before from amazon website so we use GET method
// POST is used to send data or information from the client to server so when we showed the orders from amazon we want to reorder to of them now we send data from the client to the server so we use POST method
// PUT is used to send document to the server so large amount of data and differs from POST data
// DELETE is used to delete object from the server or database 

// here we imported languages array of objects from my-data module
const {languages} = require('./my-data');
// here we used express.static and put a folder that contains html file named index.html to show it in the home page '/' using express.static and this html file is a form that we can put input in then submit it
app.use(express.static('./post form'));

// read the parts under this code first until the first POST request then return to read this part about this single line of code
// req.body object will be undefined until we write this code as the value comes from the form needs to be parsed like it has to be encoded like it is in another language
// {extended:false} part means if false the value parsed and put in req.body will be string or array according to its complexity while if true it will be an object
app.use(express.urlencoded({extended: false}));

app.listen(850,()=>{
    console.log('port 850 is assigned to the server');
});
// here a normal get request 
app.get('/api/languages',(req,res)=>{
    const lang = [...languages] // we copied the languages array in another array so if we made changes to the copy so the original won't be corrupted
    res.status(200).json({success: true,data: lang});
});

// here is the html code od index.html which has the form

/*<div>
  <form action="/add-lang" method="POST"> // the route written in action should be the exact route we will made for the request
                                          // and here we specified POST method for the request in order to send data from the form so it will wait for a POST method code we should write
    <label for="lname">Lang name</label>
    <input type="text" id="lname" name="langname" placeholder="lang name.."> // what is written in name will be the property in req.body object that carries the value written in the input or in the form

  
    <input type="submit" value="Submit">
  </form>
</div>*/

app.post('/add-lang',(req,res)=>{ // here we made the POST request which is similar to a normal GET request

    console.log(req.body); // here we print the req.body object 
    const { langname } = req.body; // here we made an object of 1 property named langname as the name of property in req.body object that carries the value written in input and don't forget it is the same name in name=" " in the form specifications
    if(langname){ // if langname is not null
       return res.status(200).send(`this is the language you entered ${langname}`); // here we used return so if langname not null the code will stop at this return and doesn't continue and apply the other response after which will lead to 2 responses
    }
    res.status(404).send('do not leave that empty please write a language'); // will be applied if langname is null
});


// here we are talking about takin the data from the api and putting it directly inside our html without the need to reload the page or going to another url we want to show the data on time
// and we don't want to send the while DOM to the backend to handle the calculations instead we want to send only the thing that we need in calculations in backend and when the backend is done return that thing to me instead of the whole DOM
// this is done by using a library named axios
// and the following code is put in a js file or in script tag inside our html but we mean in front end not backend

/*<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> // this is the code that call axios library
<script>

const result = document.querySelector('.result'); // before that code we made an empty div with class named result and here we put it in a variable in js

const fetchlang = async()=>{ // we made a function but it will be async as axios needs await

    try{ // we used try and catch to catch any error

    const { data } = await axios.get('/api/languages'); // here axios helps us to take the data from the api we made before /api/languages which sends json of object {success: true,data: languages}
                                                        // so we made an object of property named data that actually will take not just the value of data property sent by the api but will take the whole object {success: true,data: languages} as a value of property data
    console.log(data); // here we printed the data property in the object we made to make sure that it really has the whole object as a value {success: true,data: languages} and notice that we can't put another name just data
    console.log(data.data); // and here we printed the data property in data property to make sure too
    const show_lang = data.data.map((_lang)=>{ // here we made an array that will take the value of data.data which is the array of objects contains the languages then applied map function on this array which returns the property language only in the objects of array  and put the value of them in <h5> tag
        return `<h5>${_lang.language}</h5>`
    });

    result.innerHTML = show_lang.join(''); // here we assign the array we made that now contains <h5> tag of the language property from the objects of the array we assign tat into the div we made earlier but we use .join() to make the array become string
    }
    catch(error){
    result.innerHTML = `<div class="alert-danger"> can't fetch data </div>`; // here if an error happened we assign <div> of a message in the div we already made earlier
    };

};

fetchlang(); // we call the function to run */ 


// here we want to apply what we learnt about sending only the thing we want to make calculations on to the backend not the whole DOM in POST context
// so here we will talk about this on POST request
// here we want to send the value that the user has written in the input to the backend to check is it null or not and send back the response and print the value in result div if it is not null
// so we send only the input's value to the backend not the whole DOM using axios library and take back only the response not the whole DOM too so there is no reload in our page

// this part in front end in index-js.html file in post form folder
// first of all we make variables for the input and the submit button and the small tag that we made for the alert to use these variables in our code
/*const input = document.querySelector(".form-input"); 
const btn = document.querySelector(".submit-btn");
const formAlert = document.querySelector(".form-alert");

btn.addEventListener("click", async (e) => {  // if we click on submit button async function is applied 
                                              // e is the event object
  e.preventDefault(); // and we use this code to prevent the default behavior for an event object which is click event in our case and its default behavior is to reload the page after clicking and we want to prevent that of course as not reloading is our purpose in this code
  const langValue = input.value; // here we put input.value in a variable to ease its use
  try {
    const { data } = await axios.post("/api/languages", { name: langValue }); // here we send to the POST request this object { name: langValue } and langValue is the variable carrying input.value
                                                                              // and we will take the response from POST request in object { data } we made
    const h5 = document.createElement("h5"); // here we make <h5> element and assign it to a variable named h5
    h5.textContent = data.lang; // read this part after reading the POST part
                                // here we put the data.lang as textcontent in h5 and data.lang will be the input's value user entered if it is not null
                                // and this is due to that data property will contain the response of the POST as we said earlier and if not null the response of POST is an object which has lang propert which carries input's value
    result.appendChild(h5); // here we append the h5 we made to the result div

  } catch (error) { // here in case of error which is seen when the response status indicate an error like 400 that we used
    formAlert.textContent = error.response.data.msg; // here formAlert variable which carries the small tag we will assign data.msg that is in the error to it as textcontent
                                                     // data property that carries the response from POST will have msg property in case of the input's value is null as we have written in POST code and this msg will be printed as it will be in the small tag
                                                     // note: error is an object that contains response object that come from POST which contains data object we made in axios which contains msg property
  };
  input.value = ""; // here we make sure that the input part returns empty after clicking so the user can write again in the input 
});*/


// here we use this code to parse json sent from html so we can use req.body it is like encoding
app.use(express.json());

app.post('/api/languages',(req,res)=>{ // post request
    const { name } = req.body; // here we made an object with property name as this is the property in the object sent by axios library that carries the input's value 
                               // and it will take its value from req.body which will contain the object sent by axios library {name: langValue}

    if(!name){ // if name is null so the input's value is null 
        return res.status(400).json({success: false, msg: `can't leave this empty`}); // so we send back this object and it is very important to write a status of error here as we will use it in catch in the frontend and if we used status like 200 it won't be seen as an error so we can't catch it and use it in catch in front end
    };                                                                                // we used return to stop here and not continue to the other response
    res.status(200).json({success: true, lang: name}); // here if name is not null as the input's value is not null we send this response back which is an object has a property named lang which carries the input's value which isn't null
});

// postman is used to test api 
// basics of postman is to install the application then open a workspace then choose the request method GET - POST - PUT - DELETE - ETC..
// then run your app we have to run it and put the url of the localhost and complete it with the url of the api you want to test 
// if it is a GET request then postman will show you the data that you sent
// if it is a POST request we go to body choose raw option then JSON will appear and write in json format the data sent to the api from user like in the last example data sent in name property for example {"name": "css"} and it will show you the result our POST api gives which in the last example object {success: true, lang: name} or object {success: false, msg: `can't leave this empty`}
// these are the basics and there are a lot of more information we can get from postman

// PUT method
// we use it to update data especially a large amount of data and if we don't need to do another operation just update
// we want to update the name of the language in languages array of objects in my-data module by entering the id of the language we want to update its name as a parameter

app.put('/api/languages/:id',(req,res)=>{ // here PUT method with the format used in GET and POST and we put :id as a parameter

    const { id } = req.params; // here we assign the value of property id in req.params object to id property of the object we made
    const { name } = req.body; // here we assign the name that the user will enter through req.body however from form in html or whatever to property name in the object we made
                               // note: we didn't make something in front end to take the name from the user however we will test the api through postman

    const lang = languages.find((l)=>  l.id === Number(id)); // here we made a variable named lang that carries the object in languages array of objects which has id equals to the id the user entered
    // and we made that variable so if the user entered a wrong id lang variable will be null so we can control the response when the user enters a wrong id

    if(!lang){ // if lang is null (so the user entered wrong id so we couldn't find object in languages with the id user entered to put in lang variable so it became null)
        return res.status(404).json({ // response with an error 404 and we used return so that if lang is null we don't continue to the other response
            success: false,
            msg: `id ${id} is not found`
        }); 
    };
    // this code will be applied if lang was not null and that means that the user entered a correct id
    const newList = languages.map((l)=>{  // here we made a new array and applied map function on languages array of objects 
        if(l.id === Number(id)){          // when the id of the object in languages array equals the id the user entered we update the value of property language with the name the user sent in req.body
            l.language = name;
        }
        return l; // then we return all the elements in languages after update in the new array
    });

    res.status(200).json({ // and we will send this response with the data property that carries the new array of objects with the updated name
        success: true,
        data: newList
    });

});

// DELETE method
// we use delete method to remove data 

// here we want to delete an object from languages array of objects by letting the user enter the id of the language we want to delete in the id parameter 
// and this api will be so similar to the put one we will make the lang variable here too and check by the same way if the id the user entered is right or wrong
app.delete('/api/languages/:id',(req,res)=>{
    
    const { id } = req.params;

    const lang = languages.find((l)=> l.id === Number(id)); // by the same way we check the id the user entered is right or wrong if right lang won't be null if wrong lang will be null
    if(!lang){
        return res.status(404).json(
            {
                success: false,
                msg: `id ${id} is not found`
            }

        );
    };

    const newList = languages.filter((l)=> l.id !== Number(id)); // we made a new array that will carry the objects in languages array of object but by filtering so it carries the objects which their id does not equal the id the user entered so the object that has the id the user entered will not be in that new array
    res.status(200).json({

        success: true,
        data: newList // the response will carry the new array we made without the object which its id equals to the one the user entered so we removed an object using delete method
    });
});


// routers 
// our application mostly is mvc (model-view-controller) and by the way even if it is not we use routers too but for us to explain is easier in mvc
// model is the shape of our database, view is the html that the user sees, controller is the code written in js to control the model when the user interact with the view
// so what does routers do? to summarize router concept is that we divide our api into routes and the routes that are similar to each other will be in a router
// so if we have GET-POST-PUT-DELETE methods on a route like /api/languages they all will be put in a router in another module as we said our app consists of a lot of modules we can't put all the operations in one page
// so we can make a router for authentication and another to manipulate certain data and we continue to divide our app
// then the browser can reach easier to the router it needs to show in the view which the user will interact with then the controllers reach to the model to get the data and then return it to the view again

// here we want to test how to make a router so we took the last two methods that were PUT and DELETE we copied them then put them in another file called (update-delete.js) in a folder called routes
// and we changed their route or path to /api/v1/update-delete to differntiate them from the original ones that we copied and tried them in postman 
// in order to make a router and call it in our app their are steps in the router and in our app 
// the steps in router are written in it in the file update-delete.js in routes folder read it first

// the steps in our app is first here we called the module which contains our router in our app
const updateDeleteLanguages = require('./routes/update-delete');
// we use app.use then we specify the route for our router as we said in the steps in router file that we specify the route here and remove it from the methods in the router file then we put the variable that we called the module in as a parameter in app.use
app.use('/api/v1/update-delete',updateDeleteLanguages);


// controllers 
// controllers are the functions that are done in the http method or like the api function that is carried out by methods like GET-POST-PUT-DELETE
// to summarize that we will make another folder named controllers which we will make files in it each file is the controllers for a specific router
// so each router has a controller file that has all the functions in the api methods GET-POST-PUT-DELETE
// and the reason to take the functions from the router and put them in a separate file is to make the code clen to make it more manageable this is how big companies work just a way of organization
// we will apply that on update-delete.js router in a controller file called languages-controller.js in controllers folder













