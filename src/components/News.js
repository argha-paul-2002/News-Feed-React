import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country: "in",
    pageSize: 5,
    category: "general"
  }

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  constructor(props){
    super(props);
    this.state = {
      articles : [],
      loading: false,
      page: 1
    }
    document.title = `NewsFeed - ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b84939f6a9f442628803da1e4f01133f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false})
  }

 async  componentDidMount(){
   this.updateNews();
  }

  handlePrevClick = async()=>{
    this.setState({
        page: this.state.page-1,
    })
    this.updateNews();
  }
  handleNextClick = async()=>{
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
           this.setState({
        page: this.state.page+1,
    })
    this.updateNews();

    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className='text-center my-4'>NewsFeed - Top {this.capitalizeFirstLetter(this.props.category)} headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4 mb-3"  key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
          </div>

          })}
        </div>
        <div className="container d-flex justify-content-between p-0">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
