import axios from 'axios'

const instance =axios.create({
    baseURL:'https://fb-clone-live.herokuapp.com/'
})

export default instance

// axios.get('/upload/image')