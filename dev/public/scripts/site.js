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
        <OurStory />
        <IncomeTax />
        <Insurance />
        <Investment />
        <Contact />
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
          <li><a href="/contact">Contact Us</a></li> 
        </ul>
      </div>
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
        <h1>What is 3"I"S?</h1>
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
        <h3>At 3IS we believe that it does not matter which "I" your start with, the other 2 are waiting for you </h3>
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
        <a href="/income-tax">More Info</a>
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
        <a href="/insurance">More Info</a>
      </div>
    );
  }
});

var ColumnRight = React.createClass({
  render: function() {
    return (
      <div className="column-right-section">
        <h3>Investment </h3>
        <p>If you ever wanted make your entry into the world of investment, financial service, and retirement planning with top financial rewards and residual income but have no idea where to start, we are very excited to hear from you. We will help you get licensed, then we will fully train you, support you and give you access to hundreds of investment products so you can focus on serving the best interest of your clients. All of it at a compensation structure that fairly rewards you hard work.</p>
        <a href="/investment">More Info</a>      
      </div>
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

var IncomeTax = React.createClass({
  render: function() {
    return (
      <div className="income-tax-section">
        <h3>Income Tax </h3>
        <p>3IS gives you the opportunity to start and grow a successful tax preparation business. 3IS provides you everything you need to succeed with NO upfront cost to you.</p>
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

var Contact = React.createClass({
  render: function() {
    return (
      <div className="contact-section">
        <h3>Contact </h3>
          <form action="" method="POST" type="multipart/form-data">
            <input name="action" value="submit" type="hidden" /> 
            First Name:
            <input name="firstname" size="30" type="text" />
            Last Name:
            <input name="lastname" size="30" type="text" /> 
            Business Name:
            <input name="businessname" size="30" type="text" />
            Business Address:
            <input name="businessaddress" size="30" type="text" />
            Phone Number:
            <input name="email" size="30" type="number" /> 
            Email Address:
            <input name="email" size="30" type="text" />
            Do you currently offer Income Tax Services?
            <input type="checkbox" name="question1" value="yesIncomeTax" />
            Do you currently offer Insurance Services?
            <input type="checkbox" name="question2" value="yesInsurance" />
            Do you currently offer Investment Services? 
            <input type="checkbox" name="question3" value="yesInvestment" />
            Comments:
            <textarea name="comments" rows="7" cols="30">
            </textarea>
            <input value="Send email" type="submit" />
          </form>
      </div>
    );
  }
});

React.render(
  <Site />, 
  document.body
);
