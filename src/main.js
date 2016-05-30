import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import './style.scss';

import InputField from './components/input-field.js';
import List from './components/list.js';


class Main extends React.Component {

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
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3>Wiki Viewer</h3>
          </div>
          <div className="panel-body">
            <InputField />
            <List />
            <button onClick={this.handleClick}>Click Me!</button>
          </div>
          <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<Main />, document.getElementById('container'));
// console.log('https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json');
