import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import CircularProgress from 'material-ui/CircularProgress';

class News extends React.Component {

    render() {

        return (
            <Card style={{flex: '1 1 250px', margin: '20px'}}>

                <CardMedia>
                    <img src={this.props.media} role="presentation" alt=""/>
                </CardMedia>
                <CardTitle title={this.props.title} subtitle={this.props.title}/>
                <CardText>
                    {this.props.text}
                </CardText>

            </Card>
        )
    }
}

class NewsList extends React.Component {

    render() {

        let newsList = this.props.list.map(
            (x, index) => (
                <News key={x.id} title={'Новость группы Зенит'} text={x.text} media={x.attachments && x.attachments[0].photo ? x.attachments[0].photo.photo_604 : ''} /> )
        );
        let loadMore = this.props.actions.getMoreNews;
        let progress = this.props.progress;

        let button = <RaisedButton onClick={loadMore} label={"Больше новостей"} primary={true} icon={<FileCloudDownload />} style={{margin: 12}}/>;
        let circle = <CircularProgress style={{margin: 20}} size={60} thickness={3} />;

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
