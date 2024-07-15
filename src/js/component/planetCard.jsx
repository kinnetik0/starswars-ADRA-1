import React from "react";
import wrapCard from "./Card";
import { Link } from "react-router-dom";

const PlanetCard = ({planet}) => {
    function onImageError(event){
        event.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg" 
    }
    return (
        <>
            <img onError={onImageError} src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} class="card-img-top objet-fit-cover" width={298} height={298} alt="Planeta" />                                                  
                        <div className="card-body">  
                            <h5 class="card-title">{planet.name}</h5>
                            <p class="card-text">Population: {planet.population}</p>
                            <p class="card-text">Climate: {planet.climate}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">
                                <Link to={`/single/planet/${planet.uid}`} class="btn btn-primary">
                                    View more...
                                </Link> 
                                <button type="button" className="btn btn-outline-warning ms-1"><i class="fa-regular fa-star"></i></button></small>                            
                        </div>                    
                    <div>
                </div>
        </>
    );
};
// Se exporta envuelto en el componente de nivel superior
export default wrapCard(PlanetCard);
