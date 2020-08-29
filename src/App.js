import React from 'react';
import Header from './components/Header'
import api from './services/api'
import Main from './pages/Main'
import Routes from './routes'
import './styles.css'

const App = () => (
    <div className="App">
      <Header />
      <Routes />
    </div>
)


export default App;
