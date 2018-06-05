var redux = require('redux');
var mang = require('./mangReducer.js');
var isAdding = require('./isAddingReducer.js');
var reducer = redux.combineReducers({ mang, isAdding});

// var mangReducer = require('./mangReducer');
// var isAddingReducer = require('./isAddingReducer');
// var reducer = redux.combineReducers({
//     mang:mangReducer,
//     isAdding:isAddingReducer
// });
module.exports = reducer;