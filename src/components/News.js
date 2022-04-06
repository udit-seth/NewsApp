import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jennifer Deaton and Lauren Said-Moorhouse, CNN",
            "title": "Ukraine's Zelensky questions UN Security Council's mandate in speech on alleged Russian atrocities - CNN",
            "description": "Ukrainian President Volodymyr Zelensky accused Russian troops of indiscriminately killing civilians \"for their pleasure\" in an emotionally-charged address to the United Nations Security Council on Tuesday, a day after he visited the Kyiv suburb of Bucha, wher…",
            "url": "https://www.cnn.com/2022/04/05/world/zelensky-ukraine-united-nations-speech-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220405105004-03-un-ukraine-zelensky-super-tease.jpg",
            "publishedAt": "2022-04-06T04:16:00Z",
            "content": "(CNN)Ukrainian President Volodymyr Zelensky accused Russian troops of indiscriminately killing civilians \"just for their pleasure\" in an emotionally-charged address to the United Nations Security Cou… [+5905 chars]"
        },
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Vivian Salama",
            "title": "The Russia-Ukraine War: April 5, 2022 - The Wall Street Journal",
            "description": "Full coverage of Russia’s invasion of Ukraine",
            "url": "https://www.wsj.com/livecoverage/russia-ukraine-latest-news-2022-04-05",
            "urlToImage": "https://images.wsj.net/im-518560/social",
            "publishedAt": "2022-04-06T04:06:00Z",
            "content": "BRUSSELSThe Biden administration is preparing to impose a second round of sanctions on Russia this week, including on two of its biggest banks and on two daughters of Russian President Vladimir Putin… [+1728 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "John Bacon, Jorge L. Ortiz and Celina Tebor, USA TODAY",
            "title": "'A clear stand against Putin’s war of choice': US, EU to impose new sanctions against Russia; six charred bodies found: Live Ukraine updates - USA TODAY",
            "description": "The US and EU plan to impose new sanctions hours after Zelenskyy called on the UN to punish Russia for its alleged war crimes. Live updates.",
            "url": "https://www.usatoday.com/story/news/politics/2022/04/05/ukraine-russia-invasion-putin-updates/9465033002/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/04/06/USAT/3b2f9b76-e472-4521-98de-a462e6706c6d-Ukraine10.jpg?auto=webp&crop=5759,3240,x0,y292&format=pjpg&width=1200",
            "publishedAt": "2022-04-05T23:37:32Z",
            "content": "The United States and the European Union plan to impose stiff new sanctions against Russia in retaliation for its “war crimes” in Ukraine after revelations of atrocities in towns near Kyiv, including… [+12815 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Eleanor Watson",
            "title": "Top U.S. military officer expects Ukraine conflict to be \"measured in years\" - CBS News",
            "description": "Chairman of the Joint Chiefs of Staff General Mark Milley told Congress Tuesday that Russia initiated a conflict in Ukraine that will last for quite some time.",
            "url": "https://www.cbsnews.com/news/ukraine-conflict-years-mark-milley-house-armed-services-committee/",
            "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2022/04/05/f0e5e0bc-4cc8-4e05-8172-2f4473fb039a/thumbnail/1200x630/fe32d5bc350a79ce2eb18e49d233c60b/ap22095552209138.jpg",
            "publishedAt": "2022-04-05T20:46:00Z",
            "content": "The highest ranking military officer in the U.S. said Tuesday that he expects the conflict in Ukraine to last years. \r\n\"I do think this is a very protracted conflict, and I think it's measured in yea… [+3499 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Christian Davenport",
            "title": "Vande Hei says Russian cosmonauts didn't mean for yellow suits to be a comment on Ukraine - The Washington Post",
            "description": "In his first public comments since returning to Earth aboard a Russia space craft, astronaut Mark Vande Hei says the war in Ukraine didn't hurt relationships aboard the International Space Station.",
            "url": "https://www.washingtonpost.com/technology/2022/04/05/mark-vande-hei-russia-ukraine-yellow-suits/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/P26YRSFSTII6ZHN5BVDATVCMDQ.jpg&w=1440",
            "publishedAt": "2022-04-05T18:32:13Z",
            "content": "He stayed away from social media, so he didnt see the tweets from the head of the Russian space agency suggesting that the International Space Station might crash into the ground, or even leave him b… [+3254 chars]"
        }

    ]
    constructor() {
        super();
        console.log("I am a constructor from news component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div>
                <div className="container my-3">
                    <h2>NewsBuddy - Top Headlines</h2>

                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title.slice(0, 63)} description={element.description.slice(0, 45)} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>

                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default News