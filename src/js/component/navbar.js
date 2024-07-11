import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
                <Link to="/demo">
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-primary dropdown-toggle me-5"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Favorites
                        </button>
                        <ul className="dropdown-menu"></ul>
                    </div>
                </Link>
            </div>
        </nav>
    );
};
