
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './components/main';

function App() {
  return (
    <>
      <Header/>
      <SideBar/>
      <Dashboard/>
    </>
  );
}

export default App;
