import React from 'react';
import ListItem from './list-item.js';

const List = (props) => {

  let itemlist = [],
        i = 0;

  function build(iterator) {
    for (let i = iterator, length = props.results[1].length; i < length; i++ ) {
      itemlist.push(<ListItem opacity={props.opacity}
                              key={i}
                              title={props.results[1][i]}
                              text={props.results[2][i]}
                              href={props.results[3][i]} />);
    }
  }

  if (props.results.length > 0) {
    if (props.results[2][0].substr(-9) === 'can mean:' || 'refer to:') {
      build(1);
    } else {
      build(0);
    }
    return (
      <div>
        {itemlist}
      </div>
    );
  } else {
    for (let i = 0, length = 4; i < length; i++ ) {
      itemlist.push(<ListItem opacity={props.opacity}
                              key={i}
                              title=""
                              text=""
                              href="#" />);
    }
    return (
      <div>
        {itemlist}
      </div>
    );
  }
}

export default List;
