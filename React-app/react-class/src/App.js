import React from 'react';
import Counter from './components/Counter';

class App extends React.Component {

  // constructor
	constructor(props) {
    super(props); 		
  }
  
  // view
	render() {
		return (
      <Counter />
		);
  }
  
}

export default App;