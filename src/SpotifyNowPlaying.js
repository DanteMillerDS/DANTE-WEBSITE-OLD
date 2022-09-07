import { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyAPI";
import "./SpotifyNowPlaying.css";
import { BsSpotify } from 'react-icons/bs';
const track = {
    artist: "",
    title: "",
    albumImageUrl: ""
}


export const SpotifyNowPlaying = (props) => {
    
    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(undefined);
    const [result, setResult] = useState({track});
    useEffect(() => {
 
        Promise.all([
            getNowPlayingItem(
                props.client_id,
                props.client_secret,
                props.refresh_token
            ),
        ]).then((results) => {
            setResult(results[0]);
        });
        


    }, []);
    console.log(result)
    return (
        
        <div>
        <h1 className="spotifytitle">
        Current Spotify Song
        </h1>



        <div className="artandtitle">
        <img style={{ zIndex:"1"}} class = "spotifyimage" src={result.albumImageUrl} alt='inactive song image'/>
        <h1 className="spotifyartisttitle" alt='inactive song title and artist'>{result.title} by {result.artist}</h1>
        </div>
        <button className="btn-spotify" onClick={() => { player.previousTrack() }} >
                                &lt;&lt;
        </button>

        <button className="btn-spotify" onClick={() => { player.togglePlay() }} >
            { is_paused ? "PLAY" : "PAUSE" }
        </button>

        <button className="btn-spotify" onClick={() => { player.nextTrack() }} >
            &gt;&gt;
        </button>

        <div className="spotifytext" style={{zIndex:"1"}}>
            Check out my spotify playlist <a className="slink" href="https://open.spotify.com/user/7hxmupd8fl2k1ztjtk8jmz9n4"> 
            <BsSpotify />
            </a> 
            </div>
        </div>
    )
};




