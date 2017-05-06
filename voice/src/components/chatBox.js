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

      let data1 = {id: "749012631926082", birthday: "03/02/1996", intent: "birthday", name: "David Lei"};

      let data2 = {intent: "latest_post", name: "David", paging:
        {next: "https://graph.facebook.com/v2.9/749012631926082/feed?access_token=EAADxJ5QX8c0BAIZCHiKzTsDj1BAebA4mZANH7QYZAZBnVKOsnJZCotEn7VSsjfCFSbvWKF8cRiUdARTofeqLeQoRZAMpy0JAxbaO7cUrmrHHvVfv7ArYdD14vXHOYOknN9TMeNYZCBnDLvOGTCIuV3ZBGUtZBkTNeB1wZD&limit=25&until=825753600&__paging_token=enc_AdCO2qBAZCq8sSoPC9eVcjYgOaQZA7SqEz7GDdLetIfQjKFrywze4mQihBwb3NdZA3nsaZAVeRpCtJFSzIH36JtAE2Q0QodgzguxpSURoWMYXWZBO2wZDZD",
         previous: "https://graph.facebook.com/v2.9/749012631926082/feed?since=1489466706&access_token=EAADxJ5QX8c0BAIZCHiKzTsDj1BAebA4mZANH7QYZAZBnVKOsnJZCotEn7VSsjfCFSbvWKF8cRiUdARTofeqLeQoRZAMpy0JAxbaO7cUrmrHHvVfv7ArYdD14vXHOYOknN9TMeNYZCBnDLvOGTCIuV3ZBGUtZBkTNeB1wZD&limit=25&__paging_token=enc_AdAk1SqimUcOMEIt26bltEpkXoPMW2ZCYyMLa11XacVL2PHQpZAZB7Tw24SQZAwCazif8V4FOIVLDZCnUeEcWUWbLZAx9yoVbd7mtW7RYYnLoEn4DahQZDZD&__previous=1"},
         data: [
            {created_time: "2017-03-14T04:45:06+0000",
              id: "888264361271698_1215848835179914",
              story: "Ursa College added a new photo — with David Lei and 10 others at Main Dining Hall (Monash Clayton Campus Centre)."},
            {created_time: "2017-03-03T01:26:08+0000", id: "749012631926082_715809135246432", story: "David San and 45 others wrote on David Lei's Timeline."},
            {created_time: "2017-02-26T12:37:57+0000", id: "749012631926082_713871648773514", story: "Stephanie Anne Chua updated her cover photo."},
            {created_time: "2017-02-25T10:35:36+0000", id: "749012631926082_713322875495058", story: "David Lei with Deanna Veale and 9 others.", message: "What a cute bunch of interns :')"},
            {created_time: "2017-02-10T22:51:12+0000", id: "749012631926082_705117436315602", story: "Celine Tye updated her cover photo.", message: "Thanks guys for the awesome summer and everyone else at Google x"},
            {created_time: "2017-02-10T12:07:27+0000", id: "749012631926082_704880636339282", story: "David Lei updated his cover photo.", message: "Intern fam + that one full timer <3"},
            {created_time: "2017-02-09T11:40:51+0000", id: "749012631926082_704352749725404", story: "David Lei updated his profile picture.", message: "Intern boat cruise. Theme: safari."},
            {created_time: "2017-01-26T10:42:46+0000", id: "749012631926082_697972533696759", story: "Mission Room Escape Sydney with David Lei and 6 others at Mission Room Escape Sydney.", message: "<3 great work guys ! it's nice to have yous here !"},
            {created_time: "2017-01-23T11:26:29+0000", id: "749012631926082_695823773911635", story: "David Lei added 3 new photos — with Conway Ying at Google Sydney.", message: "Testing Google's kayaks"},
            {created_time: "2017-01-17T21:11:49+0000", id: "749012631926082_692885584205454", story: "Vivian YD with David Lei and 9 others at Capitol Theatre.", message: "Thanks fam for making this magical night possible  <3 <3 <3"},
            {created_time: "2016-12-24T15:19:36+0000", id: "749012631926082_681161538711192", message: "Follow my high school tradition for New Years, it's been a meaningful year for me. Meeting Jonathan Thamrin was the most wonderful thing happening to me, thank you for being there for me every time. Bestie Andrew Wei Lun Wong, you are so mean all the time but nice some time when I need supports hahaha :p and thank you for letting me stay at your place. David Lei halo Pokémon freak haha, thank you for sharing tech tips with me and hopefully we can be on a team next year for more programming stuff :D Sarah Karim Sarah baby hahaha you are the first girl hanging out with me since I came to Melb and so glad we are both koreabooes :3 can't wait to go Korea with you next year!!! Ben Zackerovski hey micool, although we don't talk anymore but thank you for teaching me Linux, correcting my English and introducing me to your nerdy but interesting friends :D It was quite a good time talking with you and I'm still glad we were close :) Jono Wong we've only known each other for a verrry short time but it was quite a lovely time :D thank you for teaching me cook and watching anime with me. (Carry me in league that as well haha) hopefully we can hang out more when I come back. Jason Nguyen last but not least, haha you always have so many funny things to share with me, your cat, food, drama and etc. You are so supportive to your friends and easy to get along with :D let's have more BBQ and dessert in the new year :D\nRip my poor English but my appreciation is real :p thank you all guys :D merry Christmas 🎄"},
            {created_time: "2016-09-26T11:12:11+0000", id: "749012631926082_634756926684987", story: "Sam Perkins Creative added 3 new photos to the album: Beccatrix's 21st — with David Lei and 4 others.", message: "Beccatrix's 21st"},
            {created_time: "2016-09-24T08:08:14+0000", id: "749012631926082_633486436812036", story: "Robogals Monash with David Lei and 6 others.", message: "Melbourne uni is so impressed by Monash they named a road after us!\n#monash>melb #apsine2016"},
            {created_time: "2016-08-05T03:57:54+0000", id: "749012631926082_611690245658322", story: "Orion College added a new photo — with David Lei and 8 others."},
            {created_time: "2016-08-02T02:36:28+0000", id: "749012631926082_610346029126077", story: "David Lei updated his profile picture.", message: "trying to be asian"},
            {created_time: "2016-08-02T02:35:27+0000", id: "749012631926082_610345829126097", story: "David Lei updated his cover photo.", message: "Cinque Terre!"},
            {created_time: "2016-08-02T00:05:03+0000", id: "749012631926082_610286442465369", story: "David Lei added 40 new photos to the album: Being a tourist — with Hameed Khan."},
            {created_time: "2016-07-20T01:06:07+0000", id: "749012631926082_604408169719863", story: "Chris Teh with David Lei and Hameed Khan at Platform 9 & 3/4, King's Cross.", message: "Catching the late train"},
            {created_time: "2016-07-16T10:33:38+0000", id: "749012631926082_602865079874172", story: "Chris Teh updated his cover photo."},
            {created_time: "2016-06-23T14:50:32+0000", id: "749012631926082_593825880778092", story: "Chris Teh with David Lei and 2 others at Melbourne International Airport (MEL).", message: "Obligatory bye melbourne post\nNext stop, Italy!"},
            {created_time: "2015-03-02T13:28:13+0000", id: "749012631926082_414409165386432", story: "Dharni Giri and 23 others wrote on David Lei's Timeline."},
            {created_time: "2014-08-29T11:11:14+0000", id: "749012631926082_337401183087231", message: "Thanks David Lei for the nomination! \nIt took longer to post due to the hours of professional editing i so clearly invested in! Rachell, Brad, John, You're up next! \nps. thanks Lucy for accompanying me on this journey, im cooler than you! haha get it!! #ALSIceBucketChallenge"},
            {created_time: "2014-07-21T10:40:34+0000", id: "749012631926082_312982508862432", message: "Omg u caved aswell D:"},
            {created_time: "1996-03-02T08:00:00+0000", id: "749012631926082_312951455532204", story: "David Lei added a life event from March 2, 1996: Born on March 2, 1996."}]
          };

      let data3 = {paging:
        {cursors:
          {after: "QVFIUkRlSlU1Nlo0NDN1MTZAzUlg4UC1TbmlWM2lRN1V5YW42Nzd0SzY0MEFKWF9jbG9YT2ExWHJldHpqOXIwMHJwOW5QZAndic2pNMWYwSk1XTk1jbHB1MlpB",
            before: "QVFIUkRlSlU1Nlo0NDN1MTZAzUlg4UC1TbmlWM2lRN1V5YW42Nzd0SzY0MEFKWF9jbG9YT2ExWHJldHpqOXIwMHJwOW5QZAndic2pNMWYwSk1XTk1jbHB1MlpB"}},
         data: [{id: "749012631926082", name: "David Lei"}],
         summary: {total_count: 833}
       };
       console.log(data2);
       this.addMessage(data2);
      return;
    }

    const { messages } = this.state;
    const { text } = messages[messages.length-1];

    const { token } = this.props;

    // Send a POST request
    axios({
      method: 'post',
      url: 'http://172.22.112.93:1337/hackerdoggos/api/v1/query',
      data: {
        text,
        token
      }
    })
      .then((res) => {
        console.log(res);
        // this.addMessage(res.data)
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
