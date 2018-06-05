var redux = require('redux');
var reducer = require('reducer');
var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f=>f
));

//store.subscribe(()=>console.log(store.getState()));

store.subscribe(()=>{
    var str = store.getState();
    document.getElementById('p-detail').innerHTML=JSON.stringify(str);
});

// store.dispatch({type:'IS_ADDING'});
// store.dispatch({
//     type:'ADD_ITEM',
//     item:'Huỳnh Phước Ngà'
// });
// store.dispatch({
//     type:'DEL_ITEM',
//     index:1
// });

module.exports=store;