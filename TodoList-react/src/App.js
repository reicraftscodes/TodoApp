import './App.css';
import DoneListContainer from './containers/DoneListContainer';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import TodoListContainer from './containers/TodoListContainer';
import logo from './images/informatics.jpg';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <header className="App-header">
        <span style={{display: 'inline-block' }}>
          <h1 id="appName"><img src={logo} width="150px" height="150px" alt="logo" /> Spring React Todo list</h1>
        </span>

        <Navigation />
        <Switch>
          <Route exact path="/done" component={DoneListContainer} />
          <Route exact path="/" component={TodoListContainer} />
          <Route path="*" component={NotFound} />
        </Switch>

      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
