import React, { useContext } from "react";
import wrapCard from "./Card";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



const PeopleCard = ({ people }) => {
    // Función para manejar el error de carga de imagen
    const onImageError = (event) => {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
    };

    const{store, actions} = useContext(Context);

    console.log(store.favorites);
    return (
        <div className="card">
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
                className="card-img-top object-fit-cover"
                onError={onImageError}
                width={298}
                height={298}
                alt={people.name}
            />
            <div className="card-body">
                <h5 className="card-title">{people.name}</h5>
                <p className="card-text">Gender: {people.gender}</p>
                <p className="card-text">Birth Year: {people.birth_year}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">
                    <Link to={`/single/people/${people.uid}`} className="btn btn-primary">
                        View more...
                    </Link>
                    <button type="button" className="btn btn-outline-warning ms-1" onClick={()=>actions.addFavorites(people.name)}>
                        <i className="far fa-star"></i>
                    </button>
                </small>
            </div>
        </div>
    );
};

export default wrapCard(PeopleCard);
