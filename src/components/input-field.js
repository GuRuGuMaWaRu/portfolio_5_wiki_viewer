import React from 'react';

const InputField = (props) => {

  function handleSubmit(event) {
    event.preventDefault();
    props.handleSubmit(props.searchTerm);
  }

  return (
    <div className="my-input-panel">
      <h1>WIKI VIEWER</h1>
      <form role="form" onSubmit={event => handleSubmit(event)}>
        <input type="text" value={props.searchTerm} onChange={event => props.handleSearch(event.target.value)} />
        <button className="my-submit-button"><span className="glyphicon glyphicon-search glyphicon-flipped"></span></button>
      </form>
      <button className="my-random-button"><a href="https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json" target="blank"></a>Go Random!</button>
    </div>
  );
}

export default InputField;
