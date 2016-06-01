import React from 'react';
import ListItem from './list-item.js';

const List = (props) => {
  let itemlist = [],
      i = 0;

  if (props.results.length > 0) {
    console.log(props.results[2][0].substr(-9));
    if (props.results[2][0].substr(-9) === 'can mean:') {
      for (let i = 1, length = props.results[1].length; i < length; i++ ) {
        itemlist.push(<ListItem key={i} title={props.results[1][i]} text={props.results[2][i]} href={props.results[3][i]} />);
      }
    } else {
      for (let i = 0, length = props.results[1].length; i < length; i++ ) {
        itemlist.push(<ListItem key={i} title={props.results[1][i]} text={props.results[2][i]} href={props.results[3][i]} />);
      }
    }
  }

  return (
    <div>
      {itemlist}
    </div>
  );
}

export default List;
