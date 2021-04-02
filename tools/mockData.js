const submitters = [
  {
    id: 1,
    firstName: "Securing React Apps with Auth0",
    lastName: "bengson",
    desc: "JavaScript"
  },
  {
    id: 2,
    firstName: "Korv",
    lastName: "bengsonSON",
    desc: "JavaScript"
  },
  {
    id: 3,
    firstName: "Auth0",
    lastName: 1,
    desc: "Lordbengson"
  }
];



const newSubmitter = {
  id: null,
  firstName: "",
  lastName: "",
  desc: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newSubmitter,
  submitters
};

