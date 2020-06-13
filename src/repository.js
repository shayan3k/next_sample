import axios from 'axios';

const BASE_URL = 'https://manshour.herokuapp.com/';

export function getRegularTips () {
 return axios.get(`${BASE_URL}/api/auth/register-start`)
 .then(response => response.data);
 }

export function getSpecialTips () {
 return axios.get(`${BASE_URL}/api/tips/special`, { params: { 'x-access-token': localStorage.getItem('x-access-token')} })
 .then(response => response.data)
 .catch(err => Promise.reject('Request Not Authenticated!'));
 }

export function login (data) {
 return axios.post(`${BASE_URL}/api/auth/login-start`, { phone_number: data.phone_number, reference_phone_number : data.reference_phone_number  })
 .then(response => {
 localStorage.setItem('x-access-token', response.data.token);
 localStorage.setItem('x-access-token-expiration', Date.now() + 2 * 60 * 60 * 1000);
 return response.data
 })
 .catch(err => Promise.reject('Authentication Failed!'));
 }

export function isAuthenticated(){
 return localStorage.getItem('x-access-token') && localStorage.getItem('x-access-token-expiration') > Date.now()
 }