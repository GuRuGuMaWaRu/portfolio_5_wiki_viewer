import React from 'react';
import ListItem from './list-item.js';

const List = (props) => {

  let itemlist = [],
      i = 0,
      invalidEntry1 = /can mean/,
      invalidEntry2 = /refer to/;

  function buildList(iterator) {
    for (let i = iterator, length = props.results[1].length; i < length; i++ ) {
      if (invalidEntry1.test(props.results[2][i]) || invalidEntry2.test(props.results[2][i])) {
        continue;
      } else {
        itemlist.push(<ListItem animated={props.animated} textOpacity={props.textOpacity}
          key={i} title={props.results[1][i]} text={props.results[2][i]}
          href={props.results[3][i]} />);
      }
    }
  }

  function buildEmptyList() {
    itemlist.push(<ListItem animated={false} textOpacity={1} key={0} title="" centerText={"center"} text="Please enter a valid search request" />);
    for (let i = 1, length = 5; i < length; i++ ) {
      itemlist.push(<ListItem animated={false} textOpacity={props.textOpacity} key={i} title="" text="" href="#" />);
    }
  }

  if (props.results.length > 0) {
    if (props.results[1].length === 0) {
      buildEmptyList();
    } else {
      buildList(0);
    }
    return (
      <div className="my-list">
        {itemlist}
      </div>
    );
  } else {
    buildEmptyList();
    return (
      <div className="my-list">
        {itemlist}
      </div>
    );
  }
}

export default List;
