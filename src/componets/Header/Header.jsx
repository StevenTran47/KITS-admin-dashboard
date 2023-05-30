import Typography from "antd/es/typography/Typography";
import "../../App.css"
import logo from "../../assets/logo.jpg"
import { UserOutlined, MailOutlined, BellOutlined } from '@ant-design/icons'
import { Badge, Image, Menu, Space } from 'antd';
import Avatar from "antd/es/avatar/avatar";

const Header = () => {
    return (
        <div className="header">
            <Image width={60} src={logo} preview={false}></Image>
            <Typography>Admin DashBoard</Typography>
            <Space>
                <Avatar size={50} icon={<UserOutlined />} />
                <a href="#">
                    <Badge size={60} count={5}>
                        <Avatar shape="square" size="large" icon={<MailOutlined />} />
                    </Badge>
                </a>
                <a href="#">
                    <Badge size={60} count={10}>
                        <Avatar shape="square" size="large" icon={<BellOutlined />} />
                    </Badge>
                </a>
            </Space>
        </div>
    );
}
export default Header;