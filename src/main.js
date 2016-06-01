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
      searchNumber: 5
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSearch(searchTerm) {
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
            //  console.log('Response from inside API call: ' + response);
             this.setState({results: response});
            //  console.log('State from inside API call: ' + this.state.results);
           }
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="my-main-header">wiki viewer</h1>
        <InputField searchTerm={this.state.searchTerm} handleClick={this.handleClick} handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} />
        <List results={this.state.results} />
      </div>
    );
  }
};

ReactDOM.render(<Main />, document.getElementById('container'));
// console.log('https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json');
