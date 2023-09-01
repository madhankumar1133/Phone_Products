import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Signin from './component/signin';
import Signup from './component/signup';
import Products from './component/products';
import Navbar from './component/navbarproduct';
import Updateorder from './component/updateorder';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='navbar' element={<Navbar/>}/>
        <Route path='/updateorder/:s_no' element={<Updateorder/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
