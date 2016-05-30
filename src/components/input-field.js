import React from 'react';

const InputField = (props) => {
  return (
    <div>
      <div className="jumbotron">
        <form>
          <div className="form-group my-form">
            <input type="text" className="form-control my-form-input" id="search" placeholder="Enter your query here" />
            <button type="button" className="my-form-button"><span className="glyphicon glyphicon-search"></span></button>
          </div>
        </form>
        <div className="my-number">
          <button type="button" className="my-number-button">1</button>
          <button type="button" className="my-number-button">5</button>
          <button type="button" className="my-number-button">10</button>
          <button type="button" className="my-number-button">20</button>
          <button type="button" className="my-number-button">40</button>
        </div>
      </div>
    </div>
  );
}

export default InputField;
