import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super();
    this.state = {
      articles : [],
      loading: false,
      page: 1
    }
  }

 async  componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=b84939f6a9f442628803da1e4f01133f&page=1";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsFeed - Top headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4 mb-3"  key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>

          })}
        </div>
        <div className="container d-flex justify-content-between p-0">
        <button type="button" class="btn btn-dark">Previous</button>
        <button type="button" class="btn btn-dark">Next</button>
        </div>
      </div>
    )
  }
}

export default News
