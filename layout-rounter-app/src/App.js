import React from 'react';
import './App.css';
import { Layout, Avatar } from 'antd';
import { Typography } from 'antd';
import { Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import page1 from './page1';
import page2 from './page2';
import page3 from './page3';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
  return (
    <div className="App">   
    <Layout>
      <Header style={{padding: 16}}>
        <Avatar style={{float: "right"}} src="./icon.png" />
        <Title style={{color: "white"}} level={3}>Chxmpion</Title>  
      </Header>
      <Layout>
        <Layout>
        <Sider>
          <div style={{ width: 200 }}>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              Option 3
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
          </div>
        </Sider>
        <Content className="site-layout" style={{ padding: '0 20px', marginTop: 5 }}>
        <Router>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Link to='/Home'>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Link> 
            <Link to='/about'>
              <Breadcrumb.Item>About</Breadcrumb.Item>
            </Link>
            <Link to='/page1'>
              <Breadcrumb.Item>page1</Breadcrumb.Item>
            </Link>
            <Link to='/page2'>
              <Breadcrumb.Item>page2</Breadcrumb.Item>
            </Link>
            <Link to='/page3'>
              <Breadcrumb.Item>page3</Breadcrumb.Item>
            </Link>
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 15, minHeight: 600 }}>
          
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/page1" component={page1} />
            <Route path="/page2" component={page2} />
            <Route path="/page3" component={page3} />
          </Switch>
          
          </div>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Router>
        </Content>
        </Layout>
      </Layout>
    </Layout>
    
    </div>
  );
}
}

export default App;
