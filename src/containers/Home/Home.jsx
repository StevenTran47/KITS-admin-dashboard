import "../../App.css"
import { Space, Card } from 'antd';
import DemoLine from "../../componets/Line"
import DemoPie from "../../componets/Pie";
import DemoBar from "../../componets/Bar";
const Home = () => {
  return (
    <div className="content">
      <h1>Dash Board</h1>
      <Space direction="vertical">
        <Card
          style={{
            width: 1500,
          }}
        >
          <h1>Token Price</h1>
          <DemoLine />
        </Card>
        <Space direction="horizontal">
        <Card
          style={{
            width: 500,
          }}
        >
          <h1>Money Allocation</h1>
          <DemoPie/>
        </Card><Card
          style={{
            width: 1000,
          }}
        >
          <h1>Profit</h1>
         <DemoBar />
        </Card>
        </Space>
      </Space>
    </div>
  );
}
export default Home;