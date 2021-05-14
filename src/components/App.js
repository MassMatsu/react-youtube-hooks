import React from 'react';

import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../api/youtube';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onFormSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    console.log('from App', video);
    this.setState({ selectedVideo: video });
  };

  // set default search with some search term
  componentDidMount() {
    this.onFormSubmit('surfing');
  }

  render() {
    if (this.state.videos.length === 0) {
      return (
        <div className='ui segment' style={{height:'100vh'}}>
          <div className='ui active dimmer'>
            <div className='ui huge text loader'>Loading</div>
          </div>
        </div>
      );
    }
    return (
      <>
        <div className='ui container' style={{marginTop:'20px'}}>
          <SearchBar onFormSubmit={this.onFormSubmit} />
          <div className='ui grid'>
            <div className='ui row'>
              <div className='eleven wide column'>
                <VideoDetail selectedVideo={this.state.selectedVideo} />
              </div>
              <div className='five wide column'>
                <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
