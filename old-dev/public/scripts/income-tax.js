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
        <IncomeTax />
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
            <img src="../img/3ISLogoGold.png" alt="logo" width="100px" />
          </a>
        </div>
        <div className="headerTitle">
          <h2>
            3IS, Inc.
          </h2>
          <span>
             Think Success
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
          <li><a href="/">Home</a></li>
          <li><a href="/story">3IS Story</a></li>
          <li><a href="/income-tax" className="selected">Income Tax</a></li>
          <li><a href="/insurance">Insurance</a></li>
          <li><a href="/investment">Investment</a></li>
          <li><a href="/contact">Contact Us</a></li> 
        </ul>
        );
    }
});

var IncomeTax = React.createClass({
  render: function() {
    return (
      <div className="income-tax-section">
        <h3>Income Tax </h3>
        <p>3IS gives you the opportunity to start and grow a successful tax preparation business. 3IS provides you with everything you need to succeed with NO upfront cost to you.</p>
        <ul>
          <li><p>Free training </p></li>
          <li><p>Free licensing preparation help </p></li>
          <li><p>Free advanced and easy to use Software</p></li>
          <li><p>Free software training </p></li>
          <li><p>Free technical support </p></li>
          <li><p>Free tax support  </p></li>
          <li><p>Free forms, manuals, and disclosures </p></li>
          <li><p>Free Customized office plan </p></li>
          <li><p>Free Marketing training </p></li>
          <li><p>Free advertising templates and tools   </p></li>
        </ul>
        <p>We hope that you are interested to know more about this unique opportunity. Please complete this contact information form and we will get back to you to give you all the details.</p>
      </div>
    );
  }
});

React.render(
  <Site />, 
  document.body
);
