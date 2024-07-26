import axios from "axios";
import { useSession } from "next-auth/react";

const BASE_URL = "/api";

const fetchData = axios.create({
    baseURL: BASE_URL,
    headers: {
    
    },
});

export default fetchData;

