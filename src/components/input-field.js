import React from 'react';

const InputField = (props) => {

  function handleSubmit(event) {
    event.preventDefault();
    props.handleSubmit(props.searchTerm);
  }

  function handleClick(event, searchNumber) {
    event.preventDefault();
    props.handleClick(searchNumber);
  }

  return (
    <div className="my-input-panel">
      <h1>WIKI VIEWER</h1>
      <form>
        <input type="text"></input>
        <button><span className="glyphicon glyphicon-search glyphicon-flipped"></span></button>
      </form>
    </div>
  );
}

export default InputField;

{/*<div className="jumbotron">
  <form role="form" onSubmit={event => handleSubmit(event)}>
    <div className="form-group my-form">
      <input type="text" className="form-control my-form-input" id="search" placeholder="Enter your query here" value={props.searchTerm} onChange={event => props.handleSearch(event.target.value)} />
      <button type="button" className="my-form-button"><span className="glyphicon glyphicon-search"></span></button>
    </div>
  </form>
  <div className="my-number">
    <button type="button" className="my-number-button" onClick={event => handleClick(event, 1)}>1</button>
    <button type="button" className="my-number-button" onClick={event => handleClick(event, 5)}>5</button>
    <button type="button" className="my-number-button" onClick={event => handleClick(event, 10)}>10</button>
    <button type="button" className="my-number-button" onClick={event => handleClick(event, 20)}>20</button>
    <button type="button" className="my-number-button" onClick={event => handleClick(event, 40)}>40</button>
  </div>
</div>*/}
