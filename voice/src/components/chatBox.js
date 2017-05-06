import React, { Component } from 'react';
import Header from './header';
import Bubble from './bubble';
import Button from './button';
import axios from 'axios';
import { connect } from 'react-redux';

class ChatBox extends Component {
  constructor(props) {
    super(props);

    this.recognition = new window.webkitSpeechRecognition();
    const speechRecognitionList = new window.webkitSpeechGrammarList();

    const grammar = '#JSGF V1.0; grammar names; public <name> = callistus | arvin ;';
    speechRecognitionList.addFromString(grammar, 1);
    this.recognition.grammars = speechRecognitionList;

    console.log(this.recognition.grammars);

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    const msg = new SpeechSynthesisUtterance(`Hey! I'm Voice!`);
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name === 'Whisper'; })[0];
    speechSynthesis.speak(msg);
  }

  onRecord() {
    // speech to text logic
    console.log("SAY SOMETHING");
    if ('webkitSpeechRecognition' in window) {
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
  		this.recognition.lang = 'en-AU';
  		this.recognition.start();
      let finalTranscripts = ''

      const instance = this;
      let newList = instance.state.messages.slice();
      newList.push({
        data: '...',
        isUser: true
      });
      instance.setState({
        messages: newList
      });

      this.recognition.onresult = function(event){
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

        // update the most recent message with text
        let newList = instance.state.messages.slice();
        newList[newList.length-1].data = finalTranscripts + " " + interimTranscripts;
        instance.setState({
          messages: newList
        });

        // r.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
        // upon complete translation
  		};

    }

    // upon receive response
  }

  onStop() {
    this.recognition.stop();

    // Removes empty "..." if no input received.
    if (this.state.messages[this.state.messages.length-1].data === "...") {
      let newList = this.state.messages.slice();
      newList.pop();
      this.setState({
        messages: newList
      });
      return;
    }

    const { messages } = this.state;
    const { data } = messages[messages.length-1];

    const { token } = this.props;

    const instance = this;
    // let newList = instance.state.messages.slice();
    // newList.push({
    //   data: '...',
    //   isUser: false
    // });
    // instance.setState({
    //   messages: newList
    // });

    // Send a POST request
    axios({
      method: 'post',
      url: 'http://172.22.112.93:1337/hackerdoggos/api/v1/query',
      data: {
        text: data,
        token
      }
    })
      .then((res) => {
        // let newList = instance.state.messages.slice();
        // newList.pop();
        // instance.setState({
        //   messages: newList
        // });

        // const { data } = res;

        // switch (data.intent.type) {
        //   case 'get_recent_posts':
        //     console.log("RECENT POSTS");
        //     break;
        //   case 'get_birthday':
        //     console.log('BIRTHDAY');
        //     break;
        // }
        console.log("RESPONSE");
        console.log(res);
        this.addMessage(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  addMessage(data) {
    console.log("Added message!");
    console.log(data);
    let newList = this.state.messages.slice();
    newList.push({
      data: data,
      isUser: false
    });
    this.setState({
      messages: newList
    });
  }

  renderMessages() {
    return this.state.messages.map(({isUser, data}, index) => {
      return (
        <Bubble
          key={index}
          isUser={isUser}
          data={data}>
        </Bubble>
      );
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={styles.containerStyle}>
          {this.renderMessages()}
        </div>

        <Button
          onRecord={this.onRecord.bind(this)}
          onStop={this.onStop.bind(this)} />
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

function mapStateToProps({ token }) {
  return { token };
};

export default connect(mapStateToProps)(ChatBox);
