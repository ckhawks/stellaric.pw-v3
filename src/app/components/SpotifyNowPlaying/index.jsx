// "use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

import Image from 'next/image';

// async function getSpotifyNowPlayingData () {
//   const res = await fetch('http://127.0.0.1:3000/api/spotify', { next: { revalidate: 10 } });

//   if (!res.ok) {
//     throw new Error('Failed to fetch Spotify Now Playing data.');
//   }

//   return res;
// }


async function getSpotifyNowPlayingData () {
  // const res = await fetch('/api/spotify', {  cache: 'no-store' });
  const res = await import ('../../api/spotify/route');

  return await (await res.GET()); // .json();
}

// TODO make it reload/rehydrate next track after duration + progress_ms + some offset

import styles from './SpotifyNowPlaying.module.css';
// import { useEffect, useState } from 'react';

const SpotifyNowPlaying = async () => {

  let spotifyDataResponse = await getSpotifyNowPlayingData();
  let spotifyDataJson = await spotifyDataResponse.json();
  let spotifyData = spotifyDataJson.data;

  console.log('spotifydata1: ', spotifyData);
  // console.log("spotifyData.isPlaying1", spotifyData.isPlaying);

  // const [ spotifyData, setSpotifyData ] = useState({});

  // useEffect(() => {
  //   // console.log("Fetching spotify data ");
  //   async () => {
  //     setSpotifyData();
  //   }
  // });
  // const data =  // fetch('/api/spotify', { next: { "revalidate": 60 }}).then((r) => r.json());

  // const data2 = await data;
  // console.log("Spotify data: ", data);

  return (
    <>
    {/* { console.log("spotifyData.isPlaying2", spotifyData.isPlaying) } */}
      {/* {spotifyData.title} */}
      <section className='bg-gray-600'>       
      
        <main className='flex items-center justify-center'>

          {/* {console.log("spotifyData331: ", spotifyData)} */}
          {/* Title: {spotifyData.title} */}
          <a 
            target='_blank'
            rel='noopener noreferer'
            href={
              spotifyData.isPlaying
                ? spotifyData.songUrl
                : 'https://open.spotify.com/user/meltedexistence'
            }
            className={styles.SpotifyNowPlaying} // 'relative flex w-72 items-center space-x-4 rounded-md border p-5 transition-shadow hover:shadow-md'
          >
            <div className={styles.SpotifyNowPlayingAlbumArtWrapper}>
              {spotifyData.isPlaying ? (
                <Image
                  className={styles.SpotifyNowPlayingAlbumArt}
                  width={64}
                  height={64}
                  src={spotifyData.albumImageUrl}
                  alt={spotifyData.album}
                />
              ) : (
                <FontAwesomeIcon icon={faSpotify} />
              )}
            </div>
          
            <div className={styles.SpotifyNowPlayingInfoWrapper}>
              <p className={styles.SpotifyNowPlayingInfoTitle}>
                {spotifyData.isPlaying ? spotifyData.title : 'Not Listening'}
              </p>
              <p className={styles.SpotifyNowPlayingInfoArtist}>
                {spotifyData.isPlaying ? spotifyData.artist : 'Spotify'}
              </p>
            </div>
            <div className={styles.SpotifyNowPlayingSpotifyLogo}>
              <FontAwesomeIcon icon={faSpotify} />
            </div>
          </a>
        </main>
      </section>
    </>
  );
}

export default SpotifyNowPlaying;

