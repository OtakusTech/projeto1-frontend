import Axios from 'axios';

const LogoutService = () => new Promise((resolve, reject) => {

    let token = localStorage.getItem('auth-token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const bodyParameters = {
        key: "value"
     };

    Axios.post('localhost:5555/api/user/logout', bodyParameters, config).then( resp =>{

        if (resp.data) {
            resolve(resp);
        }

    }).catch(function(err){
        reject(err);
    });
});

export default LogoutService;