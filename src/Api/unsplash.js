import axios from 'axios'

// export default axios.create({
//     baseURL: 'https://api.unsplash.com/search',
//     headers: {
//         Authorization:
//             "Client-ID 562d4066f1d17762ddb6d6a6512b26445a14b8ffa19d67d6d946af88d2e265a1"
//     }
// })

const unsplash = axios.create({
    baseURL: 'https://rallycoding.herokuapp.com/api/'
})

const getAlbums = () => unsplash.get('music_albums')

export {getAlbums}