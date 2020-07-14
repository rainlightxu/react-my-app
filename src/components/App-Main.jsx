import React from 'react';
import { Card } from 'antd';
import '../App.css'
import '../css/App-Main.css'
import Home from './subcomponents/Home.jsx'
import About from './subcomponents/About.jsx'
import User from './subcomponents/User.jsx'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const { Meta } = Card;
class AppMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current:null,
            theme:'dark'
        }
    }
    handleClick = () => {

    }
    render() {
        return <div className="App-main">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/user">User</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/user">
                            <User />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
            
        </div>
    }
}


export default AppMain