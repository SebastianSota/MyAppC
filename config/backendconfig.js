import { useState } from "react"

export const Backend = () => {
    const [url, setUrl] = useState("http://192.168.110.93:8080");

    return { url };
}

