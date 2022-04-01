import React, {useEffect, useState} from "react";
import './Pesquisa.css';
import ListagemPesquisa from "../Listagem/ListagemPesquisa";
import axios from "axios";
import { Input } from "reactstrap";

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
            <Input
                className="form-control-alternative input-pesquisa"
                type='search'
                placeholder='Buscar Anime' 
                onChange={(e) => handleChange(e.target.value)}
            />
            <ListagemPesquisa listaItens={pesquisa()} className='listagem-pesquisa'/>
        </div>
    );

    
}

export default Pesquisa;



