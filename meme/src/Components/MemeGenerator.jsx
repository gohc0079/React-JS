import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();

    this.state = {
      allMemeImgs: {},
      toptext: "",
      bottomtext: "",
      randomImg: "http://i.imgflip.com/1bij.jpg"
    };
  }
  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.imgflip.com/get_memes";
    this.setState({ loading: true });
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(data => {
        const { memes } = data.data;
        // this.setState({ allMemeImgs: memes });
        this.setState(() => {
          return { allMemeImgs: memes };
        });
      });
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    //get a random int (index in the array)
    //Math.random gives a number between 0.0 - 1.0
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    console.log(this.state.allMemeImgs.length);
    console.log(randNum);
    const randMemeimg = this.state.allMemeImgs[randNum].url;
    //set "randomImg" to the '.url' of the random item i grabbed
    this.setState({ randomImg: randMemeimg });
  };

  render() {
    return (
      <React.Fragment>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="toptext"
            placeholder="Top Text"
            value={this.state.toptext}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomtext"
            placeholder="Bottom Text"
            value={this.state.bottomtext}
            onChange={this.handleChange}
          />
          <button className="btn btn-danger btn-sm m-2">Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.toptext}</h2>
          <h2 className="bottom">{this.state.bottomtext}</h2>
        </div>
      </React.Fragment>
    );
  }
}

export default MemeGenerator;
