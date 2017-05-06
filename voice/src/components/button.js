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

  getButtonClasses() {
    if (this.state.isOn) {
      return ("animation pulse infinite");
    }
    return ("");
  }

  renderIcon() {
    if (this.state.isOn) {
      return (
        <i id="mic-button" className="material-icons">pause</i>
      );
    } else {
      return (
        <i id="mic-button" className="material-icons">mic</i>
      )
    }
  }

  render() {
    return (
      <footer className="page-footer">
        <div className="footer-copyright light-grey">
          <a
            id="mic-container"
            className={"btn-floating btn-large waves-effect waves-light red " + this.getButtonClasses()}
            onClick={() => this.onClick()}
          >
            { this.renderIcon() }
          </a>
        </div>
      </footer>
    );
  }
}

export default Button;
