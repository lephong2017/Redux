import React from 'react';
import {connect} from 'react-redux';
import {remove} from 'action';
class Note extends React.Component{

    remove(){
        var {index,dispatch} = this.props;
        // dispatch({type:'DEL_ITEM',index:index});

        // dispatch({type:'DEL_ITEM',index});
        dispatch(remove(index));

    }

    render(){
        return(
                <div>
                    <p>{this.props.children}</p>
                    <button onClick={this.remove.bind(this)}>Delete</button>
                </div>
            )
    }
}

module.exports = connect()(Note);