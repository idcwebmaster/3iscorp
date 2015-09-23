/**
For 3IS Inc
Developed by Marco Somo
copyright 2015
 */
var Site = React.createClass({
  render: function() {
    return (
      <div className="main">
          <Header />
          <Nav />
          <Centerpiece />
          <CPWidget />
          <CPBlurb />
          <ColumnLeft />
          <ColumnMiddle />
          <ColumnRight />
      </div>
    );
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <div className="header-section">
        <a href="/">
          <img src="img/3ISLogoGold.png" alt="logo" width="100px" />
        </a>
        <h2 className="headerTitle">
          3IS, Inc 
        </h2>
        <span>
           Think Success
        </span>
      </div>
    );
  }
});

var Nav = React.createClass({
  render: function() {
    return (
      <div className="nav-section">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/story">3IS Story</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/income-tax">Income Tax</a></li>
          <li><a href="/insurance">Insurance</a></li>
          <li><a href="/investment">Investment</a></li>
          <li><a href="/contact">Contact</a></li> 
        </ul>
      </div>
    );
  }
});

var Centerpiece = React.createClass({
  render: function() {
    return (
      <div className="centerpiece-section">
        <img src="/img/cp-image.png" alt="Centerpiece" />
      </div>
    );
  }
});

var CPWidget = React.createClass({
  render: function() {
    return (
      <div className="cp-widget-section">
        <h1>What is 3IS?</h1>
        <ul>
          <li><a href="/income-tax">Income Tax</a></li>
          <li><a href="/insurance">Insurance</a></li>
          <li><a href="/investment">Investment</a></li>
        </ul>
      </div>
    );
  }
});

var CPBlurb = React.createClass({
  render: function() {
    return (
      <div className="cp-blurb-section">
        <h3>At 3IS we believe It does not matter which "I" your start with, the other 2 are waiting for you </h3>
      </div>
    );
  }
});

var ColumnLeft = React.createClass({
  render: function() {
    return (
      <div className="column-left-section">
        <h3>Income Tax </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit eros, bibendum in ipsum vel, aliquet scelerisque lacus. Aliquam neque mauris, laoreet non enim sed, euismod accumsan dolor.</p>
      </div>
    );
  }
});

var ColumnMiddle = React.createClass({
  render: function() {
    return (
      <div className="column-middle-section">
        <h3>Insurance </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit eros, bibendum in ipsum vel, aliquet scelerisque lacus. Aliquam neque mauris, laoreet non enim sed, euismod accumsan dolor.</p>
      </div>
    );
  }
});

var ColumnRight = React.createClass({
  render: function() {
    return (
      <div className="column-right-section">
        <h3>Investment </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elit eros, bibendum in ipsum vel, aliquet scelerisque lacus. Aliquam neque mauris, laoreet non enim sed, euismod accumsan dolor.</p>
      </div>
    );
  }
});
React.render(
  <Site />, document.body
);
