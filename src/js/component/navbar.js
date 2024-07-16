import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {

    const {store, actions} = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-dark mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1 ms-5">
                    <img
                        src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
                        width={60}
                        height={30}
                    />
                </span>
            </Link>
            <div className="ml-auto">
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-primary dropdown-toggle me-5"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Favorites {store.favorites.length}
                        </button>
                        <ul className="dropdown-menu">
                            
                            {store.favorites.map((item) => <li>{item}<i class="fa-solid fa-trash ms-2" onClick={()=>actions.addFavorites(item)}></i></li>)}
                        </ul>
                    </div>
            </div>
        </nav>
    );
};
