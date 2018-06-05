var defaultState = {
    mang:   [
        "Nguyễn Lê Phong", "Nguyễn Tấn Hậu", "Nguyễn Phúc Thịnh", "Nguyễn Văn Tân"
    ],
    isAdding:false
};
// var reducer = (state = defaultState, action) => {
//     switch (action.type){
//         case 'IS_ADDING' :
//             return  {...state , isAdding:!state.isAdding}
//             break;
//         case 'ADD_ITEM' :
//             return  {...state , mang:[...state.mang,action.item]}
//             break;
//         case 'DEL_ITEM' :
//             return  {...state , mang:  state.mang.filter((e,i)=> i != action.index) }
//             break;
//         default:
//             return state;
//     }
//
// };
module.exports=defaultState;