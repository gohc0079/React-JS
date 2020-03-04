import React, { Component } from 'react';
import {connect } from 'react-redux'
import {selectSong } from '../actions'
class songList extends Component {
  
    renderList(){
        return this.props.songs.map((song)=>{
            return (
                <div className = 'item' key={song.title}>
                    <div className = 'right floated content'>
                       <button className = 'ui button primary' onClick={()=>this.props.selectSong(song)}>
                           Select
                       </button>
                    </div>
                    <div className = "content">
                        {song.title}
                    </div>
                </div>
            );
        })
    }
    render(){
    return <div className = "ui divided list">{this.renderList()}</div>
    }
}

//state is the entire list of songs as well as selected songs 
const mapStateToProps = (state) => {
    console.log(state)
    return {songs:state.songs }

}
//anything that is passed into the connect with return as props
export default connect(mapStateToProps,{selectSong})(songList)