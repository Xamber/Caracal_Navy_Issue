// React modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router'

// Store section
import configureStore from './configureStore'

const initialState = {
    counter: {counter: 3, progress: false},
};

let store = configureStore(initialState);

// Components
import Head from './components/head'
import Homepage from './components/homepage'
import About from './components/about'
import {CounterApp} from './counter/container'

// Main Class
class Main extends React.Component {
    render() {
        return <div className='application'>
                    <Head />
                    <nav>
                        <ul>
                            <li><Link to='/' onlyActiveOnIndex={true} activeClassName='active'>Homepage</Link></li>
                            <li><Link to='/news' activeClassName='active'>News</Link></li>
                            <li><Link to='/about' activeClassName='active'>About</Link></li>
                        </ul>
                    </nav>
                    {this.props.children}
                </div>;
    }
}

// Init
window.onload = function () {

    ReactDOM.render(<Provider store={store}>
                        <Router history={browserHistory}>
                            <Route path='/' component={Main}>
                                <IndexRoute component={Homepage}/>
                                <Route path='news' component={CounterApp}/>
                                <Route path='about' component={About}/>
                            </Route>
                        </Router>
                    </Provider>,
        document.getElementById('root')
    );
};