import './SeasonDisplay.css';
import React, {
    Component
} from 'react';

const SeasonConfig = {
    summer : {
        text:"Lets hit the beach!",
        iconName: 'sun'
    },
    winter : {
        text:"Burrrr! Its chilly here",
        iconName: 'snowflake'
    }
};

const getSeason  = ( lat,month ) => {
    if(month > 2 && month <9)
    {
       return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
   
}
const SeasonDisplay = (props) => {
       
        const season = getSeason(props.lat,new Date().getMonth());
         
        const {text, iconName} = SeasonConfig[season]  //{text, icon} and text,iconName at const must be the same as the variables at seasonconfig object
          console.log( text);
        return ( 
        < div className = {`season-display ${season}`}>
        <i className = {`icon-left massive ${iconName} icon`}/>
        <h1>{text}</h1> 
        <i className = {`icon-right massive ${iconName} icon`}/>
        </div>)
        };


export default SeasonDisplay;