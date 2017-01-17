import React from 'react';

const footerModel = [
  {title: "Location", content:"3481 Melrose Place<br/>Beverly Hills, CA 90210"},
  {title: "Around the Web", content: [
    {link:"#", platform:"fa fa-fw fa-facebook"},
    {link:"#", platform:"fa fa-fw fa-google-plus"},
    {link:"#", platform:"fa fa-fw fa-twitter"},
    {link:"#", platform:"fa fa-fw fa-linkedin"},
    {link:"#", platform:"fa fa-fw fa-dribbble"},
  ]},
  {title: "About Freelancer", content:"Freelance is a free to use, open source Bootstrap theme created by <a href='http://startbootstrap.com'>Start Bootstrap</a>."}
];

class TextFooter extends React.Component {
  render() {
    return(
      <div className="footer-col col-md-4">
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    )
  }
}

class SocialMedia extends React.Component {
  //const icon = "fa fa-fw fa-" + {this.props.platform};

  render() {
    return(
      <div className="footer-col col-md-4">
        <h3>{...footerModel.title[1]}</h3>
        <ul className="list-inline">
          <li>
            <a href={this.props.link} className="btn-social btn-outline">
              <i className={this.props.platform}></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default class Footer extends React.Component {
  render(){
    return(
      <footer className="text-center">
        <div className="footer-above">
          <div className="container">
            <div className="row">
              <TextFooter {...footerModel[0]} />
              <SocialMedia {...footerModel[1]} />
              <TextFooter {...footerModel[2]} />
            </div>
          </div>
        </div>
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                Copyright &copy; Your Website 2014
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
