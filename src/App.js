import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import About from "./components/pages/AboutUs2";
import Header from "./components/layout/Header";
import Work from "./components/pages/Work";
import Services from "./components/pages/Services";
import Approach from "./components/pages/Approach";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };
  }

  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <Route exact path="/" component={Header} />
          <Route exact path="/AboutUs" component={() => <About />} />
          <Route exact path="/Work" component={() => <Work />} />
          <Route exact path="/Services" component={() => <Services />} />
          <Route exact path="/Approach" component={() => <Approach />} />
        </div>
      </HashRouter>
    );
  }
}

// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// // import logo from './logo.svg';

// // Styling

// import './App.css';

// // Components
// // import Home from './components/pages/Home';
// // import legalStuff from './components/pages/LegalStuff';
//  import Header from "./components/layout/Header"
// //  import Footer from "./components/layout/footer"

// // import Contact from './components/pages/ContactUs';
// import About from './components/pages/AboutUs2';
// import Navbar from './components/layout/Navbar';
// // import What from './components/pages/WhatWeDo';
// // import OurWork from './components/pages/OurWork';
// // import Blog from './components/pages/Blog';

// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <Navbar/>
//       <Route exact path="/" component={Header} />
//       <Route exact path="/AboutUs" component={About} />

// {/*
// <Route exact path="/" component={Home} />
// <Route exact path="/legalStuff" component={legalStuff} />
// <Route exact path="/ContactUs" component={Contact} />
// <Route exact path="/AboutUs" component={About} />
// <Route exact path="/WhatWeDo" component={What} />
// <Route exact path="/OurWork" component={OurWork} />
// <Route exact path="/Blog" component={Blog} />

// <Footer/> */}

//     </div>
//     </Router>
//   );
// }

// export default App;
