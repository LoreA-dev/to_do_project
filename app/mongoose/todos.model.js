const mongoose = require('mongoose');


const toDos = mongoose.model('toDos', { text: String, completed: {type: Boolean, default: false} });

module.exports = toDos;

// const todo = new toDos({ text: 'Cortar la cebolla', completed: false });
