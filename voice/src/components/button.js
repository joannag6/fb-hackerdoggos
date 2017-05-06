import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-copyright light-grey">
          <a id="mic-container" className="btn-floating btn-large waves-effect waves-light red">
            <i id="mic-button" className="material-icons">mic</i>
          </a>
        </div>
      </footer>
    );
  }
}

export default Button;
