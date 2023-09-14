import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e9bcd937bc14473a91e70d3e5a9c19d2'
    }
})