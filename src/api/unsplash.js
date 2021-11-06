import axios from 'axios'
export default axios.create({
    baseUrl: "https://api.unsplash.com",
    headers:{
        Authorization: "Client-ID e_5shRaN863OuHXV7FQ2Cvg9Gz96lfl50TY2Dkg4Qco",

    }

})