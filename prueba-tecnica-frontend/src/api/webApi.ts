import axios from "axios";

const webApi = axios.create({
    baseURL:process.env.NEXT_PUBLIC_URL_API!,

})



export default webApi;