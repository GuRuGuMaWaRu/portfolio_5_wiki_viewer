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
      textOpacity: 0
    };
    this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handle typing for search input field
  handleType(searchTerm) {
    let self = this;

    // collapse the list if it is cascaded
    if (this.state.animated === true) {
      $('.my-list-item').animate({
        marginTop: '0'
      }, 500, () => {
        // fade out list items text
        self.setState({textOpacity: 0});
        window.setTimeout(() => {
          // indicate that the list is collapsed
          self.setState({animated: false});
        }, 1000);
      });
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
                 $('.my-list-item').animate({
                   marginTop: '15px'
                 }, 500);
               }
               // save response data, indicate that the list is cascaded, fade in text
               this.setState({results: response, animated: true, textOpacity: 1});
             }
      });
    }
  }

  render() {
    return (
      <div className="my-container">
        <InputField searchTerm={this.state.searchTerm} handleType={this.handleType} handleSubmit={this.handleSubmit} />
        <List animated={this.state.animated} textOpacity={this.state.textOpacity} results={this.state.results} />
      </div>
    );
  }
};

ReactDOM.render(<Main />, document.getElementById('container'));

// console.log('https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json');
