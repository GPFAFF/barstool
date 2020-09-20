import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../hooks';

import { Video } from '../Video';
import { Error } from '../Error';
import Loading from '../Loading';

export const Wrapper = () => {
  const { data, error } = useSWR(`https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${process.env.REACT_APP_CHANNEL_ID}&maxResults=15&key=${process.env.REACT_APP_API_KEY}`, fetcher);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <section>
      {data.items.map(item => {
        const { title, id, snippet } = item;
        const {
          thumbnails: {
            medium: {
              url
            }
          }
        } = snippet;

        const parsedId = url.split('/')[4];

        return (
          <Video
            key={id}
            videoId={parsedId}
            title={title}
          />
        )
      })}
    </section>
  )
}
