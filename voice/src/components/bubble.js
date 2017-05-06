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

  renderContent() {
    if (this.props.isUser) {
      return ( this.props.data );
    } else if (this.props.data === '...') {
      return (this.props.data);
    } else if (this.props.data.intent === undefined) {
      return ;
    }

    console.log("RENDERING CONTENT");
    console.log(this.props.data);

    switch (this.props.data.intent.type) {
      case 'get_birthday':
        return ( this.props.data.intent.person + "'s birthday is on " + this.formatDate(this.props.data.birthday.birthday.split("/")) + "." );
      case 'get_recent_posts':
        console.log("RECENT POSTS");
        console.log(this.props.data);

        let latestPost = this.props.data.feed.data[0]; // only get first one

        var parsedStory = this.parseStory(latestPost.story);

        return (
          <div>
            <div className="summary">{"Here's the latest "} { this.renderPostLink(latestPost.id) } { "on " + this.props.data.intent.person + "'s timeline." }</div>
            <div className="fb-post-card">
              <div> { this.parseStory(latestPost.story) } </div>
              <div style={{ color: '#90949c', fontSize: '0.9em', fontWeight: '200', marginBottom: '10px' }}> { this.formatDateTime(latestPost.created_time) } </div>
              <div > { latestPost.message } </div>
            </div>
          </div>
        );
      case 'get_nearby_events':
        return this.props.data.events.map((fb_event, index) => {
          return (
            <div key={index} style={{ marginBottom: "10px" }}>
              <div className="fb-post-card">
                <a href={ "https://www.facebook.com/events/" + fb_event.id } style={{ color: '#3B5998', fontWeight: 'bold' }}> { fb_event.name } </a>
                <div style={{ color: '#90949c', fontSize: '0.9em', fontWeight: '200', marginBottom: '15px' }}> { fb_event.description } </div>
                <div> { this.formatDateTime(fb_event.start_time) + " to " + this.formatDateTime(fb_event.end_time) } </div>
                <div > { fb_event.place.name } </div>
              </div>
            </div>
          );
        });
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
