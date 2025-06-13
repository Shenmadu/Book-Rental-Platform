import { Routes, Route, useNavigate } from 'react-router-dom';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import BookDetail from './pages/BookDetail';
import ToastConfig from './components/ToastConfig';
import { NavLink } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const handleAddBook = () => {
    navigate('/add');
  };

  return (
    <div>
       <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32" aria-hidden="true">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4">Mini Book Rental Platform</span>
          </NavLink>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink to="/add" className="nav-link" activeClassName="active">
                Add New Book
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">
                All Books
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
      <ToastConfig />
    </div>
  );
};

export default App;
