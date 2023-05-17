// THIS CAME MOSTLY FROM VVVV THANKS <3
// https://theodorusclarence.com/blog/spotify-now-playing

import querystring from 'querystring';

import { NextResponse } from "next/server";
// https://nextjs.org/docs/app/building-your-application/routing/router-handlers

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  console.log("Getting access token...");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
    next: { revalidate: 1800 }
  });

  console.log("token response: ", response)

  return response.json();
};

export const getNowPlaying = async () => {
  console.log("Getting now playing track...");
  const { access_token } = await getAccessToken();

  console.log("access_token: ", access_token);

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: {
      revalidate: 60
    }
  })
  // .then(response => {
  //   console.log("DONE: ", response);
  //   console.log("url:", response.url);
  //   return response;
  // });

  return response;
};

export async function GET(request) {
  console.log("Responding to GET /api/spotify...")
  const response = await getNowPlaying();

  const responseJson = await response.json();

  console.log("responseJson", responseJson);

  // if (
  //   // response.status === 204 ||
  //   // response.status > 400 ||
  //   responseJson.currently_playing_type !== 'track'
  // ) {
  //   return request.status(200).json({ isPlaying: false });
  //   // return NextResponse.json({data});
  // }

  const data = {
    isPlaying: responseJson.is_playing,
    title: responseJson.item.name,
    album: responseJson.item.album.name,
    artist: responseJson.item.album.artists
      .map((artist) => artist.name)
      .join(', '),
    albumImageUrl: responseJson.item.album.images[0].url,
    songUrl: responseJson.item.external_urls.spotify,
  };

  return NextResponse.json({data});
  // request.status(200).json(data);
};