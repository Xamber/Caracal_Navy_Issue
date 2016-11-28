import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {Counter} from './components';
import * as actions from './actions'

const mapStateToProps = (state) => ({counter: state.counter.counter, progress: state.counter.progress});
const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

let CounterApp = connect(mapStateToProps, mapDispatchToProps)(Counter);

export {CounterApp}