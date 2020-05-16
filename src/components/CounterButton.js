import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import './Counter.css'

class CounterButton extends Component {

    //Define initial state in the constructor
    constructor(){
        super()
        this.state= {
            counter: 0
        }
        //this.increment = this.increment.bind(this) //we dont need binding if we use arrow function
    }

    increment = () => {
        //we dont change the state directly
        //so we use setstate
        this.setState({
            counter: this.state.counter+ this.props.by
        })

        this.props.incrementMethod(this.props.by)
    }

    render(){
        
        return (
            <div>
                <Button className="button" onClick={this.increment}>{this.props.by}</Button>
                <Button className="button" onClick={this.increment}>{this.props.by}</Button>
                <span className="count">{this.state.counter}</span>
            </div>
        )
    }
}



export default CounterButton

