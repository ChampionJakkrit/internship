import React from 'react'
import '../App.css';
import { Carousel, Col } from 'antd';
import { UpOutlined } from '@ant-design/icons';

function Home() {
    return (
        <div>
            <Col span={24} style={{marginTop: -100}}>
                <Carousel style={{width: 800, height: 350, marginLeft: 330}} autoplay>
                    <div>
                        <img style={{height: 350, width: 800}} src="../trad.jpg" alt="trad"></img>
                    </div>
                    <div>
                        <img style={{height: 350, width: 800}} src="../dev.jpeg" alt="trad"></img>
                    </div>
                    <div>
                        <img style={{height: 350, width: 800}} src="../trad2.jpg" alt="trad"></img>
                    </div>
                    <div>
                    <img style={{height: 350, width: 800}} src="../graphTrad.jpg" alt="trad"></img>
                    </div>
                </Carousel>
                <div style={{marginTop: 20}}>
                    <h2><UpOutlined /> Trad-X wins Best Industry Infrastructure Initiative</h2>
                    <p>
                    Tradition is the interdealer broking arm of Compagnie Financière Tradition and one of the worlds largest <br />
                     interdealer brokers in over-the-counter financial and commodity related products. Represented in over <br />
                     28 countries, Compagnie Financière Tradition is listed on the Swiss stock exchange.
                    </p>
                </div>
            </Col>
        </div>
    )
}

export default Home
