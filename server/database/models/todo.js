const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
  title: { type: 'string', required: true },
  description: { type: 'string', required: true },
});

const todos = model('todos', todoSchema);

module.exports = todos;
