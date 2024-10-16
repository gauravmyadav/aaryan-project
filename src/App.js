import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';

import Header from './components/Header';
import Men from './components/Laptop';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './admin/Signup';
import Dashboard from './admin/Dashboard';
import Products from './admin/Products';
import Addproducts from './admin/Addproducts';
import Orders from './admin/Orders';
import Adminpage from './admin/Adminpage';
import Logout from './admin/Logout';
import Allproducts from './components/Allproducts';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import SinglePage from './components/SinglePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/men' element={ <Men />}/>
        <Route path='/allproducts' element={ <Allproducts />}/>
        <Route path='/about' element={ <About />}/>
        <Route path='/contact' element={ <Contact />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/cart' element={<Cart />}/>
        {/* <Route path='/detail/:id' element={<SinglePage />}/> */}
        <Route path='singlepage/:id' element={<SinglePage/>}/>

        <Route path='/admin' element={<Adminpage/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='/admin/products' element={<Products/>} />
          <Route path='/admin/addproducts' element={<Addproducts/>} />
          <Route path='/admin/addproducts/:id' element={<Addproducts/>} />
          <Route path='/admin/orders' element={<Orders/>} />
          <Route path='/admin/logout' element={<Logout/>} />
        </Route>  
      </Routes>
      <Footer />
      </BrowserRouter>




    </div>
  );
}

export default App;
