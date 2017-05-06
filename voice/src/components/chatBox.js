import React, { Component } from 'react';
import Bubble from './bubble';
import Button from './button';

class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    const msg = new SpeechSynthesisUtterance('I see dead people!');
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name === 'Whisper'; })[0];
    speechSynthesis.speak(msg);
  }

  translate() {
  }

  onButtonClick() {
    // speech to text logic
    console.log("SAY SOMETHING");
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
  		recognition.lang = 'en-AU';
  		recognition.start();
      let finalTranscripts = ''

      recognition.onresult = function(event){
        let interimTranscripts = '';
        for (let i = event.resultIndex; i < event.results.length; i++){
          let transcript = event.results[i][0].transcript;
          transcript.replace("\n", "<br>");
          if (event.results[i].isFinal) {
            finalTranscripts += transcript;
          } else {
            interimTranscripts += transcript;
          }
        }
        console.log(finalTranscripts + " " + interimTranscripts);
        // r.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
        // upon complete translation
        let newList = this.state.messages.slice();
        newList.push({
          text: 'HELLO',
          isUser: true
        });
        this.setState({
          messages: newList
        });
  		};

    }

    // upon receive response
  }

  addMessage() {

  }

  renderMessages() {
    return this.state.messages.map(({isUser, text}, index) => {
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

        <Button
          onClick={this.onButtonClick.bind(this)}
          onMouseOver={this.onMouseUp.bind(this)} />
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
