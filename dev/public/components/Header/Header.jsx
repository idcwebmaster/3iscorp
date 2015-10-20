class Header extends React.Component {
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
}


export default Header;