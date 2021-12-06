import './App.css';
import UserList from './Components/User/UserList';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <UserList />
        </Router>
    </div>
  );
}

export default App;
