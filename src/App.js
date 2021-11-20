import './App.css'
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container-nav">
      <div className="nav">
        <ul>
          <li><img src="https://cdn-icons-png.flaticon.com/512/33/33900.png" /></li>
        </ul>
        <ul>
          <li><Link to="/" className="link" > Home </Link></li>
          <li><Link to="/musica" className="link" > Musica </Link></li>
          <li><Link to="/cidade" className="link" > Cidade </Link></li>
        </ul>
      </div>
    </div>
  
  );
}

export default App;
