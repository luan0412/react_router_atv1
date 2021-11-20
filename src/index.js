import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Musica from './components/Musica/Musica';
import Cidade from './components/Cidade/Cidade';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <App />
      </div>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/musica" exact component={Musica} />
          <Route path="/cidade" exact component={Cidade} />
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);