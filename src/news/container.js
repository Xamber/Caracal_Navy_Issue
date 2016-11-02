import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import NewsList from './components';
import * as actions from './actions'

const mapStateToProps = (state) => ({list: state.news.list, progress: state.news.progress});
const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(actions, dispatch)});

let NewsApp = connect(mapStateToProps, mapDispatchToProps)(NewsList);

export default NewsApp