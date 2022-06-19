import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='container my-3'>
                <div className="card" >
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1" }}>{source}</span>
                    <img src={imageUrl ? imageUrl : "https://st1.bgr.in/wp-content/uploads/2022/06/WWDC-2022-1.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}....</p>
                        <p className="card-text"><small className="text-danger">By {author ? author : "Anonymous"} on {new Date(date).toGMTString()}</small></p>
                        <Link to={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem