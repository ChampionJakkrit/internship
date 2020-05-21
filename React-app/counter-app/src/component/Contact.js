import React from 'react'
import { Col, Rate, Row } from 'antd';
import { Menu, Dropdown, PageHeader } from 'antd';
import { DownOutlined, FacebookOutlined, TwitterOutlined, GithubOutlined } from '@ant-design/icons';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
            <FacebookOutlined /> Facebook
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/home">
            <TwitterOutlined /> Twitter
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/">
            <GithubOutlined /> Github
        </a>
      </Menu.Item>
    </Menu>
  );

function Contact() {
    return (
        <div>
            <div style={{marginTop: -115, marginBottom: 20}}>
                <PageHeader style={{float: "left", marginLeft: 120}}
                    className="site-page-header"
                    onBack={() => window.history.back()}
                    title="Contact"
                />
                <img src="../blue_line.png" alt="line" width="100%" height="8" />
            </div >
                <Row style={{margin: 250, marginTop: 0, marginBottom: 0}}>
                    <Col span={12}>
                        <img style={{marginTop: 25}} src="../map.jpg" alt="map" width="600" />
                    </Col>
                    <Col span={12} >
                        <div>
                                <div>
                                <img src="../location.png" alt="location" width="20" />
                                </div>
                                <h3>OFFICE</h3>
                                <p>
                                    6 Sukkasem Road <br />
                                    Suthep Sub-District <br />
                                    Mueang District <br />
                                    Chiang Mai 50200 <br />            
                                    <br />
                                    ( Mon - Fri : 08:30 - 17:30 )<br />
                                </p>
                            <br />
                        </div>

                        <div>
                            <img src="../telephone.png" alt="location" width="20" />
                            <h3> TELEPHONE</h3>
                            <p>053-216510</p>
                            <br />
                        </div>

                        <div>
                            <img src="../email.png" alt="location" width="20" />
                            <h3>  EMAIL ADDRESS</h3>
                            <p>natalie.cm@traditionasia.com</p>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Follow us here <DownOutlined />
                                </a>
                            </Dropdown> <br />
                            <Rate allowHalf defaultValue={4} />
                        </div>
                    </Col>
                </Row>
        </div>
    )
}

export default Contact
