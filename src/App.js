import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './components/Home';
import Nav_bar_area from './components/NavBar';
import Contactus from './components/Contactus';
import Users from './components/Users';
import Landing_page from './components/Landing_page';
import Login from './components/Login';
import Search_page from './components/Search_page';
import AgentList from './components/AgentList';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Chat from './components/Chat';
import MyAgents from './components/MyAgents';
import Deals from './components/Deals';

function App() {
  return (
    <div className="App">
      {/* <Router basename='/reelsproclub/build'> */}
      <Router>
        {/* <Nav_bar_area /> */}
        <Routes>
        <Route Component={Deals} path='deals'></Route>
        <Route Component={MyAgents} path='myagents'></Route>
        <Route Component={Chat} path='chat'></Route>
        <Route Component={Profile} path='profile'></Route>
        <Route Component={SignUp} path='signup'></Route>
        <Route Component={AgentList} path='agentlist'></Route>
        {/* <Route Component={Home} path='home'></Route> */}
        <Route Component={Search_page} path='search'></Route>
        <Route Component={Login} path='login'></Route>
        <Route Component={Landing_page} path='landing'></Route>
        <Route Component={Contactus} path='contactus'></Route>
        <Route Component={Users} path='users'></Route>
        <Route Component={Landing_page} path='/'></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;


