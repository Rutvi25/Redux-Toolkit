import './App.css';
import Bonus from './components/Bonus';
import Reward from './components/Reward';
import Account from './components/Account';
import Admin from './components/Admin';

const App = () => {
  return (
    <div className='App'>
      <Account />
      <br />
      <hr />
      <Bonus />
      <br />
      <hr />
      <Reward />
      <br />
      <hr />
      <Admin />
    </div>
  );
};

export default App;
