import React, { useState } from 'react'
import '../App.css';
import { Button, InputNumber, Space, Input } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined, CloseCircleOutlined, UndoOutlined, DollarOutlined } from '@ant-design/icons';

function Counter() {
    const [clicks, setClicks] = useState(0)
    const [steps, setSteps] = useState(1)

    const incrementClick = () => {
        setClicks(clicks + steps);
    }

    const decrementClick = () => {
        setClicks(clicks - steps);
    }

    const onChange = (value) => {
        setSteps(value)
      }

    const clear = () => {
        setClicks(0)
    }

    const reset = () => {
        setClicks(0)
        setSteps(1)
    }

    const styleCounter = {
        paddingLeft: '1rem',
    }

    const styleStep =  {
        paddingLeft: '2.5rem',
        marginBottom: 30

    }

    return (
        <div className="Center">  
            <span>
                <label style={{float: "left"}}>Counter</label>
                <br />
                <Input className="TextRight" style={styleCounter} prefix={<DollarOutlined />}
                readOnly value={clicks} />
            </span>
            <span>
                <label style={{float: "left"}}>Steps</label>
                <br />
                <InputNumber className="TextRight" style={styleStep} 
                value={steps} onChange={onChange} />
                <br />
            </span>
            <br />
            <Space>
            <Button type="primary" onClick={incrementClick}><PlusCircleOutlined />Increase</Button>
            <Button type="primary" danger onClick={decrementClick}><MinusCircleOutlined />Reduce</Button>
            <Button danger onClick={clear}><CloseCircleOutlined />Clear</Button>
            <Button onClick={reset}><UndoOutlined />Reset</Button>
            </Space>
        </div>
    )
}

export default Counter
