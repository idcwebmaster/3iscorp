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
        <div className="logoImage">
          <a href="/">
            <img src="img/3ISLogoGold.png" alt="logo" width="100px" />
          </a>
        </div>
        <div className="headerTitle">
          <h2>
            3IS,&nbsp;Inc. 
          </h2>
          <span>
             Think&nbsp;Success
          </span>
        </div>
      </div>
    );
  }
});

var Nav = React.createClass({
  getInitialState: function() {
    return { showNav: false };
  },
  onClick: function() {
    
    if(this.state.showNav == false){
      this.setState({ showNav: true });
    }

    if(this.state.showNav == true){
      this.setState({ showNav: false });
    }
  },

  render: function() {
    return (
      <div className="nav-section">
        <div className="desktop-tablet-nav">
          <Results />
        </div>
        <div className="hamburger"><a href="#" onClick={this.onClick}>&#9776;</a></div>
        <div className="mobile-nav">
          { this.state.showNav ? <Results /> : null }
        </div>  
      </div>
    );
  }
});

var Results = React.createClass({
    render: function() {
        return (
        <ul>
          <li><a href="/" className="selected">Home</a></li>
          <li><a href="/story">3IS Story</a></li>
          <li><a href="/income-tax">Income Tax</a></li>
          <li><a href="/insurance">Insurance</a></li>
          <li><a href="/investment">Investment</a></li>
          <li><a href="/contact">Contact Us</a></li> 
        </ul>
        );
    }
});

var Centerpiece = React.createClass({
  render: function() {
    return (
      <div className="centerpiece-section">
        <img src="img/cp-image.png" alt="Centerpiece" />
      </div>
    );
  }
});

var CPWidget = React.createClass({
  render: function() {
    return (
      <div className="cp-widget-section">
        <h1>What is 3"i"S?</h1>
        <ul>
          <li>i: Income Tax</li>
          <li>i: Insurance</li>
          <li>i: Investment</li>
        </ul>
      </div>
    );
  }
});

var CPBlurb = React.createClass({
  render: function() {
    return (
      <div className="cp-blurb-section">
        <h3>At 3IS we believe that it does not matter which "i" your start with, the other 2 are waiting for you </h3>
      </div>
    );
  }
});

var ColumnLeft = React.createClass({
  render: function() {
    return (
      <div className="column-left-section">
        <h3>Income Tax </h3>
        <p>3IS provides you everything you need from licensing, training, software, tools and ongoing support to build a successful full service Income Tax preparation business. 3IS creates a win-win situation where everyone is a winner. Everything you need to compete with national brands and capture market share from top competitors is provided to you for absolutely no costs. Just promise us you will work hard and smart to be the best in your market so we can celebrate our success together.</p>
        <a href="/income-tax" className="button-link">More Info</a>
      </div>
    );
  }
});

var ColumnMiddle = React.createClass({
  render: function() {
    return (
      <div className="column-middle-section">
        <h3>Insurance </h3>
        <p>From Auto and Home insurance products to Life and Health insurance, 3IS is the right choice to start and expand your insurance business.  You do NOT need any prior experience. All your need is your desire to build and grow a successful and profitable insurance business.   As always, with 3IS there is no upfront costs, no secrets and no fine print. We look for success partners for the long run. As simple as that. </p>
        <a href="/insurance" className="button-link">More Info</a>
      </div>
    );
  }
});

var ColumnRight = React.createClass({
  render: function() {
    return (
      <div className="column-right-section">
        <h3>Investment </h3>
        <p>If you ever wanted make your entry into the world of investment, financial services, and retirement planning with top financial rewards and residual income but have no idea where to start, we are very excited to hear from you. We will help you get licensed, then we will fully train you, support you and give you access to hundreds of investment products so you can focus on serving the best interest of your clients. All of it at a compensation structure that fairly rewards you hard work.</p>
        <a href="/investment" className="button-link">More Info</a>      
      </div>
    );
  }
});


React.render(
  <Site />, 
  document.body
);
