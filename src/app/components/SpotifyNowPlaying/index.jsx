// "use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


import Image from 'next/image';

import ReduxRumbleAlbumLogo from '/public/spotify/redux_rumble_album.jpeg';
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

  // console.log('spotifydata1: ', spotifyData);
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
          <div className={styles.Wrapper}>
            <a 
              target='_blank'
              rel='noopener noreferer'
              href={
                spotifyData
                  ? spotifyData.contextUrl
                  // : 'https://open.spotify.com/user/meltedexistence'
                  : 'https://open.spotify.com/playlist/2BD1AvmRoNHyKRzWDqegSc?si=2baa6684c9a4451d'
              }
              className={styles.Base} // 'relative flex w-72 items-center space-x-4 rounded-md border p-5 transition-shadow hover:shadow-md'
            >
              <div className={styles.Popover}>
                {spotifyData ? (
                    <Image
                      className={styles.PopoverAlbumArt}
                      width={285}
                      height={285}
                      src={spotifyData.albumImageUrl}
                      alt={spotifyData.album}
                    />
                  ) : (
                    <Image className={styles.PopoverAlbumArt}
                      width={285}
                      height={285}
                      src={ReduxRumbleAlbumLogo}
                      alt={"Redux Rumble Soundtrack"}
                      />
                  )}
              </div>
              <div className={styles.AlbumArtWrapper}>
                {spotifyData ? (
                  <Image
                    className={styles.AlbumArt}
                    width={64}
                    height={64}
                    src={spotifyData.albumImageUrl}
                    alt={spotifyData.album}
                  />
                ) : (
                  <Image className={styles.AlbumArt}
                    width={64}
                    height={64}
                    src={ReduxRumbleAlbumLogo}
                    alt={"Redux Rumble Soundtrack"}
                    />
                )}
                
              </div>
              <div className={styles.AlbumArtHoverArrow}>
                  <FontAwesomeIcon icon={faArrowUp}/>
                </div>

            
              <div className={styles.InfoWrapper}>
                <p className={styles.InfoTitle}>
                  {spotifyData ? spotifyData.title : 'Redux Rumble Soundtrack'}
                </p>
                <p className={styles.InfoArtist}>
                  {spotifyData ? spotifyData.artist : 'Stellaric'}
                </p>
                { spotifyData && (
                  <p className={styles.InfoTime}>
                    {spotifyData.isPlaying ? 'Listening now' : "Listened " + spotifyData.timeBefore}              
                </p>
                )}
              </div>
              <div className={styles.SpotifyLogo}>
                <FontAwesomeIcon icon={faSpotify} />
              </div>
            </a>
            
          </div>
        </main>
      </section>
    </>
  );
}

export default SpotifyNowPlaying;

