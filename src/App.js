import './App.css';
import Message from './components/Message.jsx';

const myName = 'Aleksandr';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>My first page React</p>
      </header>
      <main>
        <input type='text'></input>
        <button >Submit</button>
        <Message name={myName} />
      </main>
    </div>
  );
}

export default App;
