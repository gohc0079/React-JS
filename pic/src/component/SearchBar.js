import React, { Component } from "react";

class SearchBar extends Component {
  //arrow function shorten line of code by eliminating the need to create a function
  //controlled element allows react to handle the state -> centralizing all the data within the React component : only need to look up the state object
  // Do not need to look into the DOM to look upthe value

  onFormSubmit(event) {
    // onFormSubmit(event) <- onFormSubmit : function(event)
    event.preventDefault(); //stop the form from submitting/refreshing the page
    this.props.onSubmit(this.state.term);//<- callback to the parent onsubmit function 
    
  }


  state = { term: "" };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={event => this.onFormSubmit(event)} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={event => this.setState({ term: event.target.value })}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
