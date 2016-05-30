import React from 'react';
import ListItem from './list-item.js';

const List = (props) => {
  let list, itemlist;

  list = [
    {
      'id': 1,
      'title': 'result-1',
      'text': 'this is the result 1'
    },
    {
      'id': 2,
      'title': 'result-2',
      'text': 'this is the result 2'
    },
    {
      'id': 3,
      'title': 'result-3',
      'text': 'this is the result 3'
    }
  ];
  itemlist = list.map(function(item) {
    return <ListItem key={item.id} title={item.title} text={item.text} />;
  });

  return (
    <div>
      <h3>list</h3>
      <ul>
        {itemlist}
      </ul>
    </div>
  );
}

export default List;
