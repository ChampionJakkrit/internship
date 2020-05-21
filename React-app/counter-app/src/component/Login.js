import React from 'react';
import '../App.css';
import { Layout } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const { Content } = Layout;

function Login() {
  return (
    <div className="Login">
      <Layout style={{marginTop: -100, padding: -24}}>
      <Row>
        <Col span={8} className="sider" xs={0} sm={0} md={0} lg={6} xl={8}>
        <img src="../grid-layout.jpg" alt="gridLeft" width="100%" height="680px"/>
        </Col>
        <Layout>
          <Col span={24}>
            <Content className="login-content">
              <div className="msg-content">
                Renewable<br />
                Energy<br />
                Hub.<br />
              </div>
              <div className="input-content">
                <input type="email" className="input" /><br />
                <input type="password" className="input" /><br />
                <Button className="bt-login"><LoginOutlined />LOGIN</Button>
              </div>
            </Content>
          </Col>
        </Layout>
      </Row>
      </Layout>
    </div>
  );
}

export default Login;
