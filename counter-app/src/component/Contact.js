import React from 'react'
import { Row, Col, Card } from 'antd';
import { RightCircleOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
function Contact() {
    return (
        <div style={{paddingLeft: 50}}>
            <Row>
                <Col  span={12}>
                    <h1>Contact us</h1>
                    <RightCircleOutlined />
                </Col>
                <Col  span={12}>
                    <div><img src="../location.png" alt="location" width="20" />OFFICE</div>
                    6 Sukkasem Road <br />
                    Suthep Sub-District <br />
                    Mueang District <br />
                    Chiang Mai 50200 <br />
                    <br />
                    ( Mon - Fri : 08:30 - 17:30 )<br />
                    <br />
                    <h1> <PhoneOutlined /> TELEPHONE</h1>
                    <p>053-216510</p>

                    <h1><MailOutlined />   EMAIL ADDRESS</h1>
                    <p>natalie.cm@traditionasia.com</p>
                </Col>
            </Row>
        </div>
    )
}

export default Contact
