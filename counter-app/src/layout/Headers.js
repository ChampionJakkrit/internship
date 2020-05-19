import React from 'react'
import { Layout } from 'antd';
import '../App.css';
import { NavLink, Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';

const { Header } = Layout;

const charts = (
    <Menu>
      <Menu.Item >
       <Link to="/scatter_plot">SCATTER PLOTS</Link>
      </Menu.Item>
      <Menu.Item >
        <Link to="/line_chart"> LINE CHARTS</Link>
      </Menu.Item>
      <Menu.Item >
      <Link to="/bar_chart">BAR CHARTS</Link>
      </Menu.Item>
      <Menu.Item >
      <Link to="/pie_chart"> PIE CHARTS</Link>
      </Menu.Item>
      <Menu.Item >
      <Link to="/basic_charts">ALL CHARTS</Link>
      </Menu.Item>
    </Menu>
  )

function Headers() {
    return (
        <div>
            <Header style={{background: "white", padding: 10, height: 100}}>
                <div className="header">
                <img style={{float: "left", paddingTop: 10}} src="./logo.png" alt="logo" width={300} />
                <nav>
                    <ul className='nav-link'>
                    <NavLink to='/' exact activeClassName="active">
                        <li>
                            Home
                        </li>
                    </NavLink>
                    <NavLink to='/counter' activeClassName="active">
                        <li>
                        Counter
                        </li>
                    </NavLink>
                    <Dropdown overlay={charts} to='/basic_charts'>
                        <li>
                        Basic&nbsp;Charts
                        </li>
                    </Dropdown>
                    <NavLink to='/about_us' activeClassName="active">
                        <li>
                        About&nbsp;us
                        </li>
                    </NavLink>
                    <NavLink to='/contact' activeClassName="active">
                        <li>
                        Contact
                        </li>
                    </NavLink>
                    </ul>    
                </nav> 
                </div>
            </Header>
            
        </div>
    )
}

export default Headers
