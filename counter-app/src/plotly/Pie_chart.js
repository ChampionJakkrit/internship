import React, {Component} from 'react';
import { PageHeader, Col, Row  } from 'antd';
import {Bar, Line, Pie, Scatter} from 'react-chartjs-2';

class Pie_chart extends Component{
  constructor(props){
    super(props);
    this.state = {
        chartData:{
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
            datasets:[
              {
                label:'Population',
                data:[
                  617594,
                  181045,
                  153060,
                  106519,
                  105162,
                  95072
                ],
                pointHoverRadius: 6,
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(153, 102, 255, 0.6)',
                  'rgba(255, 159, 64, 0.6)',
                  'rgba(255, 99, 132, 0.6)'
                ],
              }
            ]
          },
          scatterData:{
            datasets:[
              {
                label: '1: Boston',
                fill: true,
                pointBorderColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                  ],
                pointBackgroundColor: '#fff',
                pointBorderWidth: 6,
                pointHoverRadius: 6,
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [
                    { x: 1, y: 617594 },
                    { x: 2, y: 181045 },
                    { x: 3, y: 153060 },
                    { x: 4, y: 106519 },
                    { x: 5, y: 105162 },
                    { x: 6, y: 95072  }
                  ],
              }
            ]
          }   
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
  }
  

  render(){
    return (
    <div>
        <div style={{marginTop: -115, marginBottom: 50}}>
            <PageHeader style={{float: "left", marginLeft: 120}}
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Pie chart"
            />
            <img src="../blue_line.png" alt="line" width="100%" height="8" />
        </div>
        <div className="chart">
            <Row>
                <Col span={24}>
                    <Pie
                        data={this.state.chartData}
                        options={{
                            title:{
                                display:this.props.displayTitle,
                                text:'Bar chart of largest cities in Massachusetts',
                                fontSize:25
                            },
                            legend:{
                                display:this.props.displayLegend,
                                position:this.props.legendPosition
                            }
                        }}
                    />
                </Col>
            </Row>
        </div>
    </div>   
    )
  }
}

export default Pie_chart;
