import React from 'react';
import ListItem from './list-item.js';

const List = (props) => {

  let itemlist = [],
        i = 0;

  function build(iterator) {
    for (let i = iterator, length = props.results[1].length; i < length; i++ ) {
      itemlist.push(<ListItem animated={props.animated} textOpacity={props.textOpacity}
        key={i} title={props.results[1][i]} text={props.results[2][i]}
        href={props.results[3][i]} />);
    }
  }

  function buildEmpty() {
    for (let i = 0, length = 5; i < length; i++ ) {
      itemlist.push(<ListItem animated="false" textOpacity={props.textOpacity} key={i} title="" text="" href="#" />);
    }
  }

  if (props.results.length > 0) {
    if (props.results[1].length === 0) {
      console.log('what kind of search query is that?');
      buildEmpty();
    } else if (props.results[2][0].substr(-9) === 'can mean:' || 'refer to:') {
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
    buildEmpty();
    return (
      <div className="my-list">
        {itemlist}
      </div>
    );
  }
}

export default List;
