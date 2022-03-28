import React from "react";
import './ItemPesquisa.css';

function ItemPesquisa(props) {
    return (
        <a className={props.className} href={props.url}>
            <img src={props.img}/>
            <div>
                <p>{props.titulo}</p>
                <p>Por: {props.autor}</p>
            </div>
        </a>
    );
}

export default ItemPesquisa;