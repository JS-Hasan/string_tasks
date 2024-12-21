let objectOne = {
  name: "hasan",
  age: 30,
  study: ["SSC", "HSC", "BSC"],
  birthPlace: "Sylhet",
  skills: {
    basic: ["JS", "React"],
    advanced: {
      frontEnd: ["HTML", "CSS"],
      BackEnd: ["PHP"],
    },
  },
  profession: "Developer",
};

console.log(objectOne.skills.advanced.BackEnd);
console.log(objectOne.study[1]);
