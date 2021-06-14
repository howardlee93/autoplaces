import axios from 'axios';
import {pass} from '../constants/constants';


const baseURL = "https://maps.googleapis.com/maps/api/place/autocomplete/output?parameters";

export const getPlaces = (search) =>{
    return axios.get(baseURL, {
        parameters:{
            search: search,
            key: pass
        }
    })
}

