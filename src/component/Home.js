import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'
import token from '../Util/token';
import Artist from './Artist';
import Search from './Search';

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

function Home(props) {
    const [artist,setArtist] = useState([]);

    const searchHandler = (artistName) => {
        fetch(`${URL}/v1/search?q=${artistName}&type=artist`, reqOptions)
        .then(res => res.json())
        .then(data => {
            console.log(`output =`,data);
            setArtist(data.artists.items);
        }).catch(err => toast.error(err.message));
    };

    useEffect (() => {
        searchHandler("SPB")
    }, []);

    return(
         <div>

             <div className="container">
                 <div className="row">
                     <div className="col-md-12 text-center">
                         <h3 className="display-3 text-secondary">Home</h3>
                     </div>
                 </div>

                 <div className="row">
                     <Search artistSearch={searchHandler} />
                 </div>
                 <div className="row">
                     {
                     artist.map((item,index) => {
                         return<Artist key={index} {...item} />
                     })
                     }
                 </div>
             </div>
         </div>
    )
}
export default Home