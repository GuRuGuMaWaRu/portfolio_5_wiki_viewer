import React from 'react';
import ReactDOM from 'react-dom';
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
      textOpacity: 0,
      marginTop: 0
    };
    this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handle typing for search input field
  handleType(searchTerm) {
    let self = this;

    // collapse the list if it is cascaded
    if (this.state.animated === true) {
      // indicate that the list is collapsed, fade out text, collapse list
      self.setState({animated: false, textOpacity: 0, marginTop: 0});
    }
    // update value for the search input field
    this.setState({searchTerm});
  }

  // request wiki data
  handleSubmit(searchTerm) {
    let api_url = "https://en.wikipedia.org/w/api.php";

    // run request only after the list is collapsed (to avoid glitches)
    if (this.state.animated === false) {
      $.ajax({url: api_url,
             dataType: "jsonp",
             jsonp: "callback",
             data: {action: "opensearch",
                    search: searchTerm,
                    limit: this.state.searchNumber,
                    format: "json"},
             success: response => {
               // cascade the list only if there are search results
               if (response[1].length !== 0) {
                 // cascade list, set results, set animation flag to true, sgow text
                 this.setState({marginTop: 15, results: response, animated: true, textOpacity: 1});
               }
             }
      });
    } else {
      console.log('cannot submit, animation flag still TRUE');
    }
  }

  render() {
    return (
      <div className="my-container">
        <InputField searchTerm={this.state.searchTerm} handleType={this.handleType} handleSubmit={this.handleSubmit} />
        <List marginTop={this.state.marginTop} animated={this.state.animated} textOpacity={this.state.textOpacity} results={this.state.results} />
      </div>
    );
  }
};

ReactDOM.render(<Main />, document.getElementById('container'));
