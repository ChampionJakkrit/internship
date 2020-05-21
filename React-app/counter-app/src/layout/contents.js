import React from 'react'
import { Card, Layout } from 'antd';
import { Route } from 'react-router-dom';

import Home from '../component/Home';
import Counter from '../component/Counter';
import Basic_charts from '../plotly/Basic_charts';
import Bar_chart from '../plotly/Bar_chart';
import Pie_chart from '../plotly/Pie_chart';
import Line_chart from '../plotly/Line_chart';
import Scatter_plot from '../plotly/Scatter_plot';
import About_us from '../component/About_us';
import Contact from '../component/Contact';
import Login from '../component/Login';

import GridLogin from '../layout/gridLogin'

const { Content } = Layout;

const LoginLayout = ({component: Component, layout: Layout, ...rest}) => (
    <Route {...rest} render= {props => (
      <GridLogin>
        <Component {...rest}></Component>
      </GridLogin>
    )}>
    </Route>
  )

function Contents() {
    return (
        <div>
            <Content style={{background: "white", minHeight: 620}}>
                <Card style={{ minHeight: 620, paddingTop: 100}}>
                    <Route path="/" exact component={Home} />
                    <Route path="/counter" component={Counter} />
                    <Route path="/basic_charts" component={Basic_charts} />
                    <Route path="/bar_chart" component={Bar_chart} />
                    <Route path="/pie_chart" component={Pie_chart} />
                    <Route path="/line_chart" component={Line_chart} />
                    <Route path="/scatter_plot" component={Scatter_plot} />
                    <Route path="/about_us" component={About_us} />
                    <Route path="/contact" component={Contact} />
                    <LoginLayout path="/login" component={Login} />   
                </Card>     
                
            </Content>
        </div>
    )
}

export default Contents
