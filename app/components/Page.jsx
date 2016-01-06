import React from 'react';

export default class Page extends React.Component {
  render() {
    return (
      <div style={styles.page}>
        <div style={styles.titleSection}>
          <div className="row center-xs">
            <h1>Robert Lippens</h1>
          </div>
          <div className="row center-xs">
            <h4>Software Engineer</h4>
          </div>
        </div>
      </div>
    )
  }
}

var styles={
  page: {
    fontFamily: "'Lustria', sans-serif",
    color: 'white',
  },
  titleSection: {
    fontSize: '2em',
    background: '#3949AB'
  }
}
