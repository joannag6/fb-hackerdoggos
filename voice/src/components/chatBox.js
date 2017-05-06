import React, { Component } from 'react';
import Bubble from './bubble';
import Button from './button';

class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageList: []
    };
  }

  onButtonClick() {
    console.log("HELLO");
  }

  render() {
    return (
      <div>
        <div className="container" style={styles.containerStyle}>
          <Bubble isUser={false}>HELLO</Bubble>
          <Bubble isUser={true}>HELLO</Bubble>
          <Bubble isUser={false}>HELLO</Bubble>
          <Bubble isUser={true}>HELLO</Bubble>
          <Bubble isUser={false}>HELLO</Bubble>
          <Bubble isUser={true}>HELLO</Bubble>
          <Bubble isUser={false}>HELLO</Bubble>
          <Bubble isUser={true}>HELLO</Bubble>
          <Bubble isUser={false}>HELLO</Bubble>
          <Bubble isUser={true}>HELLO</Bubble>
          <Bubble isUser={false}>HELLO</Bubble>
          <Bubble isUser={true}>HELLO</Bubble>
          <Bubble isUser={false}>HELLO</Bubble>
          <Bubble isUser={true}>HELLO</Bubble>
          <Bubble isUser={false}>HELLO</Bubble>
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
