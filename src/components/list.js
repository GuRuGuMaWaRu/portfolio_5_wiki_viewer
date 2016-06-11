import React from 'react';
import ListItem from './list-item.js';

class List extends React.Component {
  componentDidUpdate() {
    if (this.props.results.length > 0) {
      console.log('animating!');
      $('.my-list-item').animate({
        marginTop: '15px'
      }, 300);
    }
  }

  render() {
    let itemlist = [],
        i = 0;

    if (this.props.results.length > 0) {
      if (this.props.results[2][0].substr(-9) === 'can mean:') {
        for (let i = 1, length = this.props.results[1].length; i < length; i++ ) {
          itemlist.push(<ListItem key={i} title={this.props.results[1][i]} text={this.props.results[2][i]} href={this.props.results[3][i]} />);
        }
      } else {
        for (let i = 0, length = this.props.results[1].length; i < length; i++ ) {
          itemlist.push(<ListItem key={i} title={this.props.results[1][i]} text={this.props.results[2][i]} href={this.props.results[3][i]} />);
        }
      }
      return (
        <div>
          {itemlist}
        </div>
      );
    } else {
      return (
        <div className="my-list">
        </div>
      );
    }
  }
}

export default List;
