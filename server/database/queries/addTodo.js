const todo = require('../models/todo');

const todoQueries = {};
module.exports = todoQueries;

todoQueries.createUser = ({ title, description }) => {
  return todo.create({ title, description });
};

todoQueries.findAll = () => {
  return todo.find();
};

todoQueries.findOne = (title) => {
  return todo.findOne({ title });
};

todoQueries.deleteOne = (title) => {
  return todo.deleteMany({ title });
};

todoQueries.deleteAll = () => {
  return todo.deleteMany({});
};
