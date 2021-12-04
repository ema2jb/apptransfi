import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/auth/Login';
import Forgot from './pages/auth/Forgot';
import Signup from './pages/auth/Signup';
import Home from './pages/Home';
import BuyToken from './pages/buyToken'
import Settings from './pages/settings/settings'
import Transactions from './pages/AllTransactions'
import Summary from './pages/Summary'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='login' element={<Login />}/>
                    <Route path='/' element={<Signup />}/>
                    <Route path='forgot' element={<Forgot />}/>
                    <Route path='dashboard' element={<Home />}/>
                    <Route path='buytoken' element={<BuyToken />}/>
                    <Route path='settings' element={<Settings />}/>
                    <Route path='transactions' element={<Transactions />} />
                    <Route path='summary/:transactionId' element={<Summary />} />
                </Routes>
            </Router>
            <ToastContainer/>
        </div>
    );
}

export default App;
