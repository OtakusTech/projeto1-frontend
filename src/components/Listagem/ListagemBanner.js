import React from "react";
import ItemBanner from "./ItemBanner/ItemBanner";
import "./ListagemBanner.css";


function ListagemBanner(props) {
    const listaItens = props.listaItens;
    
    return(
        <div className={props.className}>
            {
                listaItens.slice(0,10).map((historia) => 
                <ItemBanner className="item-banner" 
                    img={historia.img} 
                    titulo={historia.titulo}
                    resumo={historia.resumo} 
                    autor={historia.autor}
                    url={`http://localhost:3001/api/v1/historias/${historia.id}`}/>)          
            } 
        </div>
    );

    
}

export default ListagemBanner;