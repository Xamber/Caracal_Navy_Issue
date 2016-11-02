import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import CircularProgress from 'material-ui/CircularProgress';

class News extends React.Component {

    render() {

        return (
            <Card style={{flex: '1 1 250px', margin: '20px'}}>

                <CardTitle title={this.props.head} subtitle={this.props.head}/>
                <CardText>
                    {this.props.text}
                </CardText>
                <CardMedia>
                    <img src={this.props.img} role="presentation" alt=""/>
                </CardMedia>

            </Card>
        )
    }
}

class NewsList extends React.Component {

    render() {

        let newsList = this.props.list.map((x, index) => ( <News key={index} head={x.head} text={x.text} img={x.img}/> ));
        let loadMore = this.props.actions.getMoreNews;
        let progress = this.props.progress;

        let button = <RaisedButton onClick={loadMore} label={"Больше новостей"} primary={true} icon={<FileCloudDownload />} style={{margin: 12}}/>
        let circle = <CircularProgress style={{margin: 20}} size={60} thickness={7} />;


        return (
            <div>
                <div className="news" style={{display: 'flex', flexWrap: 'wrap'}}>
                    {newsList}
                </div>
                <div className="news__menu" style={{display: 'flex', justifyContent:'center'}}>
                    { progress  ? circle : button }
                </div>

            </div>
        );
    }
}


export default NewsList
