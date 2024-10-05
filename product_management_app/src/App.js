import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import { AuthProvider } from './context/authContext';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFoundPage from './pages/NotFoundPage';
import ProductPage from './pages/ProductPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <ChakraProvider>
        <AuthProvider>
          <Router>  
            <NavBar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={ <Login /> } />
              <Route path='/signup' element={ <Signup /> } />
              <Route path='/products' element={<PrivateRoute><ProductPage /></PrivateRoute>} />
              <Route path='*' element={ <NotFoundPage /> } />
            </Routes>
          </Router>
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
