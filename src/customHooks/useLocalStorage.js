import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(initialValue);
    // Estado para almacenar el estado de la API (cargando y error)
    const [dataStatus, setDataStatus] = useState({ loading: true, error: false })

    useEffect(() => {
        setTimeout(() => {
            try {
                // Obtener del local storage por la key
                let item = JSON.parse(window.localStorage.getItem(key));

                if (!item) {
                    item = initialValue;
                }

                setStoredValue(item);
            } catch (error) {
                setDataStatus({ ...dataStatus, error: true })
            } finally {
                setDataStatus({ ...dataStatus, loading: false })
            }
        }, 1000);
    }, [])

    const setValue = (value) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            setDataStatus({ ...dataStatus, error: true })
        }
    };

    return { storedValue, setValue, loading: dataStatus.loading, error: dataStatus.error };
}

export { useLocalStorage };