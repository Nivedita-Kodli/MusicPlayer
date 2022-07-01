import React from 'react';
import {NavLink} from 'react-router-dom';

function Artist(props) {
    const {id,name, genres, followers, popularity } = props;
    return(
         <div className="col-md-4 mb-2 mt-2">
             <div className="card">
                 <div className="card-header">
                     <h6 className="text-center text-secondary">{name}</h6>
                 </div>
                 <div className="card-body">
                     <ul className="list-group">
                         <li className="list-group-item">
                             <strong>Genres</strong>
                             <span className="float-end"> {genres} </span>
                         </li>
                         <li className="list-group-item">
                             <strong>Followers</strong>
                             <span className="float-end"> {followers.total} </span>
                         </li>
                         <li className="list-group-item">
                             <strong>Popularity</strong>
                             <span className="float-end"> {popularity} </span>
                         </li>
                     </ul>
                 </div>
                 <div className="card-footer">
                     <NavLink to={`/track/${id}`} className="btn btn-success">Tracks</NavLink>
                 </div>
             </div>
         </div>
    )
}
export default Artist