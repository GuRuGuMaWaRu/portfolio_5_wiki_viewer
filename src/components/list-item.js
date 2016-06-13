import React from 'react';

class ListItem extends React.Component {

  render() {
    return (
      <div className="my-list-item">
        <a href={this.props.href} target="blank">
          <div className="my-search-result">
              <h5>{this.props.title}</h5>
              <p>{this.props.text}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default ListItem;
