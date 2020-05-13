import React from 'react'
import { Row, Col } from 'antd';
import { Tree } from 'antd';
import { DownOutlined, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';

function About_us() {
   
    const treeData = [
        {
          title: 'TEAM',
          key: '0-0',
          icon: <UsergroupAddOutlined />,
          children: [
            {
              title: 'PROJECT MANAGER',
              key: '0-0-0',
              icon: <UserOutlined />,
              children: [
                  {
                      title: 'P Ben',
                      key: '0-0-0-0',
                      icon: <UserOutlined />
                  }
              ]
            },
            {
              title: 'PROGRAMMER',
              key: '0-0-1',
              icon: <UserOutlined />,
            },
            {
                title: 'SOFTWARE TESTER',
                key: '0-0-2',
                icon: <UserOutlined />,
            },
            {
                title: 'DATA ENGINEER',
                key: '0-0-3',
                icon: <UserOutlined />,
            },
            {
                title: 'APPLICATION SUPPORT ANALYST',
                key: '0-0-4',
                icon: <UserOutlined />,
            },
            {
                title: 'OPERATIONS ENGINEER',
                key: '0-0-5',
                icon: <UserOutlined />,
            },
            {
                title: 'SYSTEM ADMIN',
                key: '0-0-6',
                icon: <UserOutlined />,
            },
          ]
        }
      ];

    return (
        <div>
            <div style={{marginTop: -100, marginBottom: 50}}>
                    <h1 style={{float: "left", marginLeft: 120}}>About us</h1>
                    <img src="../blue_line.png" alt="line" width="100%" height="8" />
            </div>
            <div>
                <Row style={{margin: 40, marginBottom: 0, marginTop: -10}}>
                    <Col span={8}>
                    <div style={{marginLeft: 100}}>
                        <Tree
                            showIcon
                            defaultExpandAll
                            defaultSelectedKeys={['0-0-0']}
                            switcherIcon={<DownOutlined />}
                            treeData={treeData}
                        />
                    </div>
                    </Col>
                    <Col span={8} style={{marginLeft: -80}}>
                        <img src="../about_text.png" alt="about" width="500"></img>
                    </Col>
                    <Col style={{marginLeft: 40}} span={8}>
                        <img style={{marginTop: 40, marginBottom: 10}} src="../logo2.png" alt="logo" width="100" />
                        <p>
                        " Tradition is the interdealer broking arm of Compagnie Financière Tradition <br />
                        and one of the worlds largest interdealer brokers in over-the-counter <br />
                        financial and commodity related products. Represented in over 28 countries, <br />
                        Compagnie Financière Tradition is listed on the Swiss stock exchange. " <br />
                        </p>
                    </Col>
                </Row>
            </div>
            
         </div>

    )
}

export default About_us
