import { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyAPI";
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
        <div style={{ position:'fixed', height: "100%", bottom:"0%", zIndex:"2",color:"white"}}>
          
          
        </div>
    )
};
