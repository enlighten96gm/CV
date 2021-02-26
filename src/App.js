import './App.css';
import Main from "./component/main"
import Skills from './component/skills/skills';
import Character from './component/character/character'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <div>
        <Switch>
          <Route exact path='/' render={() => <Redirect to={'/Main'} />}/>
          <Route path='/Main' render={() => <Main />}/>
          <Route path='/Character' render={() => <Character />}/>
          <Route path='/Skills' render={() => <Skills />}/>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
      
  )
}

export default App;
