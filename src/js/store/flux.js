import { element, elementType } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            darkmode: false,
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({ demo: demo });
            },
            swapiFetch: async (elementType, id) => {
                try {
                    let resp = await fecth(
                        `https://www.swapi.tech/api/${elementType}/${id}`
                    );
                    if (!resp.ok) {
                        console.error(`Error en la promesa ${resp.status}`);
                        return {};
                    }
                    let data = await resp.json();
                    let obj = {};
                    obj[elementType] = {
                        uid: data.result.uid,
                        description: data.result.description,
                        ...data.result,
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
