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

export const productsAPI = {
    getAllProducts() {
        return instance.get('product/list', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    }
}

export const salesOneDayAPI = {
    getAllSales() {
        return instance.get('sales_one_day/list', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    },
    createSalesOneDay(id, title, price, count, sum) {
        return instance.post('sales_one_day/create', {
            id, title, price, count, sum
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        });
    }
}