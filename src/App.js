import React from 'react';

import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import AppMain from './components/App-Main.jsx'
import Navbar from './components/Navbar.jsx'
import FootContainer from './components/Foot-Container.jsx'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
      <AppMain className="App-main"></AppMain>
      <footer className="App-footer">
        <FootContainer></FootContainer>
      </footer>
    </div>
  );
}

export default App;
