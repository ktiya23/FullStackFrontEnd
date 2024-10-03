import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import {Route, Router, Routes} from 'react-router-dom'
import { AuthProvider } from './context/authContext';
import NavBar from './components/NavBar';
import HomePgae from './pages/HomePgae';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePgae />} />
            <Route path='/login' element={ <Login /> } />
            <Route path='/signup' element={ <Signup /> } />
            {/* <Route path='/products' element={ <PrivateRoute> <ProductPage/> </PrivateRoute> } /> */}
            <Route path='*' element={ <NotFoundPage /> } />
          </Routes>
        </Router>
      </AuthProvider>
      
    </ChakraProvider>
  );
}

export default App;
