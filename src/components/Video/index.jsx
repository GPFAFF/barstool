import React from 'react'
import useSWR from 'swr'
import { fetcher } from '../hooks';
import Loading from '../Loading';
import './index.scss';

export const Video = ({ videoId, image }) => {
  const { data } = useSWR(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`, fetcher);

  const URL = `https://youtube.com/embed/${videoId}`;

  if (!data) return <Loading />;

  const { items } = data;

  const {
    snippet
  } = items[0];

  const {
    description,
    title,
    tags,
    thumbnails: {
      medium: {
        url,
      }
    }
  } = snippet;


  return (
    <div>
      <div className="details">
        <div className="video-container">
          <button className="thumbnail-link">
            <img src={url} alt={title} className="video-thumbnail" />
            <span>Video is loading ... hang tight!!</span>
             <iframe className="video--frame"
              src={URL}
              title={title}
              allowFullScreen
             />
          </button>
        </div>
        <div className="content">
          <h2 className="title">{title}</h2>
          <p className="video--description">{description}.</p>
        </div>
      </div>
      <ul className="tags">
        {tags.map((tag, idx) => (
          <li key={idx}>{tag}</li>
        ))}
      </ul>
    </div>
  )
}
