import React from 'react';

const InputField = (props) => {

  function handleSubmit(event) {
    event.preventDefault();
    if (props.searchTerm.length > 0) {
      props.handleSubmit(props.searchTerm);
    }
  }

  return (
    <div className="my-input-panel">
      <h1>WIKI VIEWER</h1>
      <form role="form" onSubmit={event => handleSubmit(event)}>
        <input className="my-input-field" type="text" value={props.searchTerm} onChange={event => props.handleType(event.target.value)} />
        <button className="my-submit-button"><span className="glyphicon glyphicon-search glyphicon-flipped"></span></button>
      </form>
      <button className="my-random-button"><a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">Go Random!</a></button>
    </div>
  );
}

export default InputField;
