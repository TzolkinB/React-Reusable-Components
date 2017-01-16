import React from 'react';
import ReactDOM from 'react-dom';
import {default as Portfolio, PortfolioItem} from './components/portfolio';

ReactDOM.render(
    <Portfolio>
      <PortfolioItem img="cabin" />
      <PortfolioItem img="cake" />
      <PortfolioItem img="circus" />
      <PortfolioItem img="game" />
      <PortfolioItem img="safe" />
      <PortfolioItem img="submarine" />
    </Portfolio>, document.getElementById('react-app'));
