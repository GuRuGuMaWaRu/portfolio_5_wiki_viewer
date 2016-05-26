import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

import InputField from './components/input-field.jsx';
import List from './components/list.jsx';


class Main extends React.Component {

  handleClick() {
    fetch('https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json')
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <h1>Wiki Viewer</h1>
        <InputField />
        <List />
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    );
  }
};

ReactDOM.render(<Main />, document.getElementById('container'));
// console.log('https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json');
