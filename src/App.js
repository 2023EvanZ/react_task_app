import logo from './logo.svg';
import './App.css';
import { TodoPage } from './Pages/TodoPage';
import { Show } from './Pages/Show';
import { Hero } from './Pages/Hero';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Hero />
      <Router>
        <Routes>
          <Route exact path='/' element={<TodoPage />}>
          </Route>
          <Route path='/:id' element={<Show />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
