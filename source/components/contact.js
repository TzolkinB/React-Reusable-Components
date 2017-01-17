import React from 'react';
import Section from './section';

const contactModel = [
  {label:"Name", type:"text", placeholder:"Name", id:"name", message:"Please enter your name."},
  {label:"Email Address", type:"email", placeholder:"Email Address", id:"email", message:"Please enter your email address."},
  {label:"Phone Number", type:"tel", placeholder:"Phone Number", id:"phone", message:"Please enter your phone number."},
];

class ContactInfo extends React.Component {
  render(){
    return(
      <div className="row control-group">
      {contactModel.map((item, index) => (
        <div className="form-group col-xs-12 floating-label-form-group controls" key={`item-${index}`}>
          <label>{item.label}</label>
          <input type={item.type} className="form-control" placeholder={item.placeholder} id={item.id} required data-validation-required-message={item.message}/>
          <p className="help-block text-danger"></p>
        </div>
      ))}
      </div>
    )
  }
};

export default class Contact extends React.Component {
  render() {
    return(
      <Section id="contact" title="Contact Me">
        <div className="col-lg-8 col-lg-offset-2">
          <form name="sentMessage" id="contactForm" noValidate>
            <ContactInfo />
            <div className="row control-group">
              <div className="form-group col-xs-12 floating-label-form-group controls">
                <label>Message</label>
                <textarea rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                <p className="help-block text-danger"></p>
              </div>
            </div>
            <br/>
            <div id="success"></div>
            <div className="row">
              <div className="form-group col-xs-12">
                <button type="submit" className="btn btn-success btn-lg">Send</button>
              </div>
            </div>
          </form>
        </div>
      </Section>
    )
  }
};
