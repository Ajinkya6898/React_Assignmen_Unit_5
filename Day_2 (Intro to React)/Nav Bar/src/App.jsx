import logo from './logo.svg';
import './App.css';

function App() {

  const navComponent = ["Services","Projects","About"];
  return (
    <div>
      <div className='navbar'>
        <h2 className='name'>LOGOBAKERY</h2>
        <div className='nav_component'>
          {navComponent.map((e) => {
            return <p className='compo'>{e}</p>
          })};
        </div>
        <button className='btn'>Contact</button>
      </div>
    </div>
  );
}

export default App;
