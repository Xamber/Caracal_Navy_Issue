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

                <div className="input-group">
                    <div className="input-group-btn">
                        <button className="btn btn-success" onClick={this.inc}>Увеличить счетчик на {this.state.value} </button>
                        <button className="btn btn-success" onClick={this.dec}>Уменьшить счетчик на {this.state.value} </button>
                        <button className="btn btn-warning" onClick={this.reset}>Обнулить счетчик</button>
                    </div>
                    <input type="number"
                       className="form-control"
                       value={this.state.value}
                       onChange={this.onChangeHandler}
                       placeholder='введите значение'
                    />
                </div>

            </div>
        );

        let progressTemplate = (
            <div><i className="fa fa-spinner fa-spin fa-3x fa-fw"> </i> </div>
        );

        return ( progress ? progressTemplate : mainTempalte );
    }
}


export {Counter}
