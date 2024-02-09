import React, { useContext , useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    let user = store.user

    useEffect(() => {
        function authenticate() {
            actions.authenticateUser(navigate);
        }
        authenticate()
         
    }, [])

    return (
        <div>
            {store.user != null ?
            <div className="container fluid py-4">
                <div className="row">
                    <div className="card col-sm">
                        <img 
                            src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" 
                            className="card-img-top" 
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Favorite activities</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                            <li className="list-group-item">A fourth item</li>
                            <li className="list-group-item">A fifth item</li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                    <div className="profile-info col-md-9">
                        <div className="container p-3 mb-2 bg-secondary-subtle text-emphasis-secondary">
                            <div className="panel-body bio-graph-info">
                                <h1>{user.first_name} {user.last_name}</h1>
                                <div className="bio-graph-heading">
                                {store.user?.biography ?? "Add a biography"}
                                </div>
                                <div className="row py-3">
                                    <div className="row">
                                        <p>
                                            <span><b>Permanent location :</b></span> 
                                            {store.user?.permanent_location ?? "There is no location"}
                                        </p>
                                    </div>
                                    <div className="row">
                                        <p>
                                            <b>Activities I'd like to do :</b> Activities
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <p><b>Places visited :</b></p>
                                            <li>orlando</li>
                                            <li>chicago</li>
                                            <li>miami</li>
                                        </div>
                                        <div className="col">
                                            <p><b>Places I'd like to visit :</b></p>
                                            <li>{store.user?.wishlist_places ?? "N/A"}</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn btn-secondary">Edit Profile</button>
                    </div>
                </div>
            </div>
            :
            "profile loading..."
            }
        </div>
    )
}

export default Profile