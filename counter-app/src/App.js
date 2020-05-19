import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// layout
import Headers from './layout/Headers';
import Footers from './layout/Footers';
import Contents from './layout/contents';

const AppRoute = ({component: Component, layout: Layout, ...rest}) => (
  <Route {...rest} render= {props => (
    <Layout>
      <Component {...props}></Component>
    </Layout>
  )}>
  </Route>
)

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoute component={Headers} layout={Headers} />
        <AppRoute component={Contents} layout={Contents} />
        <AppRoute component={Footers} layout={Footers} />
      </Router>
    </div>
  );
}

export default App;
