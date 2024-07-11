import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import PlanetCard from "../component/planetCard.jsx";




export const Home = () => {
    const { store, actions } = useContext(Context);
    const [miEstado, setMiEstado] = useState();

    useEffect(() => {
        // actions.swapiFetch("people", 1);
        // actions.swapiFetch("planets", 1);
        // actions.swapiFetch("films", 1);
        actions.swapiList("planets");
    }, []);

    return (
        <div className="text-center mt-5">
            <h1>Hello Rigo!</h1>
            <p>
                <img src={rigoImage} alt="Rigo Baby" />
            </p>
            <div className="d-flex justify-content-start  overflow-auto mx-3 scroll-container">
           {store.planetsList?.map(planet => <PlanetCard planet={planet}></PlanetCard>)}
           </div>
            </div>
        
    );
};
