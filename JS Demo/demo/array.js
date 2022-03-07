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
console.log("Array at index 2:",arr.at(2));

//returns last second array.
console.log("Array at index -2:",arr.at(-2));

//combines arr2 with arr.
console.log("Concate two arrays:",arr.concat(arr2));

//join
console.log("Join:",arr2.join("****"))

//entries
// console.log("entries:",arr.entries())

const isFrom1Rivet = (person) => person.company === "1Rivet";
const isNotFrom1Rivet = (person) => person.company != "1Rivet";
// Returns true only if the function passed returns true for all values in the Array.
console.log("1Rivet : ", arr.every(isFrom1Rivet));
console.log("Other company : ", arr2.every(isFrom1Rivet));

//pop() removes the last element of the array
console.log("Array pop:",arr.pop());

//push() add the array at the end
console.log("Array push:",
  arr.push({
    name: "Shreya",
    gender: "Female",
    company: "1Rivet",
  })
);

//shift() removes the first array element
console.log("Array shift:",arr.shift());

//unshift() adds a new element at the beginning of the array.
console.log("Array unshift:",
  arr2.unshift({
    name: "Yash",
    gender: "Male",
    company: "1Rivet",
  })
);
console.log("New array:",arr2);

//removes the element
console.log("Splice:",arr.splice(0,1));

//it will create a new array
console.log("Slice:",arr2.slice(2));

//it sort the array alphabetically
console.log("Sort:",arr.sort());

//it reverse the array elements.
console.log("Reverse:",arr2.reverse());

//find
console.log("Find:",arr2.find(test=> test.name==="Tanmay"))

//filter
console.log("Filter:",arr.filter(test=>test.gender==="Female"))
