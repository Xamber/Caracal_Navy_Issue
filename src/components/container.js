import React from 'react';
import Paper from 'material-ui/Paper';

const styles = {padding: 0};

class Container extends React.Component {

    render() {
        return <Paper className="container" style={styles} zDepth={4}> {this.props.children} </Paper>
    }
}

export default Container;
