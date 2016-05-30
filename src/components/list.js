import React from 'react';
import ListItem from './list-item.js';

const List = (props) => {
  let itemlist;

  itemlist = props.results.map(function(result) {
    return <ListItem key={result.id} title={result.title} text={result.text} />;
  });

  return (
    <div>
      {itemlist}
    </div>
  );
}

export default List;
