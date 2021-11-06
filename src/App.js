import React from "react";
import {
	BrowserRouter as Router,
	Route,
	// Redirect,
	Routes,
  } from 'react-router-dom';
import About from "./components/about/About";
import Contact from "./components/contanct/Contact";
import Employees from "./components/employees/Employees";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar/Navbar";
import background from './components/img/background.jpg'
// import Header from "./Header";

function App() {
  return ( 
	  <div style={{ backgroundImage: `url(${background})`, height:'100vh' }}>
        <Router>
            <main>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Home/>} />
					<Route path="/about" exact element={<About/>} />
					<Route path="/contact" exact element={<Contact/>} />
					<Route path="/employees" exact element={<Employees/>} />
					{/* <Route exact path ="/">
						<Home/>
					</Route>
					<Route exact path ="/about"><About/></Route>
					<Route exact path ="/contacts"><Contact/></Route>
					<Route exact path ="/employees"><Employees/></Route> */}
				</Routes>
			</main>
        </Router>
	</div>
  );
}

export default App;
