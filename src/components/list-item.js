import React from 'react';

const ListItem = (props) => {
  return (
    <div className="my-search-result">
      <h5>{props.title}</h5>
      <p>{props.text}</p>
    </div>
  );
}

export default ListItem;
