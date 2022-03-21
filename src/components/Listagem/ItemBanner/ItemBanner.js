import React from "react";
import './ItemBanner.css';

function ItemBanner(props) {
    return (
        <a className={props.className} href={props.url}>
            <img src={props.img}/>
            <div>
                <h3>{props.titulo}</h3>
                <p>{props.resumo}</p>
                <p className="autor">Por: {props.autor}</p>
            </div>
        </a>
    );
}

export default ItemBanner;