import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import './style.scss';

import InputField from './components/input-field.js';
import List from './components/list.js';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchTerm: '',
      searchNumber: 5,
      animated: false,
      opacity: 0
    };
    this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleType(searchTerm) {
    let self = this;

    if (this.state.animated === true) {
      $('.my-list-item').animate({
        marginTop: '0'
      }, 600, () => {
        window.setTimeout(() => {
          self.setState({animated: false, opacity: 0});
        }, 500);
      });
    }
    this.setState({searchTerm});
  }

  handleClick(searchNumber) {
    this.setState({searchNumber});
  }

  handleSubmit(searchTerm) {
    let api_url = "https://en.wikipedia.org/w/api.php";

    $.ajax({url: api_url,
           dataType: "jsonp",
           jsonp: "callback",
           data: {action: "opensearch",
                  search: searchTerm,
                  limit: this.state.searchNumber,
                  format: "json"},
           success: response => {
             console.log(response);
             this.setState({results: response, animated: true, opacity: 1});
             $('.my-list-item').animate({
               marginTop: '15px'
             }, 600);
           }
    });
  }

  render() {
    return (
      <div className="my-container">
        <InputField searchTerm={this.state.searchTerm} handleClick={this.handleClick} handleType={this.handleType} handleSubmit={this.handleSubmit} />
        <List opacity={this.state.opacity} results={this.state.results} />
      </div>
    );
  }
};

ReactDOM.render(<Main />, document.getElementById('container'));

// console.log('https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json');
