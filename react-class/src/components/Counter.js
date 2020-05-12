import React from 'react';
import { PageHeader, Button, Badge, Card } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { PlusCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";

class Counter extends React.Component {

  // constructor
	constructor(props) {
    super(props);
    
    // state
		this.state = {
      clicks: 1
		};				
  }
  
  // functions
	incrementClicks = () => {
		this.setState({
			clicks: this.state.clicks + 1
		});
  }
  
	decrementClicks = () => {
		this.setState({
			clicks: this.state.clicks - 1
		});
  }
  
  // view
	render() {

		return (
			<div className="container">

        <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Simple Counter Class"
  />,

<Card>
  
          
<div>
        <Badge count={this.state.clicks}>
          <hr/>
          <h2>Counter State</h2>
          <hr/>
        </Badge>
        </div>

</Card>

        <Card>


				<Button type="primary" onClick={this.incrementClicks}>
        Increment <PlusCircleOutlined />
        </Button>

				<Button danger onClick={this.decrementClicks}>
        Decrement <MinusCircleOutlined />
        </Button>

        </Card>

			</div>
		);
  }
  
}

export default Counter;