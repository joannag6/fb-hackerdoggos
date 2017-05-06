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

  componentDidMount() {
    var msg = new SpeechSynthesisUtterance('I see dead people!');
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

      recognition.onresult = function(event){
        var interimTranscripts = '';
        var finalTranscripts;
        for(var i = event.resultIndex; i < event.results.length; i++){
          var transcript = event.results[i][0].transcript;
          transcript.replace("\n", "<br>");
          if(event.results[i].isFinal){
            finalTranscripts += transcript;
          }else{
            interimTranscripts += transcript;
          }
        }
        console.log(finalTranscripts + " " + interimTranscripts);
        // r.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
        // upon complete translation
        let newList = this.state.messageList.slice();
        newList.push({
          text: 'HELLO',
          isUser: true
        });
        this.setState({
          messageList: newList
        });
  		};

    }

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
