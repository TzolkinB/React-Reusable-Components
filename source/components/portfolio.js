import React from 'react';
import Section from './section';

export class PortfolioItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {hasImage:true};
    this.onUpdateImageState = this.onUpdateImageState.bind(this);
  }

  onUpdateImageState(){
    this.setState({hasImage:false});
    setTimeout(() => {
      this.setState({hasImage:true});
    }, 1000)
  }

  render(){
    const path = `img/portfolio/${this.props.data.img}.png`;
    return(
      <div onClick={this.onUpdateImageState} className="col-sm-4 portfolio-item">
        <a href={this.props.data.link} className="portfolio-link" data-toggle="modal">
          <div className="caption">
            <div className="caption-content">
              <i className="fa fa-search-plus fa-3x"></i>
            </div>
          </div>
          {this.state.hasImage ? <img src={path} className="img-responsive" alt="" /> : null}
        </a>
      </div>
    )
  }
}

export default class Portfolio extends React.Component {
  render(){
    const portfolioData = [];
    for( var item of this.props.data){
      portfolioData.push(<PortfolioItem data={item} key={portfolioData.length} />);
    }
    return(
      <Section id="portfolio" title="Portfolio">
        {portfolioData}
      </Section>
    )
  }
};
