import './App.css';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Footer from './components/footer/footer';
import Homepage from './components/homepage/homepage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
