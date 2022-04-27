import logo from './logo.svg';
import './App.css';

function App() {

  const mobileName = ["Android","Blackberry","iPhone","Window Phone"];

  const mobileBrand = ["Samsung","HTC","Micromax","Apple"]
  return (
    <div>
      
      <div>
        <h1>Mobile Operating System</h1>
        <ul>
          {mobileName.map((e) => {
            return <li>{e}</li>
          })}
        </ul>

        <h1>Mobile Manufacturers</h1>
        <ul>
          {mobileBrand.map((e) => {
            return<li className='mobile'>{e}</li>
          })}
        </ul>
      </div>

    </div>
  );
}

export default App;
