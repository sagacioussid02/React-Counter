import React, {Component} from 'react'
import CounterButton from './CounterButton'

class Counter extends Component{
    constructor(){
        super()
            this.state= {
                counter: 0
        }
    }

    increment = (by) => {
        console.log("increment mentod from CounterButton called")
        this.setState((prevState) => {
            return {counter: this.state.counter+ by}
        })
    }

    render(){
        return(
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} />
                <CounterButton by={5} incrementMethod={this.increment}/>
                <CounterButton by={10} incrementMethod={this.increment}/>
                <span className="count">{this.state.counter}</span>
            </div>
        )
    }


}

export default Counter