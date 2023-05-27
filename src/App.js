
import './App.css';
 import img3 from "./img3.jpeg";
 import axios from 'axios';
import Navbar from "./components/Navbar.js";
import Layer from './components/Layer';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

function App() {
  return (
    <div className= "setMargin">
    <Navbar/>   
    <img src={img3} alt="img3" width="430" height="400px" />
    <Layer/>
    
   </div>
  );
}
export default App;


