import React from "react";
import Item from "./ItemPesquisa/ItemPesquisa";
import "./ListagemPesquisa.css";


function ListagemPesquisa(props) {
    const listaItens = props.listaItens;
    
    return(
        <div className={props.className} >
            {
                listaItens.slice(0,10).map((anime) => 
                <Item className="item-pesquisa" 
                    img={anime.img} 
                    titulo={anime.title} 
                    autor={anime.creator}
                    url={`/anime/${anime._id}`}></Item>)          
            } 
        </div>
    );

    
}

export default ListagemPesquisa;