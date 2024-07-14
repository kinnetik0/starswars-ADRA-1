import React from "react";
import wrapCard from "./Card";

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
                            <small className="text-body-secondary"><a href={`/single/${planet.uid}`} class="btn btn-primary">View more...</a> <button type="button" className="btn btn-outline-warning ms-1"><i class="fa-regular fa-star"></i></button></small>                            
                        </div>                    
                    <div>
                </div>
        </>
    );
};
// Se exporta envuelto en el componente de nivel superior
export default wrapCard(PlanetCard);
// Se exporta el componente

// climate
// : 
// "arid"
// created
// : 
// "2024-07-11T01:53:30.410Z"
// description
// : 
// "A planet."
// diameter
// : 
// "10465"
// edited
// : 
// "2024-07-11T01:53:30.410Z"
// gravity
// : 
// "1 standard"
// name
// : 
// "Tatooine"
// orbital_period
// : 
// "304"
// population
// : 
// "200000"
// rotation_period
// : 
// "23"
// surface_water
// : 
// "1"
// terrain
// : 
// "desert"
// uid
// : 
// "1"
// url
// : 
// "https://www.swapi.tech/api/planets/1"