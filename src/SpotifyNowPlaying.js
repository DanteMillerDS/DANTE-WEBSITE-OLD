import { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyAPI";
import "./SpotifyNowPlaying.css";
import { BsSpotify } from 'react-icons/bs';

export const SpotifyNowPlaying = (props) => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});
    useEffect(() => {
        Promise.all([
            getNowPlayingItem(
                props.client_id,
                props.client_secret,
                props.refresh_token
            ),
        ]).then((results) => {
            setResult(results[0]);
            setLoading(false);
        });
    });
    console.log(result.artist)
    return (
        
        <div>
        <div className="spotify">
            <h1 className="title"> 
            Current Spotify Song
            </h1>
            
            <p className="spotifytext">
            Check out my spotify playlist <a className="slink" href="https://open.spotify.com/user/7hxmupd8fl2k1ztjtk8jmz9n4"> 
            <BsSpotify />
            </a> 
            </p>
        </div>
        <div className="spotify" >
            <h1 className="spotifyartisttitle">{result.artist} by {result.title}</h1>
            <img style={{ zIndex:"1"}} class = "spotifyimage" src={result.albumImageUrl} alt={`${result.title} album art`}/>
        </div>
        </div>
    )
};




