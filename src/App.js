import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/auth/Login';
import Forgot from './pages/auth/Forgot';
import Signup from './pages/auth/Signup';
import Home from './pages/Home';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/dashboard' component={Signup}/>
                    <Route exact path='/forgot' component={Forgot}/>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </Router>
            <ToastContainer/>
        </div>
    );
}

export default App;
