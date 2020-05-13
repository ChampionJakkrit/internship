import React, { useState } from 'react'
import '../App.css';
import { Button, InputNumber, Input, Table, Tag, Space  } from 'antd';
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

    const styleStep = {
        width: '6rem',
        paddingLeft: '3rem',
        marginBottom: 30
    }

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        //   render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              Invite {record.name}
            </Space>
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'P Mom',
          age: 32,
          address: 'Tradition Asia',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'P Bow',
          age: 42,
          address: 'Tradition Asia',
          tags: ['cool', 'developer'],
        },
        {
          key: '3',
          name: 'Champ',
          age: 21,
          address: 'Tradition Asia',
          tags: ['loser', 'student'],
        },
      ];

    return (
        <div>  
            <div style={{marginTop: -100, marginBottom: 50}}>
            <h1 style={{float: "left", marginLeft: 120}}>Counter</h1>
                <img src="../blue_line.png" alt="line" width="100%" height="8" />
            </div>

            <div style={{marginTop: 50}}>
            <span>
                <label style={{float: "left"}}>Counter</label>
                <br />
                <Input className="TextRight" style={styleCounter} prefix={<DollarOutlined />}
                readOnly value={clicks} />
            </span>
            <span>
                <label style={{float: "left"}}>Steps</label>
                <br />
                <InputNumber style={styleStep} 
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

            <div className="table" style={{marginTop: 50, marginLeft: 440, width: 800}}>
                <Table columns={columns} dataSource={data} />
            </div>
        </div>
    )
}

export default Counter
