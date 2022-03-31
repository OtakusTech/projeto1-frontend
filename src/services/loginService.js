import { toast } from 'react-toastify';
import api from './api/api';

const LoginService = props => new Promise((resolve, reject) => {
    api.post('/login', props).then( resp =>{
        if (resp.data) {
            localStorage.setItem('auth-token', resp.data.token);
            localStorage.setItem('user-id', resp.data.userId);
            resolve(resp);
        }
    }).catch(function(err){
        toast.error(err.response.data);
    });
});

export default LoginService;