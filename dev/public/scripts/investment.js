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
        <Investment />
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
          <li><a href="/">Home</a></li>
          <li><a href="/story">3IS Story</a></li>
          <li><a href="/income-tax">Income Tax</a></li>
          <li><a href="/insurance">Insurance</a></li>
          <li><a href="/investment" className="selected">Investment</a></li>
          <li><a href="/contact">Contact Us</a></li> 
        </ul>
        );
    }
});

var Investment = React.createClass({
  render: function() {
    return (
      <div className="investment-section">
        <h3>Investment</h3>
        <p>With an overgrowing need of financial planning, retirement planning and investment advice and products, many financial professionals in different fields are considering an entry into the investment and financials planning world. The increasing number of retirees, the increased complexity of the financial markets, and the increased reliance on the individual in creating their own retirement funds have made the field of investments and financial services a very attractive and lucrative one. Choosing your success partner is the main factor of your success </p> 
        <p>3IS is committed to helping you go from novice to expert in as little time as possible. This can be achieved with our proven system </p>
        <ul>
          <li><p>Free help with license preparation and completion of complicated application process  </p></li>
          <li><p>Free training on individual, group and commercial products </p></li>
          <li><p>Free ongoing updates on the latest changes in the industry and best new products for your clients </p></li>
          <li><p>Free ongoing product support </p></li>
          <li><p>Free ongoing underwriting support </p></li>
	  <li><p>Free forms, manuals, and disclosures  </p></li>
          <li><p>Free Customized office plan</p></li>
          <li><p>Free Marketing training </p></li>
          <li><p>Free branding </p></li>
          <li><p>Free advertising templates and tools </p></li>
          <li><p>Access to numerous platforms, investment companies, and products to cover all your client needs and specific circumstances</p></li>
          <li><p>Brokerage structure allowing you up to 95% commission plus bonuses and incentives No minimum production is required to be a licensee... build your business as slow or as fast as you see fit</p></li>
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
