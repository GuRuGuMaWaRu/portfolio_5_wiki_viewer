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
      results: [
        {
          id: 1,
          title: 'title-1',
          text: 'text-1'
        },
        {
          id: 2,
          title: 'title-2',
          text: 'text-2'
        }
      ]
    }
  }

  handleClick() {
      //API request
      var api_url = "https://en.wikipedia.org/w/api.php",
          search_term = 'tokyo';

      $.ajax({url: api_url,
             dataType: "jsonp",
             jsonp: "callback",
             data: {action: "opensearch",
                    search: search_term,
                    limit: 5,
                    format: "json"},
             success: function(response) {
             console.log(response);
          }
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="my-main-header">wiki viewer</h1>
        <InputField />
        <List results={this.state.results} />
      </div>
    );
  }
};

ReactDOM.render(<Main />, document.getElementById('container'));
// console.log('https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json');
