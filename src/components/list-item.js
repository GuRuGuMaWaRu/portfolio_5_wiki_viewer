import React from 'react';

class ListItem extends React.Component {

  render() {
    return (
      <div className={this.props.animated ? "my-list-item cascaded" : "my-list-item"} style={{opacity: this.props.itemOpacity}}>
        <a href={this.props.href} target="blank">
          <div style={{opacity: this.props.textOpacity}} className="my-search-result">
              <h4>{this.props.title}</h4>
              <p>{this.props.text}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default ListItem;
