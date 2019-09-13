import React from 'react'
// we pass props to List from our form App
// creates a list which will show what we submit through the form
const List = props => (
    <ul>
      {
        props.items.map((item, index) => <li key={index}>{item}</li>)
      }
    </ul>
  );

export default List