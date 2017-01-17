import React    from 'react';
import ReactDOM from 'react-dom';
import About    from './components/about';
import Contact  from './components/contact';
import Header   from './components/header';
import Footer   from './components/footer';
import Nav      from './components/nav';
import {
  default as Portfolio, PortfolioItem
} from './components/portfolio';

const portfolioModel = [
  {img: 'cake', link:'#'},
  {img: 'circus', link:'#'},
  {img: 'game', link:'#'},
  {img: 'safe', link:'#'},
  {img: 'submarine', link:'#'},
  {img: 'cabin', link:'#'}
];

ReactDOM.render(
    <div>
      <Nav />
      <Header 
        title="Master React Components" 
        subtitle="React - Components - JSX - ES6"
      />
      <Portfolio data={portfolioModel} />
      <About />
      <Contact />
      <Footer />
    </div>
    , document.getElementById('react-app'));
