let arr = [
  {
    name: "Aayushi",
    gender: "Female",
    company: "1Rivet",
  },
  {
    name: "Ankit",
    gender: "Male",
    company: "1Rivet",
  },
  {
    name: "Aman",
    gender: "Male",
    company: "1Rivet",
  },
  {
    name: "Abhishek",
    gender: "Male",
    company: "1Rivet",
  },
  {
    name: "Nirali",
    gender: "Female",
    company: "1Rivet",
  },
  {
    name: "Sushil",
    gender: "Male",
    company: "1Rivet",
  },
  {
    name: "Shreya",
    gender: "Female",
    company: "1Rivet",
  },
];

let arr2 = [
  {
    name: "Mrunal",
    gender: "Male",
    company: "1Rivet",
  },
  {
    name: "Sneha",
    gender: "Female",
    company: "1Rivet",
  },
  {
    name: "Haswini",
    gender: "Female",
    company: "Infosys",
  },
  {
    name: "Tanmay",
    gender: "Male",
    company: "1Rivet",
  },
  {
    name: "Viral",
    gender: "Male",
    company: "1Rivet",
  },
];

console.log(arr);

console.log(arr2);

//returns array at position 2 of arr.
console.log(arr.at(2));

//returns last second array.
console.log(arr.at(-2));

//combines arr2 with arr.
console.log(arr.concat(arr2));

const isFrom1Rivet = (person) => person.company === "1Rivet";
const isNotFrom1Rivet = (person) => person.company != "1Rivet";
// Returns true only if the function passed returns true for all values in the Array.
console.log("1Rivet : ", arr.every(isFrom1Rivet));
console.log("Other company : ", arr2.every(isFrom1Rivet));

//pop() removes the last element of the array
console.log(arr.pop());

//push() add the array at the end
console.log(
  arr.push({
    name: "Shreya",
    gender: "Female",
    company: "1Rivet",
  })
);

//shift() removes the first array element
console.log(arr.shift());

//unshift() adds a new element at the beginning of the array.
console.log(
  arr2.unshift({
    name: "Yash",
    gender: "Male",
    company: "1Rivet",
  })
);

//removes the element
console.log(arr.splice(0, 1));

//it will create a new array
console.log(arr2.slice(2));

//it sort the array alphabetically
console.log(arr.sort());

//it reverse the array elements.
console.log(arr2.reverse());

//
