import React from "react";
import Item from "./ItemPesquisa/ItemPesquisa";
import "./ListagemPesquisa.css";


function ListagemPesquisa(props) {
    const listaItens = props.listaItens;

    const classNameCheck = () => {
        const c = props.className;
        return listaItens.length > 0 ? c + ' flex' : c + ' none'
    }
    
    return(
        <div className={classNameCheck()} >
            {
                listaItens.slice(0,5).map((anime) => 
                <Item key={anime._id} className="item-pesquisa" 
                    img={anime.img} 
                    titulo={anime.title} 
                    autor={anime.creator}
                    url={`/anime/${anime._id}`}></Item>)          
            } 
        </div>
    );

    
}

export default ListagemPesquisa;