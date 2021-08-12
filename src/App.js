
import './App.css';
import {BrowserRouter as Router, HashRouter} from 'react-router-dom';
import {Routes} from './page/index';
import {Header} from './component/index'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter basename="/my-personal-web">
      <div>
        <div className="App ">
          <Header />
          <Routes/>
          
        </div>
        <footer className="justify-content-center">
            <a href="https://commons.wikimedia.org/wiki/File:.NET_Core_Logo.svg">C#icon -Jason Groce</a>, Public domain, via Wikimedia Commons<br/>
            <a href="https://icons8.com/">icons from icons8</a><br/>
            <a href='https://www.freepik.com/vectors/abstract'>Abstract vector created by rawpixel.com - www.freepik.com</a>
        </footer>
      </div>
    
    </HashRouter>
    
    
  );
}

export default App;
