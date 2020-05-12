import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Card } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './component/Home';
import Counter from './component/Counter';
import About_us from './component/About_us';
import Contact from './component/Contact';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
      <Router>
        <Header style={{background: "white", padding: 10, height: 100}}>
          <img style={{float: "left", paddingTop: 10}} src="./logo.png" alt="logo" width={300} />
          <nav>
              <ul className='nav-link'>
              <Link to='/' style={navStyle}>
                  <li>
                    Home
                  </li>
              </Link>
              <Link to='/counter'>
                <li>
                  Counter
                </li>
              </Link>
              <Link to='/about_us'>
                <li>
                  About&nbsp;us
                </li>
              </Link>
              <Link to='/contact'>
                <li>
                  Contact
                </li>
              </Link>
              </ul>    
          </nav> 
        </Header>

        <Content style={{background: "white", minHeight: 620}}>
          <Card style={{ minHeight: 620, paddingTop: 100}}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/counter" component={Counter} />
              <Route path="/about_us" component={About_us} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Card>
        </Content>

        <Footer style={{ textAlign: 'center', padding: 10, font: "Noto Sans"}}>
          <p>© 2020 TRADITION BROKERS (THAILAND) CO. LTD</p>
          <b style={{margin: 0}}>ALL RIGHT RESERVED.</b>
        </Footer>
        </Router>
      </Layout> 
    </div>
  );
}

const navStyle = {

}

export default App;
