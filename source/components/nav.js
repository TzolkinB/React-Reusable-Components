import React from 'react';

const navModel = [
    {style:"hidden", link:"#page-top", title:""},
    {style:"page-scroll", link:"#portfolio", title:"Portfolio"},
    {style:"page-scroll", link:"#about", title:"About"},
    {style:"page-scroll", link:"#contact", title:"Contact"},
];

class NavItems extends React.Component {
  render() {
    return(
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      {navModel.map((item, index) => (
          <ul className="nav navbar-nav navbar-right" key={`navModel-${index}`}>
              <li className={item.style}>
                  <a href={item.link}>{item.title}</a>
              </li>
          </ul>
          ))}
      </div>
    )
  }
};

export default class Nav extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
              <div className="navbar-header page-scroll">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#page-top">React Components</a>
              </div>
              <NavItems />

          </div>
      </nav>
    )
  }
};
