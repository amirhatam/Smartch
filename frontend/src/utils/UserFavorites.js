import axios from 'axios'


export const moviesFav = async (e) => {
    if (localStorage.userId) {
        const idsFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

        console.log("idsFavorites", idsFavorites);
        console.log("movie id", e);
        if (!idsFavorites.includes(e)) {
            idsFavorites.push(e);

            localStorage.setItem("favorites", JSON.stringify(idsFavorites));
        }
    } else {

        return window.location.href = "http://localhost:3000/connexion/login"
    }

    if (localStorage.userId && localStorage.favorites) {

        axios.patch(`http://localhost:8000/users/${localStorage.userId}/favorites`, { favorites: JSON.parse(localStorage.getItem("favorites")) })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    } else {
        console.error();
    }
};
