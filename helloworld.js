// function greeter (person){
//     return "Hello, " + person;
// }
//
// var user = "Dudi";
// console.log(greeter(user));

let text = "How are are are are you doing doing doing today?";
const myArray = text.split(" ");
// console.log(myArray);

let uniqueChars = [];
myArray.forEach((element) => {
    if (!uniqueChars.includes(element)) {
        uniqueChars.push(element);
    }
});
console.log(uniqueChars.join((' ')));
