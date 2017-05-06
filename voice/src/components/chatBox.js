import React, { Component } from 'react';
// import Speech from 'react-speech';
import Bubble from './bubble';
import Button from './button';

class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageList: []
    };
  }

  translate() {
  onButtonClick() {
    // speech to text logic

    // upon complete translation
    let newList = this.state.messageList.slice();
    newList.push({
      text: 'HELLO',
      isUser: true
    });
    this.setState({
      messageList: newList
    });

    // upon receive response
  }

  addMessage() {

  }

  renderMessages() {
    return this.state.messageList.map(({isUser, text}, index) => {
      return (
        <Bubble
          key={index}
          isUser={isUser}>
          {text}
        </Bubble>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="container" style={styles.containerStyle}>
          {this.renderMessages()}
        </div>

        <Button onClick={this.onButtonClick.bind(this)} />
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    paddingTop: '0.5rem'
  },
  textStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default ChatBox;
