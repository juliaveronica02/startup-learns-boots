import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
// import LoginPage from "./components/loginpage";
// import SignUp from "./components/signup.component";
// import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import LoginPage from "./components/loginpage";

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Router> 
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Features data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Gallery />
        {/* <Testimonials data={this.state.landingPageData.Testimonials} /> */}
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
          <Switch>
            <Router path="/loginpage" component={LoginPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
