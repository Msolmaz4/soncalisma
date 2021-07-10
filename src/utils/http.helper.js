
import config from 'config';
import axios from 'axios';

const url ={endpoint} => {
    return `${config.apiUrl}/${config.apiVersiyon}/${endpoint}`;
}
const post =(endpoint,data) => {

return axios.post(url(endpoint),data).then(res => dat);

}
export {
    post
}