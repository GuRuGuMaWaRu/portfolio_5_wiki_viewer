import React from 'react';

class ListItem extends React.Component {
  // console.log(document.getElementsByClassName('my-list-item'));
  // document.getElementsByClassName('my-list-item').className = 'animated';
  componentDidMount() {
    // document.getElementsByClassName('my-list-item').className = 'my-list-item animated';
  }

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
