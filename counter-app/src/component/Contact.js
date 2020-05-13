import React from 'react'
import { Col, Rate, Row } from 'antd';


function Contact() {
    return (
        <div>
            <div style={{marginTop: -100, marginBottom: 20}}>
            <h1 style={{float: "left", marginLeft: 120}}>Contact</h1>
                <img src="../blue_line.png" alt="line" width="100%" height="8" />
            </div >
                <Row style={{margin: 300, marginTop: 0, marginBottom: 0}}>
                    <Col span={12}>
                        <img style={{marginTop: 25}} src="../map.jpg" alt="map" width="600" />
                    </Col>
                    <Col span={12} >
                        <div>
                                <div>
                                <img src="../location.png" alt="location" width="20" />
                                </div>
                                <h1>OFFICE</h1>
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
                            <h1> TELEPHONE</h1>
                            <p>053-216510</p>
                            <br />
                        </div>

                        <div>
                            <img src="../email.png" alt="location" width="20" />
                            <h1>  EMAIL ADDRESS</h1>
                            <p>natalie.cm@traditionasia.com</p>
                        
                            <Rate allowHalf defaultValue={4} />
                        </div>
                    </Col>
                </Row>
        </div>
    )
}

export default Contact
