const baseURL = "https://www.swapi.tech/api";
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            planetsList: [],
            peopleList: [], 
            vehiclesList: [],
            favorites: [],
        },
        actions: {
            swapiFetch: async (elementType, id) => {
                try {
                    let resp = await fetch(`${baseURL}/${elementType}/${id}`);
                    console.log(resp);
                    if (!resp.ok) {
                        console.error(`Error en la peticion: ${resp.status}`);
                        return {};
                    }
                    let data = await resp.json();
                    console.log("data", data);
                    let obj = {};
                    obj[elementType] = {
                        uid: data.result.uid,
                        description: data.result.description,
                        ...data.result.properties,
                    };
                    console.log("obj", obj);
                    setStore({ ...obj });
                    
                } catch (error) {
                    console.error(`Error en la promesa ${error}`);
                    return {};
                }
            },
            swapiList: async (elementType, page = 1, limit = 10) => {
                let resp = await fetch(`${baseURL}/${elementType}/?page=${page}&limit=${limit}`)
                if (!resp.ok) {
                    console.error(`Error en la peticion: ${resp.status}`)
                    return {};
                }
                let data = await resp.json();
                //Arreglo de fetchs
                let fetchList = data.results.map(planet => fetch(planet.url))
                let fetchResponses = await Promise.all(fetchList)
                //Arreglo de respuestas
                let fetchJsons = await fetchResponses.map((resp) => resp.json())
                //Arreglo de Data
                data = await Promise.all(fetchJsons);
                data = data.map(planet => ({
                    uid: planet.result.uid,
                    description: planet.result.description,
                    ...planet.result.properties,
                }))
                let obj = {}
                obj[elementType + "List"] = data;
                setStore({ ...obj })
                console.log(data);
            },
            swapiListPeople: async (elementType, page = 1, limit = 10) => {
                try {
                    let resp = await fetch(`${baseURL}/${elementType}/?page=${page}&limit=${limit}`);
                    if (!resp.ok) {
                        console.error(`Error en la peticion: ${resp.status}`);
                        return {};
                    }
                    let data = await resp.json();
                    let fetchList = data.results.map(item => fetch(item.url));
                    let fetchResponses = await Promise.all(fetchList);
                    let fetchJsons = fetchResponses.map(resp => resp.json());
                    data = await Promise.all(fetchJsons);
                    data = data.map(item => ({
                        uid: item.result.uid,
                        description: item.result.description,
                        ...item.result.properties,
                    }));
                    let obj = {};
                    obj[elementType + "List"] = data;
                    setStore({ ...obj });
                } catch (error) {
                    console.error(`Error en la promesa ${error}`);
                }
            },
        },
        addFavorites: (name) =>{
            const store = getstore();
            if (store.favorites.includes(name)){
                setStore({favorites:store.favorites.filter(item => item !== name)});
            } else {
                setStore({favorites: [...store.favorites, name]});
            }
        },
    };
};

export default getState;
