import React, { Component } from 'react';
import {connect} from 'react-redux'

const songDetail= ({song})=>{
   if( song)
   {
    return <div>
        <h3>Details for:</h3>
        <p> Title :{song.title}</p>
        <p>Duration :{song.duration}</p>
</div>
   }
   return <div></div>
    
}

const mapStateToProps = (state) =>{
   return  {song :state.selectedSong}
}

export default connect (mapStateToProps)(songDetail)