import { API_BASE_URL } from './constants';
import axios from "axios";
import { getCookieFromBrowser } from '../utils/cookie';

   export default axios.create({
            withCredentials: true, // pass cookies to cross-site api
        });
    

    export function checkUsernameAvailability(username) {
        let url = API_BASE_URL + "/user/checkUsernameAvailability?username=" + username;
        return this.client.get(url).then(reply => {return reply.data});
    }

    function checkEmailAvailability(email) {
        let url = API_BASE_URL + "/user/checkEmailAvailability?email=" + email;
        return this.client.get(url).then(reply => {return reply.data});
    }

    export function getCurrentUser() {
        let url = API_BASE_URL + "/users/me";
        return axios.get(url).then(reply => {return reply.data});
    }

    function getUserProfile(id) {
        let url = API_BASE_URL + "/users/" + id;
        return this.client.get(url).then(reply => {return reply.data});
    }

    export function getUserFavorites() {
        let url = API_BASE_URL + "/users/favorites/";
        return axios.get(url).then(reply => {return reply.data});
    }

    function getOtherUserFavorites(id) {
        let url = API_BASE_URL + "/users/favorites/" + id;
        return this.client.get(url).then(reply => {return reply.data});
    }

    function getFoodtrucks() {
        let url = API_BASE_URL + "/foodtrucks";
        return this.client.get(url).then(reply => {return reply.data});
    }

    function getFoodtruck(id) {
        let url = API_BASE_URL + "/foodtrucks/" + id;
        return this.client.get(url).then(reply => {return reply.data})
    }

    function addFoodtruck(foodtruckRequest) {
        let url = API_BASE_URL + "/foodtrucls/add/";
        return this.client.post(JSON.stringify(foodtruckRequest));
    }

    function deleteFoodtruck(id) {
        let url = API_BASE_URL + "/foodtrucks/delete" + id;
        return this.client.delete(url);
    }
