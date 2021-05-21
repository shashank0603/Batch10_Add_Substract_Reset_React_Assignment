import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import './index.css';
// import './AddSubstract.css';
import './VotingMachine.css';
// import AddSubstract from './AddSubstract'
import reportWebVitals from './reportWebVitals';
// import VotingMachine from './VotingMachine';
import CardPage from '../src/Cards/CardPage';


ReactDOM.render(
 
    <CardPage/>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
