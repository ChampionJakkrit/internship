import React from 'react';
import Counter from './component/Counter';
import 'antd/dist/antd.css';
import { Layout, Card } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header style={{background: "white", padding: 10, height: 100}}>
          <img style={{float: "left", paddingTop: 10}} src="./logo.png" alt="logo" width={300} />
          
        </Header>

        <Content style={{background: "white", minHeight: 620}}>
          <Card style={{ minHeight: 620, paddingTop: 100}}>
            <Counter />
          </Card>
        </Content>

        <Footer style={{ textAlign: 'center', padding: 10, font: "Noto Sans"}}>
          <p>© 2020 TRADITION BROKERS (THAILAND) CO. LTD</p>
          <b style={{margin: 0}}>ALL RIGHT RESERVED.</b>
        </Footer>
      </Layout> 
    </div>
  );
}

export default App;
