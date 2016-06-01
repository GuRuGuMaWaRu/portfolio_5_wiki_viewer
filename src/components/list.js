import React from 'react';
import ListItem from './list-item.js';

const List = (props) => {
  let itemlist = [];

  if (props.results.length > 0) {
    // console.log(props.results[1].length);
    // console.log(props.results);
    for (let i = 0, length = props.results[1].length; i < length; i++ ) {
      // console.log('creating item list...');
      itemlist.push(<ListItem key={i} title={props.results[1][i]} text={props.results[2][i]} href={props.results[3][i]} />);
      // console.log(itemlist);
    }
  }
  // console.log(itemlist);
  // for (let i = 0, lenght = props.results[1].length; i < length; i++ ) {
  //   itemlist.push(<ListItem title={props.results[1][i]} text={props.results[2][i]} />);
  // }

  // itemlist = props.results.map(function(result) {
  //   console.log(result);
  //   return <ListItem title={result.title} text={result.text} />;
  // });

  return (
    <div>
      {itemlist}
    </div>
  );
}

export default List;
