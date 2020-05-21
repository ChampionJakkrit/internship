import React from 'react'
import { Layout } from 'antd';

const { Footer } = Layout;

function Footers() {
    return (
        <div>
            <Footer style={{ textAlign: 'center', padding: 10, font: "Noto Sans"}}>
            <p>© 2020 TRADITION BROKERS (THAILAND) CO. LTD</p>
            <b style={{margin: 0}}>ALL RIGHT RESERVED.</b>
            </Footer>          
        </div>
    )
}

export default Footers
