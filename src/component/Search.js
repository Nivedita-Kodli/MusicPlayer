import React, {useState} from 'react';
import { toast } from 'react-toastify';

function Search(props) {
    const[artist,setArtist] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        try {
            console.log(`artist =`,artist)
            props.artistSearch(artist);
        } catch (err) {
            toast.error(err.message);
        }
    }
    return(
         <div className="col-md-6 offset-md-3 mt-2 mb-2">
             <div className="card">
                 <div className="card-body">
                     <form onSubmit={submitHandler} autoComplete={"off"}>
                         <div className="form-group mt-2">
                             <label htmlFor="artist">Enter Artist name</label>
                             <div className="input-group">
                                 <input type="search" name="artist" value={artist} onChange={(e) => setArtist(e.target.value)} id="artist" className="form-control" required />
                                 <input type="submit" value="Search" className="btn btn-success "/>
                             </div>
                         </div>
                     </form>
                 </div>
             </div>
         </div>
    )
}
export default Search