import React from 'react';

import Navbar from './components/navbar';
import Intro from './components/intro';
import Profiles from './components/profiles';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Interest from './components/interests'
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

class App extends React.Component {

	render() {
		return(
			<React.Fragment>
				<Navbar response = {this.response} />
				<Intro />
				<Profiles />
				<About />
				<Experience />
				<Projects />
				<Interest />
				<Contact />
				<Footer />
			</React.Fragment>
		);
	};

	response = () => {
		let Navbar = document.querySelector('.navbar');
		if(Navbar.className === "navbar") {
			Navbar.className += " responsive";
		}
		else {
			Navbar.className = "navbar";
		}
	};
}
 
export default App;