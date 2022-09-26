import './App.css';
import Nav from './components/Nav';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Nav/>
          <Routes>
            
            <Route element={<PrivateComponent/>}>
              <Route path='/' element={<ProductList/>}></Route>
              <Route path='/add' element={<h1>{<AddProduct/>}</h1>}></Route>
              <Route path='/update/:id' element={<UpdateProduct/>}></Route>
              <Route path='/logout' element={<h1>Logout Product Component</h1>}></Route>
              <Route path='/profile' element={<h1>Profile Component</h1>}></Route>
              </Route>

              <Route path='/signup' element={<SignUp/>}></Route>
              <Route path='/login' element={<Login/>}>Login</Route>

          </Routes>
          
      </BrowserRouter>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
