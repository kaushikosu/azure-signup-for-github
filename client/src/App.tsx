import './App.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1>
        Home page of App Component
      </h1>
      <Button onClick={() => navigate("create")}> Next </Button>
    </div>
  );
}

export default App;
