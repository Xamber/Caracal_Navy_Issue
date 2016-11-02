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
import {initialState} from './initialState'

export let store = configureStore(initialState);

// Components
import Homepage from './components/homepage'
import About from './components/about'
import Container from './components/container'
import NewsApp from './news/container'
import {Tabs, Tab} from 'material-ui/Tabs';

import background from './media/bg.jpg';

// Main Class
class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "Homepage",
        };
    }

    handleChange = (value) => {
        this.setState({
          value: value,
        });
      };

    render() {

        return <Container>
                    <img style={{display: 'block', width: '100%'}} src={background} alt=""/>
                    <Tabs onChange={this.handleChange} value={this.state.value} >
                       <Tab value={"Homepage"} label="Главная страница" containerElement={<Link to='/' onlyActiveOnIndex={true} activeClassName='active'/>} />
                       <Tab value={"News"} label="Новости" containerElement={<Link to='/news' activeClassName='active'/>}/>
                       <Tab value={"About"} label="О Компании" containerElement={<Link to='/about' activeClassName='active'/>} />
                    </Tabs>
                    {this.props.children}
                </Container>;
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