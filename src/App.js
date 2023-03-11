import logo from './logo.svg';
import './App.css';
import UsersList from './components/UsersList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<UsersList/>}></Route>
          <Route exact path="add" element={<AddUser/>}></Route>
          <Route exact path="edit/:id" element={<EditUser/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
