const submitters = [
  {
    id: 1,
    firstName: "Securing React Apps with Auth0",
    lastName: "bengson",
    desc: "JavaScript",
    time: "13:29:33"
  },
  {
    id: 2,
    firstName: "Anna",
    lastName: "bengsonSON",
    desc: "JavaScript",
    time: "14:29:33"
  },
  {
    id: 3,
    firstName: "Auth0",
    lastName: "HEjhej",
    desc: "Lordbengson",
    time: "15:29:33"
  }
];



const newSubmitter = {
  id: null,
  firstName: "",
  lastName: "",
  desc: "",
  time: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newSubmitter,
  submitters
};

