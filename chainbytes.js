const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY;
const endPoint = process.env.ENDPOINT;
const getMachines = () => {
    return new Promise((Resolve, Reject) => {
        const url = `${endPoint}/machines`;
        console.log(url);
        axios.get(url, {
            headers: {
                'API-KEY': apiKey
            }
        }).then(response => {
            Resolve(response.data);
        }).catch(error => {
            Reject(error);
        }
        );
    });
};
const getCustomers = () => {
    return new Promise((Resolve, Reject) => {
        const url = `${endPoint}/customers`;
        console.log(url);
        axios.get(url, {
            headers: {
                'API-KEY': apiKey
            }
        }).then(response => {
            Resolve(response.data);
        }).catch(error => {
            Reject(error);
        }
        );
    });
};
const getAutoPayments = () => {
    return new Promise((Resolve, Reject) => {
        const url = `${endPoint}/autopayments`;
        console.log(url);
        axios.get(url, {
            headers: {
                'API-KEY': apiKey
            }
        }).then(response => {
            Resolve(response.data);
        }).catch(error => {
            Reject(error);
        }
        );
    });
};
const getOrders = () => {
    return new Promise((Resolve, Reject) => {
        const url = `${endPoint}/orders`;
        console.log(url);
        axios.get(url, {
            headers: {
                'API-KEY': apiKey
            }
        }).then(response => {
            Resolve(response.data);
        }).catch(error => {
            Reject(error);
        }
        );
    });
};

module.exports = { getMachines, getCustomers, getAutoPayments, getOrders };

