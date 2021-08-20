import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login'
import Dashboard from './dashboard';

// FINDS the code from URLSearch 
const code= new URLSearchParams(window.location.search).get('code');

function App() {
  // render to dashboard if the code exists else stay at login
  return code ? <Dashboard code={code}/> : <Login />;
}

export default App;
