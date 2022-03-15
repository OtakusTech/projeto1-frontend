import { toast } from 'react-toastify';
import api from './api/api';

const LoginService = props => new Promise((resolve, reject) => {
    api.post('/login', props).then( resp =>{
        if (resp.data) {
            localStorage.setItem('auth-token', resp.data);
            resolve(resp);
        }
    }).catch(function(err){
        toast.error(err);
    });
});

export default LoginService;