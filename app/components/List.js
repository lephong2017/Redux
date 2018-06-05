import React from 'react';
import Note from 'Note';
import NoteForm from 'NoteForm';
import {connect} from 'react-redux';
class List extends React.Component {
    // add(text){
    //     this.state.mang.push(text);
    //     this.setState(this.state);
    // }
    //
    // remove(index){
    //     this.state.mang.splice(index,1);
    //     this.setState(this.state);
    // }

    render() {
        return (
            <div>
                {/*<NoteForm handleAdd={this.add.bind(this)}/>*/}
                <NoteForm/>
            {
                this.props.mang.map(
                    (e, i) =>
                       // <Note handleRemove={this.remove.bind(this)}
                        <Note index={i} key={i}>{e} </Note>
                )
            }
            </div>
    )

    }


}

module.exports = connect(function (state) {
    return {
        mang:state.mang
    }
})(List);
