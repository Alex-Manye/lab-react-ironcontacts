import React from 'react';


const card = (props) => {
    // In case I wanted to deconstruct -> const {contact: { pictureUrl, name, popularity}, index} = props
    //bug -> toFixed(2) is not working in popularity
    return (
      <div className="card-wrapper">
 
          <img src={props.pictureUrl} alt ="" style={cardStyle}/>
          <h3>{props.name}</h3> 
          <h4>{props.popularity}</h4>
          <button className="delete-btn" onClick={()=>props.onDelete(props.index)}>Delete</button>

      </div>
    ) 
  };
  
  export default card;


const cardStyle = {
    display: "flex",
}