// Detail.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { swapiFetch } from "../utils/api";

const Detail = () => {
    const { type, theid } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const data = await swapiFetch(type, theid); // Reemplaza esto con tu lógica para obtener los datos de la API
                setItem(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchItem();
    }, [type, theid]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            {/* Aquí debes renderizar los detalles específicos del item */}
        </div>
    );
};

export default Detail;
