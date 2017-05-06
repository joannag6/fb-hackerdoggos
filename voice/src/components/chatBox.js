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

  render() {

    return (
      <div className="container" style={styles.containerStyle}>
        <Bubble isUser={true}>
          <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FiBabyPanda%2Fvideos%2F1343105299071758%2F&show_text=1&width=560" width="560" height="684" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameborder="0" allowTransparency="true">

          </iframe>
        </Bubble>
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
