import React, { Component } from 'react';

class Bubble extends Component {
  render() {
    return (
      <div className="row" style={{marginBottom: '0'}}>
        <div className="card" style={this.getStyles().cardStyle}>
          {this.props.children}
        </div>
      </div>
    );
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
        width: 'initial',
        wordWrap: 'break-word'
      }
    });
  }
}



export default Bubble;
