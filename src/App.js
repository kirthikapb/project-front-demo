
import './App.css'
import Projectlogin from './projectlogin';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Loginuser from './userallowed';
import Subcription from './shopping';
import Home from './home';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/register" component={Projectlogin}></Route>
                        <Route exact path="/login" component={Loginuser}></Route>
                        <Route exact path="/products" component={Subcription}></Route>
                    </Switch>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
