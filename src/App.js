import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import  LoginPage  from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        
                         <Switch>
                            <Route exact={true} path="/" component={LoginPage} />
                            <Route path="/dashboard" component={Dashboard} />
                            {/* <Route path="/register" component={RegisterPage} /> 
                            <Redirect from="*" to="/" /> */}
                           </Switch> 
 
      </header>
    </div>
    </Router>
  );
}

export default App;
