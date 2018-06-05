var defaultState = require('./defaultState.js');
var isAddingReducer=(state=defaultState.isAdding,action)=>{
    switch (action.type){
        case 'IS_ADDING' :
            return !state
            break;
        default:
            return state;
    }
};
module.exports = isAddingReducer;