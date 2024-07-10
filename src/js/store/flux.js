import { element, elementType } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {},
        actions: {
            getPeople: async () => {
                try {
                    let resp = await fetch("https://www.swapi.tech/api/people");
                    let data = await resp.json();
                    setStore({ people: data.results });
                } catch (error) {}
            },
            swapiFetch: async (elementType, id) => {
                try {
                    let resp = await fetch(
                        `https://www.swapi.tech/api/${elementType}/${id}`
                    );
                    if (!resp.ok) {
                        console.error(`Error en la peticion: ${resp.status}`);
                        return {};
                    }
                    let data = await resp.json();
                    let obj = {};
                    obj[elementType] = {
                        uid: data.result.uid,
                        description: data.result.description,
                        ...data.result.properties,
                    };
                    setStore({ ...obj });
                } catch (error) {
                    console.error(`Error en la promesa ${error}`);
                    return {};
                }
            },
        },
    };
};
export default getState;
