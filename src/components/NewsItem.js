import React from 'react'

const NewsItem = (props)=>{
    let {title, description,imageUrl,newsUrl,author,date,source} = props;
    return (
      <div>
        <div className="card">
          <div style={{display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'}}>
          <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img height="270px" width="30px" src={!imageUrl?"https://i.ytimg.com/vi/54YLW-zseMo/maxresdefault.jpg":imageUrl} className="card-img-top" alt='NewsFeed' />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown Author":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
