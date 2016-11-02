// React modules
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

// Store section
import configureStore from './configureStore'

const initialState = {
    news: {
        list: [
            {
                id: 1,
                head: 'News 1',
                img: 'http://www.mountainguides.com/photos/everest-south/upper-mountain-shadow_jm.jpg',
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti minus nesciunt nihil praesentium. Accusamus animi assumenda beatae dolorum eius ipsa neque quidem similique? Aliquam doloribus modi quas. Accusantium commodi dignissimos, eius hic id perferendis quas saepe sapiente suscipit veniam.",
            },
            {
                id: 2,
                head: 'News 2',
                img: 'http://www.mountainguides.com/photos/everest-south/upper-mountain-shadow_jm.jpg',
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti minus nesciunt nihil praesentium. Accusamus animi assumenda beatae dolorum eius ipsa neque quidem similique? Aliquam doloribus modi quas. Accusantium commodi dignissimos, eius hic id perferendis quas saepe sapiente suscipit veniam.",
            },
            {
                id: 3,
                head: 'News 3',
                img: 'http://www.mountainguides.com/photos/everest-south/upper-mountain-shadow_jm.jpg',
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti minus nesciunt nihil praesentium. Accusamus animi assumenda beatae dolorum eius ipsa neque quidem similique? Aliquam doloribus modi quas. Accusantium commodi dignissimos, eius hic id perferendis quas saepe sapiente suscipit veniam.",
            },
        ],
        progress: false
    }
};

let store = configureStore(initialState);

// Components
import Head from './components/head'
import Homepage from './components/homepage'
import About from './components/about'
import NewsApp from './news/container'

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

    ReactDOM.render(<MuiThemeProvider>
                        <Provider store={store}>
                            <Router history={browserHistory}>
                                <Route path='/' component={Main}>
                                    <IndexRoute component={Homepage}/>
                                    <Route path='news' component={NewsApp}/>
                                    <Route path='about' component={About}/>
                                </Route>
                            </Router>
                        </Provider>
                    </MuiThemeProvider>,
        document.getElementById('root')
    );
};