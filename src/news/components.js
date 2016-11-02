import React from 'react';

class News extends React.Component {

    render() {

        let self = this;

        return (
            <div className="news__item">
                <div className="news__img">
                    <img src={self.props.img} role="presentation" alt=""/>
                </div>
                <div className="news__head">
                    {self.props.head}
                </div>
                <div className="news__text">
                    {self.props.text}
                </div>
            </div>
        )
    }
}

class NewsList extends React.Component {

    render() {

        let newsList = this.props.list.map((x, index) => ( <News key={index} head={x.head} text={x.text} img={x.img}/> ));
        let loadMore = this.props.actions.getMoreNews;
        let progress = this.props.progress;

        return (
            <div className="news">
                {newsList}
                <button onClick={loadMore}>Больше новостей {progress}</button>
            </div>
        );
    }
}


export default NewsList
