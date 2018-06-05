function add(item) {
    return {type: 'ADD_ITEM', item}
}
function remove(index){
    return {type: 'DEL_ITEM', index}
}
function toggle(){
    return {type: 'IS_ADDING'}
}
module.exports = {add,remove,toggle};
