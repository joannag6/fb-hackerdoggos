import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: false
    };
  }

  toggle() {
    this.setState({
      isOn: !this.state.isOn
    });
  }

  onClick() {
    this.toggle();
    this.props.onClick();
  }

  renderButton() {
    if (this.state.isOn) {
      return (
        <a
          id="mic-container"
          className="btn-floating btn-large waves-effect waves-light red"
          onClick={this.onClick}
        >
          <i id="mic-button" className="material-icons">mic</i>
        </a>
      );
    } else{
      return (
        <a
          id="mic-container"
          className="btn-floating btn-large waves-effect waves-light red"
          onClick={this.onClick}
        >
          <i id="mic-button" className="material-icons">mic</i>
        </a>
      );
    }
  }

  render() {
    return (
      <footer className="page-footer">
        <div className="footer-copyright light-grey">
          {this.renderButton()}
        </div>
      </footer>
    );
  }
}

export default Button;
