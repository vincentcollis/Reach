import axios from 'axios'

export default axios.create({
    // replace with tunnel URL is expose to world
    baseURL: 'http://localhost:3000/'
    // baseURL: 'https://slimy-rat-49.loca.lt'
})