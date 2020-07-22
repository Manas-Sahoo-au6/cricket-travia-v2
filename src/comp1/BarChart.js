import React, { Component } from 'react'
import data from './data'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip
  } from 'recharts';

class Barchart extends Component {
    constructor(props) {
        super(props)
       console.log(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
            <h1>Your Result</h1>
            <BarChart width={600} height={400} data={this.props.data}>
              <XAxis dataKey="key" />
              <YAxis />
              <Tooltip />
              <Bar  dataKey="value" />
            </BarChart>
          </div>
            
        )
    }
}

export default Barchart