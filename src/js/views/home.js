import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import PlanetCard from "../component/planetCard.jsx";
import PeopleCard from "../component/peopleCard.jsx";
import VehiclesCard from "../component/vehiclesCard.jsx";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [miEstado, setMiEstado] = useState();

    useEffect(() => {
        actions.swapiListPeople("people");
        actions.swapiList("planets");
        actions.swapiList("vehicles");
    }, []);

    // Verificar si los datos se están obteniendo correctamente
    console.log("People List:", store.peopleList);
    console.log("Planets List:", store.planetsList);
    console.log("Vehicles List:", store.vehiclesList);

    return (
        <div className="container-fluid mx-0 px-0">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            People
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body d-flex flex-row overflow-auto">
                            {store.peopleList?.map((people, index) => (<PeopleCard key={index} people={people} />))}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Planets
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body d-flex flex-row overflow-auto">
                            {store.planetsList?.map((planet, index) => (<PlanetCard key={index} planet={planet} />))}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Vehicles
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body d-flex flex-row overflow-auto">
                            {store.vehiclesList?.map((vehicle, index) => (<VehiclesCard key={index} vehicles={vehicle} />))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
