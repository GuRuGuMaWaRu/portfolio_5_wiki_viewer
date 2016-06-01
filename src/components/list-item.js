import React from 'react';

const ListItem = (props) => {
  return (
    <a href={props.href} target="blank">
      <div className="my-search-result">
          <h5>{props.title}</h5>
          <p>{props.text}</p>
      </div>
    </a>
  );
}

export default ListItem;
