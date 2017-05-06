import React, { Component } from 'react';

class Bubble extends Component {
  formatDate(dateList) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = parseInt(dateList[1]);
    var monthIndex = parseInt(dateList[0]);

    return monthNames[monthIndex-1] + ' ' + day;
  }

  formatDateTime(datetime) {
    let dateList = datetime.split("-");

    return this.formatDate([dateList[1], dateList[2].slice(0,2)]);
  }

  getPostUrl(post_id) {
    let idTuple = post_id.split("_");
    return "https://www.facebook.com/" + idTuple[0] + "/posts/" + idTuple[1];
  }

  renderPostLink(post_id) {
    return (
      <a href={ this.getPostUrl(post_id) } style={{ color: '#3B5998' }}><u>post</u></a>
    );
  }

  parseStory(str) {
    var strList = str.split(" ");
    var nameList = [];

    while (strList.length > 0) {
      var word = strList[0];
      if (/[A-Z]/.test(word[0])) {
        nameList.push(word);
        strList.splice(0, 1);
      } else {
        break;
      }
    }

    name = nameList.join(" ");
    str = strList.join(" ");

    return (
      <div>
        <span style={{ color: '#3B5998', fontWeight: 'bold' }}>
          { name + " " }
        </span>
        <span style={{ color: '#90949c' }}>
          { str }
        </span>
      </div>
    );
  }

  parseMessage() {

  }

  renderContent() {
    if (this.props.isUser) {
      return ( this.props.data );
    }

    if (this.props.data.intent === "birthday") {
      return ( this.props.data.name + "'s birthday is on " + this.formatDate(this.props.data.birthday.split("/")) + "." );
    } else if (this.props.data.intent === "latest_post") {

      let latestPost = this.props.data.data[4]; // only get first one

      var parsedStory = this.parseStory(latestPost.story);

      return (
        <div>
          <div className="summary">{"Here's the latest "} { this.renderPostLink(latestPost.id) } { "on " + this.props.data.name + "'s timeline." }</div>
          <div className="fb-post-card">
            <div> { this.parseStory(latestPost.story) } </div>
            <div style={{ color: '#90949c', fontSize: '0.9em', fontWeight: '200', marginBottom: '10px' }}> { this.formatDateTime(latestPost.created_time) } </div>
            <div > { latestPost.message } </div>
          </div>
        </div>
      );
      // <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbambimac%2Fposts%2F10157659674270581&width=500&show_text=true&height=497&appId" width="300" height="300" style={{border:'none', borderRadius:'15px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', overflow:'hidden'}} scrolling="no" allowTransparency="true"></iframe>
    }
  }

  render() {
    return (
      <div className="row" style={{marginBottom: '0'}}>
        <div className="card" style={this.getStyles().cardStyle}>
        { this.renderContent() }
        </div>
      </div>
    )
  }

  getStyles() {
    return ({
      cardStyle: {
        borderRadius: '20px',
        boxShadow: '4px 4px 2px 0 rgba(0, 0, 0, 0.14), -1px 3px 5px 0 rgba(0, 0, 0, 0.12), 0 0px 7px -2px rgba(0, 0, 0, 0.2)',
        float: (this.props.isUser) ? 'right' : 'left',
        verticalAlign: 'middle',
        marginBottom: '0.5rem',
        maxWidth: '400px',
        padding: '10px',
        paddingBottom: (this.props.isUser) ? '10px' : '5px',
        width: 'initial',
        wordWrap: 'break-word'
      }
    });
  }
}



export default Bubble;
