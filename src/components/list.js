import React from 'react';
import ListItem from './list-item.js';

const List = (props) => {

  let itemlist = [],
        i = 0;

  function build(iterator) {
    for (let i = iterator, length = props.results[1].length; i < length; i++ ) {
      if (props.results[2][i].substr(-9) === 'can mean:' || props.results[2][i].substr(-9) === 'refer to:') {
        continue;
      } else {
        itemlist.push(<ListItem animated={props.animated} textOpacity={props.textOpacity}
          key={i} title={props.results[1][i]} text={props.results[2][i]}
          href={props.results[3][i]} />);
      }
    }
  }

  function buildEmpty() {
    itemlist.push(<ListItem animated={false} textOpacity={1} key={0} title="" centerText={"center"} text="Please enter a valid search request" href="#" />);
    for (let i = 1, length = 5; i < length; i++ ) {
      itemlist.push(<ListItem animated={false} textOpacity={props.textOpacity} key={i} title="" text="" href="#" />);
    }
  }

  if (props.results.length > 0) {
    if (props.results[1].length === 0) {
      buildEmpty();
    } else {
      build(0);
    }
    return (
      <div className="my-list">
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
