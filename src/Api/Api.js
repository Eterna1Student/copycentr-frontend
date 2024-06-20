import axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:3001`
});


export const userAPI = {
    authUser(username, password) {
        return instance.post('auth/login', {
            username,
            password,
        });
    },

    checkUser() {
        return instance.get('auth/check', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    }
}