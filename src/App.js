import './App.css';
// import './bootstrap.min.css';
import Header from './Components/Header';
import Body from "./Components/Body";
import Footer from './Components/Footer'
import StateDetail from './Components/StateDetail'
import About from './Components/About'
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom'

function App() {
  return (
    <Router >
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/about" exact component={About} />
          <Route path="/state/:state" exact component={StateDetail} />
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
