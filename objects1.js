// a way to export on the go without the need to collect all what we want to export in one line of code
module.exports.items = ['item1','item2'];

const person = {
    name: 'ayman'
};
// another way to export on the go but here we changed the name that this object will be exported as from person to myperson so we still be able to use person here but use myperson in other modules
module.exports.myperson = person;

console.log(person);
//if we want to use the name it has been exported as but in the same module we have to use this.
console.log(this.myperson);