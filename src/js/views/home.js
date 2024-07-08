import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "../component/Card.jsx";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
    const { store, actions } = useContext(Context);
    const [miEstado, setMiEstado] = useState(0);

    useEffect(() => {
        actions.swapiFetch("planets", 1);
        actions.swapiFetch("people", 1);
        actions.swapiFetch("films", 1);
    }, []);

    return (
        <div>
            <div className="scroll-container">
                <Card
                    imageSrc="https://starwars-visualguide.com/assets/img/vehicles/4.jpg"
                    title="Sand Crawler"
                    gender="Gender: Male"
                    haircolor="Hair Color: blond"
                    eyecolor="Eye-Color: blue"
                    buttonLink="#"
                    buttonText="Go somewhere"
                />
            </div>
            <div className="text-center mt-5">
                <h1>Hello Rigo!</h1>
                <p>
                    <img src={rigoImage} alt="Rigo Baby" />
                </p>
            </div>
        </div>
    );
};
