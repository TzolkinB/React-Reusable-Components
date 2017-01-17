import React from 'react';

export default class Section extends React.Component {
  render() {
    const {className, id, title, children} = this.props;
    return(
      <section className={className} id={id}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>{title}</h2>
              <hr className="star-light"/>
            </div>
            {children}            
          </div>
        </div>
      </section>
    )
  }
}
