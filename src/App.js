import './App.css';
import StateTutorial from './StateTutorial';
import ReducerTutorial from './ReducerTutorial'
import EffectTutorial from './EffectTutorial'
import RefTutorial from './RefTutorial';
import LayoutEffectTutorial from './LayoutEffectTutorial';
import ImperativeHandle from './ImperativeHandle'
import Game from './Game';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game />
        <ImperativeHandle/>
        <LayoutEffectTutorial/>
        <RefTutorial/>
        <h2>EffectTutorial</h2>
        <EffectTutorial/>
        <br/>
        <h2>ReducerTutorial</h2>
        <ReducerTutorial/>
        <StateTutorial/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
