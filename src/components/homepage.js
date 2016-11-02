import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';


let DateTimeFormat = global.Intl.DateTimeFormat;
let formatDate = new DateTimeFormat('ru', { day: 'numeric', month: 'numeric', year: 'numeric', }).format;

class Homepage extends React.Component {

    render() {
        return <div className="homepage">
                    <RaisedButton label="Default"/>
                    <DatePicker hintText="Выберите время.." locale="ru" DateTimeFormat={DateTimeFormat} formatDate={formatDate} firstDayOfWeek={1} />
               </div>;
    }
}

export default Homepage;
