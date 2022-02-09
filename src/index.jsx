/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
} from 'react-router-dom';

import '../style/main.scss';
// import ListAsComponent from './lists';
// import ListPure from './purelist';
// import withLogger from './wrappedLogger';

import Home from './home';
import HelloWorld from './welcome';

export default function AppRouter() {
  function WillMatch() {
    return <h3>Matched!</h3>;
  }

  function NoMatch() {
    const location = useLocation();
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hello">Hello World!</Link>
          </li>
          <li>
            <Link to="/old-match">Old Match, to be redirected</Link>
          </li>
          <li>
            <Link to="/will-match">Will Match</Link>
          </li>
          <li>
            <Link to="/will-not-match">Will Not Match</Link>
          </li>
          <li>
            <Link to="/also/will/not/match">Also Will Not Match</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hello">
            <HelloWorld />
          </Route>
          <Route path="/old-match">
            <Redirect to="/will-match" />
          </Route>
          <Route path="/will-match">
            <WillMatch />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
ReactDOM.render(<AppRouter />, document.getElementById('root'));

// ReactDOM.render(<HelloWorld />, document.getElementById('root'));

// ReactDOM.render(
//   React.createElement(
//     'h2',
//     { id: 'mojeh2', className: 'header' },
//     'Playing with react is cool'
//   ),
//   document.getElementById('injectHere')
// );

// ReactDOM.render(
//   React.createElement(
//     'ul',
//     { id: 'fajnalistaReactowa' },

//     React.createElement('li', { id: 'item1' }, 'item 1 hi \u26CF;')
//   ),
//   document.getElementById('dupa')
// );

// const id1 = 'myList234';
// const listItem1 = <li>does it work?</li>;

// ReactDOM.render(
//   <ul id={id1}> {listItem1} </ul>,
//   document.getElementById('dupa2')
// );

// const id2 = 'myId2';
// // [123, 321, 55]
// const listItems = Array.from({ length: 3 }, (_, idx) => `${++idx}`).map(
//   (singleValue) => (
//     <li
//       key={singleValue}
//       className="list-group-item"
//     >{`tutaj jest string polaczony ze zmienna ${singleValue}`}</li>
//   )
// );

// ReactDOM.render(
//   <ul id={id2} className="list-group">
//     {listItems}
//   </ul>,
//   document.getElementById('dupa3')
// );

// ReactDOM.render(
//   <ListAsComponent id="mojeIdzpalca" valueIWantToSee="ta daaaaam" />,
//   document.getElementById('react-component')
// );
