import React, { useContext } from "react";
import wrapCard from "./Card";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const VehiclesCard = ({ vehicles }) => {
    function onImageError(event){
        event.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
    }

    const {store, actions} = useContext(Context);

    return (
        <>
            <img onError={onImageError} src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`} className="card-img-top objet-fit-cover" width={298} height={298} alt="Vehicle" />                                                  
            <div className="card-body">  
                <h5 className="card-title">{vehicles.name}</h5>
                <p className="card-text">Vehicle class: {vehicles.vehicle_class}</p>
                <p className="card-text">Cost in Credits: {vehicles.cost_in_credits}</p>
                <p className="card-text">Crew: {vehicles.crew}</p>
            </div>
            <div className="card-footer">
                <small className="text-body-secondary">
                    <Link to={`/single/vehicles/${vehicles.uid}`} className="btn btn-primary">
                        View more...
                    </Link> 
                    <button type="button" className="btn btn-outline-warning ms-1" onClick={()=>actions.addFavorites(vehicles.name)}>
                        <i className="fa-regular fa-star"></i>
                    </button>
                </small>                            
            </div>                    
        </>
    );
};
export default wrapCard(VehiclesCard);

