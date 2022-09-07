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
        <h1 className="spotifytitle">
        Current Spotify Song
        </h1>



        <div className="artandtitle">
        <img style={{ zIndex:"1"}} class = "spotifyimage" src={result.albumImageUrl} alt={`${result.title} album art`}/>
        <h1 className="spotifyartisttitle">{result.artist} by {result.title}</h1>
        </div>

        <div className="spotifytext" style={{zIndex:"1"}}>
            Check out my spotify playlist <a className="slink" href="https://open.spotify.com/user/7hxmupd8fl2k1ztjtk8jmz9n4"> 
            <BsSpotify />
            </a> 
            </div>
        </div>
    )
};




