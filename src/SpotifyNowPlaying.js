import { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyAPI";
import "./SpotifyNowPlaying.css"
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
            Spotify
            </h1>
            <p className="text">
               Link to spotify
            </p>
        </div>
        <div className="spotify" >
            <p className="">{result.artist}</p>
            <p className="">{result.title}</p>
            <img style={{ zIndex:"1"}} class = "spotifyimage" src={result.albumImageUrl} alt={`${result.title} album art`}/>
        </div>
        </div>
    )
};




