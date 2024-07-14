import React from "react";
import wrapCard from "./Card";

const VehiclesCard = ({ vehicles }) => {
    function onImageError(event){
        event.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
    }
    return (
        <>
            <img onError={onImageError} src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`} className="card-img-top objet-fit-cover" width={298} height={298} alt="Vehicle" />                                                  
            <div className="card-body">  
                <h5 className="card-title">{vehicles.name}</h5>
                <p className="card-text">Vehicle class: {vehicles.vehicle_class}</p>
                <p className="card-text">Manufacturer: {vehicles.manufacturer}</p>
                <p className="card-text">Crew: {vehicles.crew}</p>
            </div>
            <div className="card-footer">
                <small className="text-body-secondary">
                    <a href={`/single/${vehicles.uid}`} className="btn btn-primary">View more...</a> 
                    <button type="button" className="btn btn-outline-warning ms-1">
                        <i className="fa-regular fa-star"></i>
                    </button>
                </small>                            
            </div>                    
        </>
    );
};
export default wrapCard(VehiclesCard);

// uid
// :
// "2"
// description
// :
// "A Starship"
// model
// :
// "CR90 corvette"
// starship_class
// :
// "corvette"
// manufacturer
// :
// "Corellian Engineering Corporation"
// cost_in_credits
// :
// "3500000"
// length
// :
// "150"
// crew
// :
// "30-165"
// passengers
// :
// "600"
// max_atmosphering_speed
// :
// "950"
// hyperdrive_rating
// :
// "2.0"
// MGLT
// :
// "60"
// cargo_capacity
// :
// "3000000"
// consumables
// :
// "1 year"

// pilots
// :
// []
// created
// :
// "2020-09-17T17:55:06.604Z"
// edited
// :
// "2020-09-17T17:55:06.604Z"
// name
// :
// "CR90 corvette"
// url
// :
// "https://www.swapi.tech/api/starships/2"
// new entry
// : 