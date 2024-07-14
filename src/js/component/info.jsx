import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";



const Detail = () => {
    const { actions } = useContext(Context);
    const { type, theid } = useParams();
    const [item, setItem] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        
            actions.swapiListPeople("people",);
            actions.swapiList("planets", );
            actions.swapiList("vehicles", );
        

        const fetchItem = async () => {
            try {
                const data = await actions.getInformation(type, theid);
                setItem(data);
                setImageUrl(data.imageUrl);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchItem();
    }, [type, theid, actions]);

    

   

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">
                        <img
                            src={imageUrl}
                            className="card-img-top"
                            alt={item.name}
                            onError={ImageError}
                        />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                        <h1 className="text-white">{item.name}</h1>
                        <p className="text-white">
                            {item.description || "No description available."}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <hr className="separator-red" />
                <div className="row text-center text-danger">
                    {type === "people" && (
                        <>
                            <div className="col-2">
                                <h2 className="fs-3">Name</h2>
                                <p className="fs-5">{people.name}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Birth Year</h2>
                                <p className="fs-5">{people.birth_year}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Gender</h2>
                                <p className="fs-5">{people.gender}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Height</h2>
                                <p className="fs-5">{poeple.height}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Skin Color</h2>
                                <p className="fs-5">{poeple.skin_color}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Eye Color</h2>
                                <p className="fs-5">{poeple.eye_color}</p>
                            </div>
                        </>
                    )}

                    {type === "planets" && (
                        <>
                            <div className="col-2">
                                <h2 className="fs-3">Name</h2>
                                <p className="fs-5">{planets.name}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Climate</h2>
                                <p className="fs-5">{planets.climate}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Population</h2>
                                <p className="fs-5">{plantes.population}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Terrain</h2>
                                <p className="fs-5">{planets.terrain}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Diameter</h2>
                                <p className="fs-5">{planes.diameter}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Rotation Period</h2>
                                <p className="fs-5">{planets.rotation_period}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Orbital Period</h2>
                                <p className="fs-5">{planets.orbital_period}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Gravity</h2>
                                <p className="fs-5">{planets.gravity}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Surface Water</h2>
                                <p className="fs-5">{planets.surface_water}</p>
                            </div>
                        </>
                    )}

                    {type === "vehicles" && (
                        <>
                            <div className="col-2">
                                <h2 className="fs-3">Name</h2>
                                <p className="fs-5">{vehicles.name}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Model</h2>
                                <p className="fs-5">{vehicles.model}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Manufacturer</h2>
                                <p className="fs-5">{vehicles.manufacturer}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Cost in Credits</h2>
                                <p className="fs-5">{vehicles.cost_in_credits}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Length</h2>
                                <p className="fs-5">{vehicles.length}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Max Atmosphering Speed</h2>
                                <p className="fs-5">
                                    {vehicles.max_atmosphering_speed}
                                </p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Crew</h2>
                                <p className="fs-5">{vehicles.crew}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Passengers</h2>
                                <p className="fs-5">{vehicles.passengers}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

Detail.propTypes = {
    name: PropTypes.string,
    gender: PropTypes.string,
    hairColor: PropTypes.string,
    eyeColor: PropTypes.string,
    climate: PropTypes.string,
    population: PropTypes.string,
    terrain: PropTypes.string,
    model: PropTypes.string,
    manufacturer: PropTypes.string,
    cost_in_credits: PropTypes.string,
    diameter: PropTypes.string,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    gravity: PropTypes.string,
    surface_water: PropTypes.string,
    length: PropTypes.string,
    max_atmosphering_speed: PropTypes.string,
    crew: PropTypes.string,
    passengers: PropTypes.string,
    imageUrl: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
};

export default Detail;