import axios from "axios";
import { Api } from "./env";


const Callapi = axios.create({
    baseURL: Api,
})

export default Callapi;