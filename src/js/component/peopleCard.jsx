import React from "react";
import wrapCard from "./Card";

const PeopleCard = ({ people }) => {
    function onImageError(event) {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    }

    return (
        <>
            <img onError={onImageError} src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`} class="object-fit-cover" width={298} height={298} alt="Planeta" />
            <div className="card-body">
                <h5 className="card-title">{people.name}</h5>
                <p className="card-text">Gender: {people.gender}</p>
                <p className="card-text">Birth Year: {people.birth_year}</p>
            </div>
            <div className="card-footer">
                <small className="text-body-secondary">
                    <a href="#" className="btn btn-primary">View more...</a>
                    <button type="button" className="btn btn-outline-warning ms-1">
                        <i className="fa-regular fa-star"></i>
                    </button>
                </small>
            </div>
        </>
    );
};

export default wrapCard(PeopleCard);

// Se exporta el componente


// uid
// :
// "1"
// description
// :
// "A person within the Star Wars universe"
// height
// :
// "172"
// mass
// :
// "77"
// hair_color
// :
// "blond"
// skin_color
// :
// "fair"
// eye_color
// :
// "blue"
// birth_year
// :
// "19BBY"
// gender
// :
// "male"
// created
// :
// "2024-07-12T02:23:35.057Z"
// edited
// :
// "2024-07-12T02:23:35.057Z"
// name
// :
// "Luke Skywalker"
// homeworld
// :
// "https://www.swapi.tech/api/planets/1"
// url
// :
// "https://www.swapi.tech/api/people/1"
// new entry
// : 