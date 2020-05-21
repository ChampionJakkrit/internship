import React, {useState} from 'react';
import { PageHeader, Button, Badge, Card } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

const Counter = () => {

  // react hook (state, setState)
  const [clicks, setClicks] = useState(1);
  
  // functions
	const incrementClicks = () => {
    setClicks(clicks + 1)
  }
  
	const decrementClicks = () => {
		setClicks(clicks - 1)
  }
  
  // view
		return (
			<div className="container">

        <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Simple Counter Function"
  />,

<Card>
  
          
<div>
        <Badge count={clicks}>
          <hr/>
          <h2>Counter State</h2>
          <hr/>
        </Badge>
        </div>

</Card>

        <Card>


				<Button type="primary" onClick={incrementClicks}>
        Increment <PlusCircleOutlined />
        </Button>

				<Button danger onClick={decrementClicks}>
        Decrement <MinusCircleOutlined />
        </Button>

        </Card>

			</div>
		);
  }
  

export default Counter;