import React from 'react';


class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 1};

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
        this.reset = this.reset.bind(this);
    }

    onChangeHandler(e) {
        this.setState({value: parseInt(e.target.value)})
    }

    inc() {
        this.props.actions.incCounter(this.state.value)
    }

    dec() {
        this.props.actions.decCounter(this.state.value)
    }

    reset() {
        this.props.actions.resetCounter()
    }

    render() {

        let counter = this.props.counter;
        let progress = this.props.progress;

        let mainTempalte = (
            <div className="counter">

                <h1>{counter} {progress}</h1>
                <button onClick={this.inc}>Увеличить счетчик на {this.state.value} </button>
                <button onClick={this.dec}>Уменьшить счетчик на {this.state.value} </button>
                <button onClick={this.reset}>Обнулить счетчик</button>

                <input type="number"
                       value={this.state.value}
                       onChange={this.onChangeHandler}
                       placeholder='введите значение'
                />

            </div>
        );

        let progressTemplate = (
            <div>Reseting in progress...</div>
        );


        return ( progress ? progressTemplate : mainTempalte );
    }
}


export {Counter}
