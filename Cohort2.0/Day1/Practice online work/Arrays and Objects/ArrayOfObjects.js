const usr1 = [
  {
    name: "Ujj",
    gender: "male",
  },
];

const usr11 = {
  name: "Ujj",
  gender: "male",
};

console.log(usr11);

const usr = [
  {
    name: "Kate",
    gender: "female",
  },
  {
    name: "Angie",
    gender: "female",
  },
  {
    name: "Ujjawal",
    gender: "Male",
  },
];

for (let i = 0; i < usr.length; i++) {
    if (usr[i]["gender"] == "male") {
        console.log(usr[i]["name"]);
    }
}