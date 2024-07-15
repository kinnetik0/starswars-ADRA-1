import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


const Detail = () => {
    const { store, actions } = useContext(Context);
    const { type, theid } = useParams();
    const [item, setItem] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    // este use effect se encarga solamanete de llamar la acción de flux y flux a su vez llama a la api y guarda los resultados en la store
    useEffect(() => {
        const fetchItem = async () => {
            try {
                await actions.swapiFetch(type, theid);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchItem();
    }, [type, theid]);

   //Cuando la store esten los datos de la people voy a cargar el item los datos 
   useEffect(() => {
    if (store.people) {
        setItem(store.people);
    }
    if (store.planets) {
        setItem(store.planets);
    }
    if (store.vehicles) {
        setItem(store.vehicles);
    }
}, [store.people, store.planets, store.vehicles]);


    const onImageError = (event) => {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };

   //Limpiar la store apenas se monte el componente 
   useEffect(() => {
    setItem(null);
},[]); 
    if (!item) {
        return (<div class="d-flex justify-content-center">
                    <div class="spinner-border text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>);
    }
    
   
   
    return (
        <div>
            <div className="container m-auto">
                <hr className="separator-red" />
                <div className="row text-center text-danger ">
                    {type === "people" && (
                        <>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="object-fit-none"
                            width={298}
                            height={500}
                            alt="imagen"/>
                            <hr className="separator-red mt-3" />
                            <div className="col-2">
                                <h2 className="fs-3">Name</h2>
                                <p className="fs-5">{item.name}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Birth Year</h2>
                                <p className="fs-5">{item.birth_year}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Gender</h2>
                                <p className="fs-5">{item.gender}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Height</h2>
                                <p className="fs-5">{item.height}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Skin Color</h2>
                                <p className="fs-5">{item.skin_color}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Eye Color</h2>
                                <p className="fs-5">{item.eye_color}</p>
                            </div>
                        </>
                    )}

                    {type === "planets" && (
                        <>
                            <img onError={onImageError} src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="object-fit-none"
                            width={298}
                            height={400}
                            alt="imagen"/>
                            <hr className="separator-red mt-3" />
                            <div className="col-2">
                                <h2 className="fs-3">Name</h2>
                                <p className="fs-5">{item.name}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Climate</h2>
                                <p className="fs-5">{item.climate}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Population</h2>
                                <p className="fs-5">{item.population}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Terrain</h2>
                                <p className="fs-5">{item.terrain}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Diameter</h2>
                                <p className="fs-5">{item.diameter}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Rotation Period</h2>
                                <p className="fs-5">{item.rotation_period}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Orbital Period</h2>
                                <p className="fs-5">{item.orbital_period}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Gravity</h2>
                                <p className="fs-5">{item.gravity}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Surface Water</h2>
                                <p className="fs-5">{item.surface_water}</p>
                            </div>
                        </>
                    )}

                    {type === "vehicles" && (
                        <>
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="object-fit-none"
                            width={298}
                            height={400}
                            alt="imagen"/>
                            <hr className="separator-red mt-3" />
                            <div className="col-2">
                                <h2 className="fs-3">Name</h2>
                                <p className="fs-5">{item.name}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Model</h2>
                                <p className="fs-5">{item.model}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Manufacturer</h2>
                                <p className="fs-5">{item.manufacturer}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Vehicle Class</h2>
                                <p className="fs-5">{item.vehicle_class}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Length</h2>
                                <p className="fs-5">{item.length}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Crew</h2>
                                <p className="fs-5">{item.crew}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Passengers</h2>
                                <p className="fs-5">{item.passengers}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Cargo Capacity</h2>
                                <p className="fs-5">{item.cargo_capacity}</p>
                            </div>
                            <div className="col-2">
                                <h2 className="fs-3">Consumables</h2>
                                <p className="fs-5">{item.consumables}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

Detail.propTypes = {
    match: PropTypes.object
};

export default Detail;
