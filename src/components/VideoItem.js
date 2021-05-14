import '../css/VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  const {
    thumbnails: {
      medium: { url },
    },
    title,
  } = video.snippet;

  return (
    <div className='video-item item' onClick={() => onVideoSelect(video)}>
      <img className='ui image' src={url} alt={title} />
      <div className='content'>
        <div className='header'>{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
