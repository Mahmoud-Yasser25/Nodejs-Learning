const sayHello = (name)=>{
    console.log(`hello ${name}`);
};
// code to export the things in this module so when we call this module in other modules those things will be seen and can be used
module.exports = {sayHello}; // here we can remove the {} as it is only one item but we will need this code when we call this module in other modules so we can use this function by only its name 
                             // const { sayHello } = require("./functions");