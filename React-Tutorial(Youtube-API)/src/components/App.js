import React, { Component } from "react";
import SearchBar from "./Searchbar";
import youtube, { baseParams } from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = { items: [], selectedVideo: null };
  componentDidMount(){
    this.onTermSubmit('buildings');
  }
  onTermSubmit = async term => {
    const reponse = await youtube.get("/search", {
      params: {
        ...baseParams,
        q: term
      }
    });
   // console.log(reponse.data);
    this.setState({ 
      items: reponse.data.items,
      selectedVideo:reponse.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit} />
        <div className = "ui grid">
          <div className ="ui row" >
            <div className = "eleven wide column">
        <VideoDetail video={this.state.selectedVideo} />
        </div>
        <div className = "five wide column">
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.items}
        />
        </div>
         </div>
        </div>
      </div>
    );
  }
}

export default App;
