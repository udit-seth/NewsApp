import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = (props) => {


    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='container my-3'>
            <div className="card" >
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger" >{source}</span>
                </div>
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

export default NewsItem;