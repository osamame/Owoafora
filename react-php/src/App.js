import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import CreateBook from './components/CreateBook';
import Comment from './components/Comment';
import ListBook from './components/ListBook';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">List Books</Link>
            </li>
            <li>
              <Link to="book/create">Create Book</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListBook />} />
          <Route path="book/create" element={<CreateBook />} />
          <Route path="book/:id/comment" element={<Comment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;