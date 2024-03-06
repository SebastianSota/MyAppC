import { useState } from "react";

export const Globales = () => {
    const [global, setGlobal] = useState("Hola, soy una variable global");
    return { global, setGlobal };
}