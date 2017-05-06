import React, { Component } from 'react';
import Bubble from './bubble';

class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messageList: []
    };
  }

  render() {

    return (
      <div className="container" style={styles.containerStyle}>
        <Bubble>HELLO</Bubble>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    height: '700px'
  },
  textStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default ChatBox;
