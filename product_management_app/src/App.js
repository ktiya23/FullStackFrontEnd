import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import { AuthProvider } from './context/authContext';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <ChakraProvider>
        <AuthProvider>
          <Router>  {/* Use BrowserRouter instead of Router */}
            <NavBar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={ <Login /> } />
              <Route path='/signup' element={ <Signup /> } />
              {/* Private route for products can be implemented here */}
              <Route path='*' element={ <NotFoundPage /> } />
            </Routes>
          </Router>
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
