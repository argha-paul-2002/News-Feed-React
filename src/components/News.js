import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsFeed - Top headlines</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <NewsItem title="This is title" description="This is Desc"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="This is title" description="This is Desc"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="This is title" description="This is Desc"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="This is title" description="This is Desc"/>
          </div>
        </div>
      </div>
    )
  }
}

export default News
