import React, {useEffect, useState} from "react";
import './Pesquisa.css';
import ListagemPesquisa from "../Listagem/ListagemPesquisa";
import axios from "axios";

function Pesquisa(props) {
    const [query, setQuery] = useState("");
    const [animes, setAnimes] = useState([]);

    useEffect(() =>{
        axios.get(`https://otakustech-api.herokuapp.com/anime/all`)
        .then(response =>{
            let animess =  response.data;
            setAnimes(animess);
            })
            .catch(()=> console.log("Deu Ruim"))   
        },[]);

    const handleChange = (e) => {
        setQuery(e);
    }

    const pesquisa = () => {
        if(!query) {
            return [];
        }
        return  animes.filter((anime) => {return anime.title.toLowerCase().includes(query.toLowerCase())});
       
    }

    return(
        <div className={props.className}>
            <input type='search' 
            onChange={(e) => handleChange(e.target.value)}>
            </input>
            <ListagemPesquisa listaItens={pesquisa()} className='listagem-pesquisa'/>
        </div>
    );

    
}

export default Pesquisa;



