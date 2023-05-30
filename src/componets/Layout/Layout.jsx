import "../../App.css"
import {
  HomeOutlined,
  UserOutlined,
  TeamOutlined,
  AppstoreOutlined,
  FileDoneOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function getItem(label, key, icon, children, type, path) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem(<NavLink to="/">Dash Board</NavLink>, '1', <HomeOutlined />),
  getItem(<NavLink to="/users">Users</NavLink>, '2', <UserOutlined />),
  getItem(<NavLink to="/customers">Customers</NavLink>, '3', <TeamOutlined />),
  getItem(<NavLink to="/products">Products</NavLink>, '4', <AppstoreOutlined />),
  getItem(<NavLink to="/orders">Orders</NavLink>, '5', <FileDoneOutlined />),
  getItem(<NavLink to="/coupon">Coupon</NavLink>, '6', <HeartOutlined />),

];

const Layout = () => {

  return (
    <div className="layout">
      <div className="menu">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
      </div>      
    </div>
  );
}
export default Layout;