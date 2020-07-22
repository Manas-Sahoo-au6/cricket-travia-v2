import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getMark} from '../redux/actions/action'

export class Question extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             o1 : this.props.o1,
             o2 : this.props.o2,
             o3 : this.props.o3,
             o4 : this.props.o4
        }
    }
    
    handleChange = (e)=>{
        this.props.getMark({id:this.props.id,o:e.target.value})
    }
    render() {
        return (
            <div className="col-12 question mb-2 rounded bg-secondary p-0">
                <div className="text-light p-2 bg-dark">
                    <h6 className="m-0 p-0">{this.props.q}</h6>
                </div>
                <div className="col-12 p-1">
                    <select required id={this.props.id} name={this.props.id} className="form-control col-4 m-3" onChange={this.handleChange}>
                        <option value="">Select option</option>
                        <option value={this.state.o1}>{this.state.o1}</option>
                        <option value={this.state.o2}>{this.state.o2}</option>
                        <option value={this.state.o3}>{this.state.o3}</option>
                        <option value={this.state.o4}>{this.state.o4}</option>
                        </select>
                </div>
            </div>
        )
    }
}
const mapStateToProps =state=>{return {...state}}
const mapDispatchToProps = dispatch =>{
    return {
        getMark:(payload)=>dispatch(getMark(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Question)
