import Header from './components/Header.jsx'
import Users from './components/Users.jsx'
import './App.css';

function App() {
  return (
    <>
    <div className="App">
       <Header />
      <Users users={users} />
    </div>
    </>
  );
}

export default App;
