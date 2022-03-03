import { toast } from 'react-toastify';
import api from './api/api';

const LogoutService = () => new Promise((resolve, reject) => {

    let token = localStorage.getItem('auth-token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const bodyParameters = {
        key: "value"
     };

    api.post('/user/logout', bodyParameters, config).then( resp =>{

        if (resp.data) {
            resolve(resp);
        }

    }).catch(function(err){
        toast.error(err);
    });
});

export default LogoutService;