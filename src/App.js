import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// components
import  Header from './Components/Header/Header';
import Home from './Pages/Home';
import Contact_us from './Pages/Contact_us';
import Who from './Pages/Who';
import Gallery from './Pages/Gallery';
import Email from './Components/Email/Email';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      
      {/* Header */}
      <Header />

      {/* Links of pages */}

      <Router>
        <div>
          <Switch>

            <Route path="/contact">
              <Contact_us />
            </Route>
            <Route path="/who">
              <Who />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>
        </div>
      </Router>
      
      {/* Footer */}
       <Email/>
       <Footer />
    </div>
  );
}

export default App;
