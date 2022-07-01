import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { toast } from 'react-toastify';
import token from '../Util/token';

const URL = "https://api.spotify.com";

// api headers
const apiHeaders = new Headers();
apiHeaders.append("Authorization", `${token.id}`);

// ajax header option
const reqOptions = {
    method: "GET",
    headers: apiHeaders,
    redirect: "follow"
};

function Track(props) {
    const[tracks,setTracks] = useState([]);
    const [audio,setAudio] = useState(null);
    const [preUrl,setPreUrl] = useState(null);
    const [playing,setPlaying] = useState(false);

    const params = useParams();

    const trackIcon = (url) => {
        if(!url) 
            return <span className="text-danger">No track</span>
        if(playing && preUrl == url)
        return <button className="btn btn-sm btn-warning"><i className="bi bi-pause"></i></button>
        return <button className="btn btn-sm btn-success"><i className="bi bi-play"></i></button>
        
    }

    const playAudio = (url) => {
        const myAudio = new Audio(url);
        if(!playing) {
            // play
            myAudio.play();
            setPlaying(true);
            setAudio(myAudio);
            setPreUrl(url);
        }else{
            // pause
            audio.pause();
            if(preUrl == url) {
                setPlaying(false);
            }else {
                // pause to play
                myAudio.play();
                setAudio(myAudio);
                setPreUrl(url);
            }
        }
    }

    useEffect(() => {
        fetch(`${URL}/v1/artists/${params.id}/top-tracks?market=IN`, reqOptions)
        .then(res => res.json())
        .then(out => {
            console.log(`tracks =`, out);
            setTracks(out.tracks)
        }).catch(err => toast.error(err.message));
    },[])
    return(
         <div className="container">
             <div className="row">
                 <div className="col-md-12 text-center">
                     <h3 className="display-3 text-secondary"> Tracks </h3>
                 </div>
             </div>
             
             <div className="row">
                 {
                     tracks.map((item, index) => {
                         const{ id, name, album, preview_url } = item;
                         return (
                             <div className="col-md-3 mt-2 mb-2" key={index}>
                                 <div className="card" onClick={() => playAudio(preview_url)}>
                                     <img src={album.images[1].url} alt={"image not found"} className="card-img-top" />
                                     <div className="card-header">
                                         <h6 className="text-center"> { name } </h6>
                                     </div>
                                     <div className="card-footer">
                                         {trackIcon(preview_url)}
                                     </div>
                                 </div>
                             </div>
                         )
                     })
                 }
             </div>
         </div>
    )
}
export default  Track