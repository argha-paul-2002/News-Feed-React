import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": { "id": "talksport", "name": "TalkSport" },
      "author": "161385360554578",
      "title": "Arsenal book Rice medical, Mount slammed for Chelsea farewell, Thiago rejects Saudi offer",
      "description": "talkSPORT.com brings you all the latest football news, views and transfer gossip. Check out the headline stories and follow our live blog below for regular updates throughout the day. Headlines: EV…",
      "url": "https://talksport.com/football/1486182/football-news-live-rice-mount-arsenal-chelsea-man-utd/",
      "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/07/OQ-TALKSPORT-BLOG-5TH-JULY.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      "publishedAt": "2023-07-05T07:06:14Z",
      "content": "talkSPORT’s Rory Jennings was left far from impressed with Mason Mount’s goodbye message to Chelsea fans.\r\nThe 24-year-old is set to complete a move\r\n to Manchester United\r\n this summer in a £55milli… [+1846 chars]"
    },
    {
      "source": { "id": "fox-sports", "name": "Fox Sports" },
      "author": null,
      "title": "Riqui Puig leads Galaxy to win over LAFC in front of MLS record crowd of 82,110",
      "description": "Riqui Puig had a goal and an assist as the LA Galaxy defeated Los Angeles Football Club 2-1 before an MLS record crowd of 82,110 at the Rose Bowl.",
      "url": "http://www.foxsports.com/stories/soccer/riqui-puig-leads-galaxy-to-win-over-lafc-in-front-of-mls-record-crowd-of-82110",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/07/1408/814/puig1.jpg?ve=1&tl=1",
      "publishedAt": "2023-07-05T06:17:36Z",
      "content": "Riqui Puig had a goal and an assist as the LA Galaxy defeated Los Angeles Football Club 2-1 on Tuesday night before an MLS record crowd of 82,110 at the Rose Bowl.\r\nThe 18th edition of the LA rivalry… [+1565 chars]"
    },
    {
      "source": { "id": "fox-news", "name": "Fox News" },
      "author": "Chantz Martin",
      "title": "Multiple Indoor Football League players suspended indefinitely, fan ejected following after wild melee",
      "description": "A scary scene during the last seconds of Monday's Indoor Football League game started with players jumping into the stands, and ended with multiple suspensions.",
      "url": "https://www.foxnews.com/sports/indoor-football-league-players-suspended-following-melee",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/07/Arizona-Rattlers-Massachusetts-Pirates.jpg",
      "publishedAt": "2023-07-05T01:31:49Z",
      "content": "A brawl broke out during the final moments of an Indoor Football League game on Monday.\r\nThere was less than 60 seconds remaining on the clock in the game between the Massachusetts Pirates and the Ar… [+1861 chars]"
    },
    {
      "source": { "id": "abc-news", "name": "ABC News" },
      "author": "The Associated Press",
      "title": "Australian rules footballer diagnosed with CTE in landmark finding for female athletes",
      "description": "The Australian Sports Brain Bank has diagnosed a former Australian rules football player with chronic traumatic encephalopathy in a landmark finding for female professional athletes",
      "url": "https://abcnews.go.com/Sports/wireStory/australian-rules-footballer-diagnosed-cte-landmark-finding-female-100691546",
      "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
      "publishedAt": "2023-07-05T01:02:17Z",
      "content": "ADELAIDE, Australia -- A former Australian rules football player has been diagnosed with chronic traumatic encephalopathy in a landmark finding for female professional athletes.\r\nThe Concussion Legac… [+3108 chars]"
    },
    {
      "source": { "id": "espn", "name": "ESPN" },
      "author": "Blake Baumgartner",
      "title": "Texas A&M football lands top WR in '24 class Cameron Coleman - ESPN",
      "description": "Cameron Coleman, the top wide receiver in the 2024 class and the No. 8 overall prospect, committed to Texas A&M on Tuesday.",
      "url": "https://www.espn.com/college-football/story/_/id/37960721/texas-football-lands-top-wr-24-class-cameron-coleman",
      "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0505%2Fr80353_1296x729_16%2D9.jpg",
      "publishedAt": "2023-07-05T00:02:43Z",
      "content": "Five-star wide receiver Cameron Coleman, the top wide receiver in the 2024 class, committed to Jimbo Fisher and Texas A&amp;M on Tuesday.\r\nColeman (No. 8 overall in the 2024 ESPN 300), from Central H… [+2675 chars]"
    },
    {
      "source": { "id": "bleacher-report", "name": "Bleacher Report" },
      "author": "Gary Davenport",
      "title": "Fantasy Football 2023: 6 Deep Sleepers To Keep An Eye On In NFL Training Camps",
      "description": "The calendar has turned to July, and that means many things\nbesides just barbecue and fireworks. Before long, training camps will be firing up across the…",
      "url": "https://bleacherreport.com/articles/10081553-fantasy-football-2023-6-deep-sleepers-to-keep-an-eye-on-in-nfl-training-camps",
      "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1688417159/pdsf9w0athcntyn6wvcj.jpg",
      "publishedAt": "2023-07-04T11:27:36Z",
      "content": "Michael Owens/Getty Images\r\nDraftSharks ADP: 164\r\nHere's the thing about \"deep sleeper\" running backs. The odds of finding one are...slim.\r\nMost of the time with late-round fliers at the position, yo… [+1595 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      "publishedAt": "2020-04-27T07:20:43Z",
      "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
    }
  ]

  constructor(){
    super();
    this.state = {
      articles : this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsFeed - Top headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4 mb-3"  key={element.url}>
            <NewsItem title={element.title.slice(0,40)} description={element.description.slice(0,80)} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>

          })}
        </div>
      </div>
    )
  }
}

export default News
