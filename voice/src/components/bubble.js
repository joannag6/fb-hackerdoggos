import React, { Component } from 'react';

class Bubble extends Component {
  render() {
    if (this.props.isUser) {
      return (
        <div className="row" style={{marginBottom: '0'}}>
          <div className="card" style={this.getStyles().cardStyle}>
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return (
        <div className="row" style={{marginBottom: '0'}}>
          <div className="card" style={this.getStyles().cardStyle}>
            <div className="summary">{this.props.children}</div>
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbambimac%2Fposts%2F10157659674270581&width=500&show_text=true&height=497&appId" width="300" height="300" style={{border:'none', borderRadius:'15px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', overflow:'hidden'}} scrolling="no" allowTransparency="true"></iframe>
          </div>
        </div>
      );
    }
  }

  getStyles() {
    return ({
      cardStyle: {
        borderRadius: '20px',
        boxShadow: '4px 4px 2px 0 rgba(0, 0, 0, 0.14), -1px 3px 5px 0 rgba(0, 0, 0, 0.12), 0 0px 7px -2px rgba(0, 0, 0, 0.2)',
        float: (this.props.isUser) ? 'right' : 'left',
        verticalAlign: 'middle',
        marginBottom: '0.5rem',
        maxWidth: '600px',
        padding: '10px',
        paddingBottom: (this.props.isUser) ? '10px' : '5px',
        width: 'initial',
        wordWrap: 'break-word'
      }
    });
  }
}



export default Bubble;
