 import React from 'react';
//  import Parser from 'rss-parser';
//  // Types
//  import { string } from 'prop-types';

//  let parser = new Parser();

//  // blueprint for the properties
//  interface Props {
//    name: string;
//  }

//  // Component state
//  interface State {
//      //feed: any[];
//  }


//  (async () => {

//    let feed = await parser.parseURL('https://www.reddit.com/.rss');
//    console.log(feed.title);

//    feed.items.forEach((item: { title: string; link: string; }) => {
//      console.log(item.title + ':' + item.link)
//    });

//  })();


//  export default class App extends React.Component<Props, State> {
//     constructor(props: {}) {
//          super(props);
//          this.state = { feed: [] };
//     }

//     async componentDidMount() {
//         const feed = await parser.parseURL('https://www.reddit.com/.rss');
//         this.setState({ feed });
//     }

//     render() {
//         return (
//         <div>
//             <h1>RSS Feed</h1>
//             this.state.feed.map((item, i) => (
//                 <div key={i}>
//                     <h1>item.title</h1>
//                     <a href="">item.link</a>
//                 </div>
//             ))
//         </div>
//         );
//     }
// }

class FetchDataFromRSSFeed extends React.Component {
    constructor() {
      super();
      this.state = {
        recentBlogPost: {
          name: '',
          url: ''
        }
      }
    }
  
    FetchDataFromRssFeed() {
      var request = new XMLHttpRequest();
      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
          var myObj = JSON.parse(request.responseText);
          for (var i = 0; i < 1; i ++) {
            this.setState({
              recentBlogPost: {
                name: myObj.items[i].title,
                url: myObj.items[i].link
              }
            });
          }
        }
      }
      request.open("GET", "https://api.adviceslip.com/daily_adviceslip.rss", true);
      request.send();
    }
  
    // componentDidMount() {
    //   {this.FetchDataFromRssFeed()}
    // }
  
    render() {
      return (
        <div>
          Check out our blog: <a href={this.state.recentBlogPost.url}>{this.state.recentBlogPost.name}</a>
        </div>
      );
    }
  }

  export default FetchDataFromRSSFeed