import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Card from "../component/Card.jsx";


export const Home = () => (
    const { store, actions } = useContext(Context);
    const [miEstado, setMiEstado] = useState(0);

    useEffect(() => {
        actions.swapiFecth("people", 1);
        actions.swapiFecth("planets", 1);
        actions.swapiFecth("films", 1);
    }, []);
    <div className="text-center mt-5">
        <h1>Hello Rigo!</h1>
        <p>
            <img src={rigoImage} />
        </p>
        <a href="#" className="btn btn-success">
            If you see this green button, bootstrap is working
        </a>
    </div>
);
