const submitters = [

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

