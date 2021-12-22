import axios from 'axios'

const API_URL = "http://localhost:8000/"

export const postSignup = async (body) => {
    try {
        const response = await axios.post(`${API_URL}user/signup`, body)

        return response.data
    } catch (error) {
        console.error(error)
        return false
    }
}



















// export const getHeroes = async () => {
//     try {
//         const response = await axios.get(`${API_URL}/heroes`)

//         return response.data
//     } catch (error) {
//         console.error(error)
//         return false
//     }
// }

// export const getPowers = async () => {
//     try {
//         const response = await axios.get(`${API_URL}/powers`)

//         return response.data
//     } catch (error) {
//         console.error(error)
//         return false
//     }
// }


// export const postLogin = async (body) => {
//     try {
//         const response = await axios.post(`${API_URL}/auth/login`, body)

//         return response.data
//     } catch (error) {
//         console.error(error)
//         return false
//     }
// }

// export const addHero = async (body) => {
//     try {
//         const token = localStorage.getItem("token")

//         const response = await axios.post(`${API_URL}/heroes/`, body, {
//             headers: {
//                 Authorization: "Bearer " + token
//             }
//         })

//         return response
//     } catch (error) {
//         console.error(error)
//         return error.response
//     }
// }