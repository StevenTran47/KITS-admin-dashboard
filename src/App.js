import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import { Space } from 'antd';
import Layout from './componets/Layout/Layout';
import Header from './componets/Header/Header';
import Footer from './componets/Footer/Footer';
import Home from './containers/Home';
import Users from './containers/Users'
import Customers from './containers/Customers';
import Orders from './containers/Orders';
import Products from './containers/Products'
import Coupon from './containers/Coupon';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Space>
        <BrowserRouter>
          <Layout/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/users' element={<Users/>} />
            <Route path='/customers' element={<Customers/>} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/products' element={<Products />} />
            <Route path='/coupon' element={<Coupon />} />
          </Routes>
        </BrowserRouter>
      </Space>     
      <Footer></Footer>
    </div>
  );
}

export default App;
