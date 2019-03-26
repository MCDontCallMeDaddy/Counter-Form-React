import React, { Component } from 'react'                            // React must be in scope since JSX compiles into calls top React.createElement, the React library must also always be in scope from your JSX code.
import IncrementButton from './IncrementButton'                     // Importing the Button Component into the scope of the Counter.js file
import DecrementButton from './DecrementButton'                     // Importing the Button Component into the scope of the Counter.js file

class Counter extends Component {                                   // 
    constructor(props) {
        super(props)

        this.state= {
            currentNumber: 0,
            showCard: false,
        }

        this.incrementNumber = this.incrementNumber.bind(this)
        this.decrementNumber = this.decrementNumber.bind(this)
        this.handleIncrementButtonClick = this.handleIncrementButtonClick.bind(this)
        this.toggleShowCard = this.toggleShowCard.bind(this)
    }

    incrementNumber() {
        console.log('Your Number' + this.state.currentNumber)
        this.setState({
            currentNumber: this.state.currentNumber + 1
        })
    }

    decrementNumber() {
        console.log('Your Number' + this.state.currentNumber)
        this.setState({
            currentNumber: this.state.currentNumber - 1
        })
    }

    toggleShowCard() {
        console.log("toggleShowCard", this.state.showCard);
        if (this.setState({showCard: false})) {
            this.setState({showCard: true})
        } else if (this.setState({showCard: true})) {
            this.setState({showCard: false})
        }

        // if (this.state.showCard === false) {
        //     this.state.showCard = true
        //   } else if (this.state.showCard === true) {
        //     this.state.showCard = false
        //   }
    }

    handleIncrementButtonClick() {
        this.incrementNumber();
        this.toggleShowCard();
    }

    render() {

        const fishDiv = <div style={{height: "100px", width: "100px", background: "#0cc", border: "solid", margin: "0px auto"}}>Fish</div>;
        const fishCard = (this.state.showCard) ? fishDiv : "";

        return (
            <div>
            <IncrementButton onclick={this.handleIncrementButtonClick}/>
            <p>{this.state.currentNumber}</p>
            {fishDiv}
            {fishCard}
            <DecrementButton onclick={this.decrementNumber}/>
            </div>
        )
    }
}

export default Counter