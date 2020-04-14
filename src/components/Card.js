import React from 'react';


const card = (props) => {
    // In case I wanted to deconstruct -> const {contact: { pictureUrl, name, popularity}, index} = props
    return (
      <tr>
          <td> <img src={props.pictureUrl} alt =""/></td>
          <td> <h3>{props.name}</h3> </td>
          <td> <h4>{props.popularity}</h4></td>
          <td> <button className="btn" onClick={()=>props.delete(props.index)}>Delete</button></td>
      </tr>
    )
  };
  
  export default card;


