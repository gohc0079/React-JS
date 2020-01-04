import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';

/*const App = ()=>{
    window.navigator.geolocation.getCurrentPosition(
        
        (position)=> console.log(position),
        (err)=>console.log(err)
    );
    
    return (<div>Latitude: </div>); // <- statement gets executed first before component returns the geolocation positions
   
}*/

class App extends Component {
  
    constructor(props){
        super(props)
       // this.state  = {lat: null , errMsg : null}
        var temp;  
      
    }

    state = {lat : null , errMsg : ''}; // automatically declared constructor function
    
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
        
            (position)=> this.setState({lat:position.coords.latitude}),
            (err)=>this.setState({errMsg: err.message})
        );

    }
    showContent(){
  
        if(this.state.lat && !this.state.errMsg)
        {
         return (<SeasonDisplay lat = {this.state.lat} />);
        }
        else if (!this.state.lat && this.state.errMsg)
        {
         return (<SeasonDisplay lat = {this.state.errMsg} />);
        }
        else
        {
           return ( <Spinner message = "Please accept location request"/>);
        }
    }

    render() { 

      return(
          <div className = "border red">
              {this.showContent()};
          </div>
      )
      
        

       
    }
}
 
export default App;

ReactDOM.render(<App />,document.querySelector('#root'))