import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: false
    };

    this.notification = new Audio("media/message-sent.mp3");
  }

  toggle() {
    this.setState({
      isOn: !this.state.isOn
    });
  }

  onClick() {
    if (this.state.isOn) {
      this.props.onStop();
      this.notification.play();
    } else {
      this.props.onRecord();
    }
    this.toggle();
  }

  getButtonClasses() {
    if (this.state.isOn) {
      return ("animation pulse infinite red-button");
    }
    return ("green-button");
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
            id="mic-container" style={{marginBottom: '20px'}}
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
