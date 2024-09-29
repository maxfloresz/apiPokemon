import { useEffect, useState } from "react";

export function dataPokemonAPI(url) {
    const [datos, setDatos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // useEffect(() => {
    //     setLoading(true);
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setDatos(data);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }, [url]);

    useEffect(() => {
        const fetchDataPokemon = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const data = await response.json();
                setDatos(data);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        fetchDataPokemon();
    }, [url]);



    return { datos, loading, error };
}
