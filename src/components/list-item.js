import React from 'react';

class ListItem extends React.Component {

  render() {
    return (
      <div style={{zIndex: this.props.zindex, marginTop: this.props.marginTop + 'px'}} className={this.props.animated ? "my-list-item cascaded" : "my-list-item"}>
        <a href={this.props.href} target="_blank">
          <div style={{opacity: this.props.textOpacity, textAlign: this.props.centerText}} className="my-search-result">
              <h4>{this.props.title}</h4>
              <p>{this.props.text}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default ListItem;
