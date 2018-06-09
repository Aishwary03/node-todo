var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://Aishwary03:mongodb123@ds141720.mlab.com:41720/todoapp" || "mongodb://localhost:27017/TodoApp");

module.exports = {mongoose};