import React, { Component } from 'react';
import BlogPost from './BlogPost';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        blogPosts : []
    };
  }

  componentDidMount(){
    fetch('./blogPosts.json')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({ blogPosts : response.data});
      })
  }

  render() {
    const posts = this.state.blogPosts.map((post) => {
        return <BlogPost 
            key={post.Id} 
            title={post.Title} 
            subTitle={post.SubTitle} 
            text={post.Text} />
    });
 
    return <div className="App">
              { posts }
           </div>
  }
}

export default App;
