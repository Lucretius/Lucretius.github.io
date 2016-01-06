import React from 'react'
import Radium from 'radium'

class Page extends React.Component {
  render() {
    var fillerText = (
      <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.`}</p>
    )

    return (
      <div style={styles.page}>
        <div style={styles.titleSection} className="row center-xs middle-xs">
          <div className="col-xs-12">
            <h1>Robert Lippens</h1>
            <div>Full Stack Developer</div>
          </div>
        </div>
        <div style={[styles.section, styles.first]} className="row center-xs">
          <div className="col-xs-12 col-md-7 col-lg-5">
            <h1>Front-End Development</h1>
            {fillerText}
          </div>
          <div className="col-xs-5">
            <div style={styles.image}></div>
          </div>
        </div>
        <div style={[styles.section, styles.second]} className="row center-xs">
          <div className="col-xs-5  start-xs">
            <div style={styles.image}></div>
          </div>
          <div className="col-xs-12 col-md-7 col-lg-5">
            <h1>Server-Side Code</h1>
            {fillerText}
          </div>
        </div>
        <div style={[styles.section, styles.third]} className="row center-xs">
          <div className="col-xs-12 col-md-7 col-lg-5">
            <h1>Passion</h1>
            {fillerText}
          </div>
          <div className="col-xs-5">
            <div style={styles.image}></div>
          </div>
        </div>
        <div style={[styles.section, styles.footer]} className="row center-xs">
          Contact Me
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
    background: '#673AB7',
    height: '400px'
  },
  section: {
    fontSize: '20px',
    textAlign: 'justify',
    lineHeight: '1.5',
    padding: '0 20px',
  },
  first: {
    backgroundColor: '#3F51B5',
  },
  second: {
    backgroundColor: '#2196F3',
  },
  third: {
    backgroundColor: '#03A9F4',
  },
  footer: {
    backgroundColor: '#E91E63',
  }
}

module.exports = Radium(Page)
