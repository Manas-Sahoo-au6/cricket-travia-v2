import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getMark} from '../redux/actions/action'
import Question from './Question'
import "./style.css"
import BarChart from './BarChart'
import {data} from './data'

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           data:[ ]
        }
    }
    handleClear = (e)=>{
        e.preventDefault()
        console.log('handle clear fired')
        this.setState({
            data: [ null ]
          })
    }
    
    handleSubmit = (e) =>{
        e.preventDefault()
        const {data,result} = this.props
        const ques = Object.values(data)
        const ques1 = Object.values(result)
        let correct = 0
        let wrong =0
        ques.forEach((e,i)=>{
            if(ques[i]===ques1[i]){
                correct +=1
            }else{
                wrong +=1 
            }})
        console.log({correct,wrong})
        this.setState({
            data: [{
                key: "correct",
                value: correct
            },
            {
                key: "Incorrect",
                value: wrong
            }]
          })
        console.log(this.props.data)
    }
    render() {
        return (
            <div className="row col-12 mt-5">
            <form className='form col-6'  >
            <div style={{maxWidth:"100%"}} className="col-6 bg-lightgray p-2">
                {data.map(d=>
                <Question id={d.id} q={d.q} o1={d.o1} o2={d.o2} o3={d.o3} o4={d.o4} reset={this.state.reset}/>
                )}
                
                <div className="btn-group col-12 p-0">
                    <button onClick={this.handleSubmit} className="btn btn-primary" type='submit'>Submit</button>
                    <button onClick={this.handleClear} className="btn btn-danger">Clear Values</button>
                </div>
            </div>
            </form>
        <div className="col-6 bg-lightgray p-2">
            <BarChart data={this.state.data}  />
        </div>
    </div>
        )
    }
}
const mapStateToProps = state =>{return {...state}}
const mapDispatchToProps = dispatch =>{
    return {
        getMark:()=>dispatch(getMark())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
