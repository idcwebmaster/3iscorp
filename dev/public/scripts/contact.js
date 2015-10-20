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
          <li><a href="/investment">Investment</a></li>
          <li><a href="/contact"  className="selected">Contact Us</a></li> 
        </ul>
        );
    }
});


var Contact = React.createClass({
  getInitialState: function() {
    return {value: ' '};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value.substr(0, 140)});
  },

  render: function() {
    var value = this.state.value;
    return (
      <div className="contact-section">
        <h3>Contact Us</h3>
          <form action="MAILTO:info@3iscorp.com" method="post" enctype="text/plain" className="contact-form">
            <div className="main-form">
              <input name="action" value="submit" type="hidden" /> 
              <div id="first-name" className="text-form col-half validate" >
                <label>First Name:</label>
                <input name="first-name" size="40" type="text" value={value} onChange={this.handleChange} />
                <span className="validationError">Enter your First Name</span>
              </div>
              <div id="last-name" className="text-form col-half validate">
                <label>Last Name:</label>
                <input name="last-name" size="40" type="text" /> 
                <span className="validationError">Enter your Last Name</span>
              </div>
              <div className="text-form col-full">
              <label>Business Name:</label>
              <input name="business-name" size="40" type="text" />
              </div>
              <div id="address" className="text-form col-full">
                <label>Business Address:</label>
                <input name="business-address" size="40" type="text" />
                <span className="validationError">Enter Business Address</span>
              </div>
              <div id="city" className="text-form col-half validate">
                <label>City</label>
                <input name="business-city" size="30" type="text" />
                <span className="validationError">Enter a City</span>
              </div>
              <div id="state" className="text-form col-fourth validate">
                <label>State</label>
                <input name="business-state" size="2" type="text" />
                <span className="validationError">Enter a State</span>
              </div>
              <div id="zipcode" className="text-form col-fourth validate">
                <label>Zip</label>
                <input name="business-zip" size="4" type="number" />
                <span className="validationError">Enter a Zip</span>
              </div>
              <div id="phone" className="text-form col-half validate">
                <label>Phone Number:</label>
                <input name="phone" size="30" type="number" /> 
                <span className="validationError">Enter Valid Phone Number</span>
              </div>
              <div id="email" className="text-form col-half validate">
                <label>Email Address:</label>
                <input name="email" size="30" type="email" />
                <span className="validationError">Enter Valid Email</span>
              </div>
            </div>  

            <div className="first-checkbox">
              <div id="questionA" className="text-checkbox validate">
                <select>
                  <option value="0"></option>
                  <option value="yesIncomeTax">Yes</option>
                  <option value="noIncomeTax">No</option>
                </select>
                <label>Do you currently offer Income Tax Services?</label>
                <span className="validationError">Choose YES or No</span>
              </div>
              <div id="questionB" className="text-checkbox validate">
                <select>
                  <option value="0"></option>
                  <option value="yesInsuranceTax">Yes</option>
                  <option value="noInsuranceTax">No</option>
                </select>
                <label>Do you currently offer Insurance Services?</label>
                <span className="validationError">Choose YES or No</span>
              </div>
              <div id="questionC" className="text-checkbox validate">
                <select>
                  <option value="0"></option>
                  <option value="yesInvestment">Yes</option>
                  <option value="noInvestment">No</option>
                </select>
                <label>Do you currently offer Investment Services? </label>
                <span className="validationError">Choose YES or No</span>
              </div>
            </div>

            <div className="second-checkbox">  
              <div id="questionD" className="text-checkbox validate">
                <select>
                  <option value="0"></option>
                  <option value="interestedIncomeTax">Yes</option>
                  <option value="notInterestedIncomeTax">No</option>
                </select>
                <label>Are you interested in offering Income Tax Services?</label>
                <span className="validationError">Choose YES or No</span>
              </div>
              <div id="questionE" className="text-checkbox validate">
                <select>
                  <option value="0"></option>
                  <option value="interestedInsuranceTax">Yes</option>
                  <option value="notInterestedInsuranceTax">No</option>
                </select>
                <label>Are you interested in offering Insurance Services?</label>
                <span className="validationError">Choose YES or No</span>
              </div>
              <div id="questionF" className="text-checkbox validate">
                <select>
                  <option value="0"></option>
                  <option value="interestedInvestment">Yes</option>
                  <option value="notInterestedInvestment">No</option>
                </select>
                <label>Are you interested in offering Investment Services? </label>
                <span className="validationError">Choose YES or No</span>
              </div>
            </div>  
            <div id="comments" className="text-comments validate">
              <label>Message:</label>
              <textarea name="message" rows="7" cols="50">
              </textarea>
              <span className="validationError">Leave us a Comment</span>
            </div>
            <div className="text-submit">
            <input value="Submit" type="submit" className="submit-button"/>
            </div>
          </form>
      </div>
    );
  }
});


React.render(
  <Site />, 
  document.body
);
