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
        <OurStory />
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
          <li><a href="/story" className="selected">3IS Story</a></li>
          <li><a href="/income-tax">Income Tax</a></li>
          <li><a href="/insurance">Insurance</a></li>
          <li><a href="/investment">Investment</a></li>
          <li><a href="/contact">Contact Us</a></li> 
        </ul>
        );
    }
});

var OurStory = React.createClass({
  render: function() {
    return (
      <div className="our-story-section">
        <h3>Our Company</h3>
        <p>The 3IS Management team has extensive managerial and technical experience in income tax, insurance and investment services. Recognizing the needs of the financial services industry and short comings of other service providers we are continually finding new  innovative ways to respond to market demands and allow our affiliates and licensees a viable , reasonable and profitable alternative to an archaic system that only rewords top management and is irreverent to clients and licensees.</p>
        <p>3IS aims to creating a win-win situation with all parties involved in all transactions between 3IS and licensees, 3IS and clients, and licensees and clients.  </p>
        <h3>Our Colleagues (licensees)</h3>
        <p>We are actively looking for motivated entrepreneurs who are looking for mutually beneficial situations to build a successful financial services business, Increase revenue for their existing financial services business and are eagerly looking to grow and expand.</p>
        <h3>Our Clients</h3>
        <p>Our clients can count on us for guaranteed quality work at fair prices in a one stop shop environment which is what we call <i>"make sense service"</i>.  We are  always looking to understand clients life style, needs,  and perception of value to continue improving our services and offer our clients the most  simple and  convenient services that  make sense. </p>
      </div>
    );
  }
});


React.render(
  <Site />, 
  document.body
);
