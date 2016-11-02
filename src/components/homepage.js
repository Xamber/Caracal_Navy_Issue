import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Homepage extends React.Component {

    render() {
        return <div className="homepage">
                    <p>Homepage</p>
                    <RaisedButton label="Default" />
               </div>;
    }
}

export default Homepage;
