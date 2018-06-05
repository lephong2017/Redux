import React from 'react';
import {connect} from 'react-redux';
import {add,toggle} from 'action';
class FormNote extends React.Component{

    toggle(){
       var {dispatch} = this.props;
       // dispatch({type:'IS_ADDING'});
        dispatch(toggle());
       // this.state.isAdding = !this.state.isAdding;
       // this.setState(this.state);
    }
    add(e){
        e.preventDefault();
        // this.props.handleAdd(this.refs.txt.value);
        // this.refs.txt.value='';
        // this.toggle();
        var {dispatch} = this.props;
        // dispatch({type:'ADD_ITEM',item: this.refs.txt.value});
        // dispatch({type:'IS_ADDING'});
        dispatch(add(this.refs.txt.value));
        dispatch(toggle());

    }
    render(){
        if(this.props.isAdding)
        return(
            <form onSubmit={this.add.bind(this)}>
                <input type="text" ref="txt" placeholder="Xin mời nhập nội dung...."/>
                <button > Add note</button>
            </form>
        )
        return (<button onClick={this.toggle.bind(this)}>Add Note</button>)
    }
}

module.exports = connect(function(state){
    return {isAdding: state.isAdding}
})(FormNote);
