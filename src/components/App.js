import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('surfing');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  if (videos.length === 0) {
    return (
      <div className='ui segment' style={{ height: '100vh' }}>
        <div className='ui active dimmer'>
          <div className='ui huge text loader'>Loading</div>
        </div>
      </div>
    );
  }
  return (
    <div className='ui container' style={{ marginTop: '20px' }}>
      <SearchBar onTermSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
