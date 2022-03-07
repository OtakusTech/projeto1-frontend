import { toast } from 'react-toastify';
import api from './api/api';

const RegisterService = props => new Promise((resolve, reject) => {   
    api.post('/user/register', props).then( resp =>{
        resolve(resp);

    }).catch(function(err){
        toast.error('Email já cadastrado ou serviço indisponível\nResposta do servidor: '+err);
        reject(err);
    });
    
});

export default RegisterService;