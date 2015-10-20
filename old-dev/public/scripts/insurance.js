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
        <Insurance />
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
          <li><a href="/income-tax">Income Tax</a></li>
          <li><a href="/insurance" className="selected">Insurance</a></li>
          <li><a href="/investment">Investment</a></li>
          <li><a href="/contact">Contact Us</a></li> 
        </ul>
        );
    }
});


var Insurance = React.createClass({
  render: function() {
    return (
      <div className="insurance-section">
        <h3>Insurance</h3>
        <p>3IS will help you obtain your Agent / Broker license for Fire and Casualty Broker-Agent (also known as Property and causality), Life Insurance , Health Insurance.  When you are part of 3IS you enter into a 100% free comprehensive program </p>
        <ul>
          <li><p>Free help with license preparation</p></li>
          <li><p>Free training on products, closing the sale and industry software </p></li>
          <li><p>Free ongoing product support </p></li>
          <li><p>Free ongoing underwriting support</p></li>
          <li><p>Free forms, manuals, and disclosures</p></li>
          <li><p>Free Customized office plan</p></li>
          <li><p>Free Marketing training </p></li>
          <li><p>Free branding </p></li>
          <li><p>Free advertising templates and tools </p></li>
          <li><p>Access to hundreds of insurance companies and products to cover all your client needs and specific circumstances</p></li>
          <li><p>Brokerage structure allowing you up to 95% commission plus bonuses and incentives </p></li>
          <li><p>No minimum production is required to be a licensee... build your business as slow or as fast as you see fit </p></li> 
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
