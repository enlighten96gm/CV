import './App.css';
import Main from "./component/main"
import Skills from './component/skills/skills';
import Character from './component/character/character'
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <div>
        <Main />
        <Route path='/skills' component={Skills}/>
        <Route path='/character' component={Character}/>
      </div>
    </div>
    </BrowserRouter>
      
  )
}

export default App;
