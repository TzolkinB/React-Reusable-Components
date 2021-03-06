import React from 'react';

const footerModel = [
  {title: "Location", content:"333481 Melrose Place", other:"Beverly Hills, CA 90210"},
  {title: "Around the Web", content: [
    {link:"#", platform:"facebook"},
    {link:"#", platform:"google-plus"},
    {link:"#", platform:"twitter"},
    {link:"#", platform:"linkedin"},
    {link:"#", platform:"dribbble"},
  ]},
  {title: "About Freelancer", content:"Freelance is a free to use, open source Bootstrap theme created by", other: <a href='#'>Start Bootstrap</a>}
];

const currentYear = new Date().getFullYear();

class TextFooter extends React.Component {
  render() {
    const {title, content, other} = this.props;
    return(
      <div className="footer-col col-md-4">
        <h3>{title}</h3>
        <p>
          {content}
          <br/>
          {other}
        </p>
      </div>
    )
  }
}

class SocialMedia extends React.Component {
  render() {
    const {title, content} = this.props;
    return(
      <div className="footer-col col-md-4">
        <h3>{title}</h3>
          <ul className="list-inline">
          {content.map((item, index) => (
            <li key={`content-${index}`}>
              <a href={item.link} className="btn-social btn-outline">
                <i className={"fa fa-fw fa-" + item.platform}></i>
              </a>
            </li>
            ))}
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
              <TextFooter {...footerModel[2]} a href='http://startbootstrap.com'/>
            </div>
          </div>
        </div>
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                Copyright &copy; Your Website {currentYear}
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
