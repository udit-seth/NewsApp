import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        console.log("I am a constructor from news component");
        this.state = {
            articles: [],
            loading: false
        }
    }


    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d31d284b60be4976a3037f2460320913";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
    }
    render() {
        return (
            <div>
                <div className="container my-3">
                    <h2>NewsBuddy - Top Headlines</h2>

                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 63) : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>

                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default News