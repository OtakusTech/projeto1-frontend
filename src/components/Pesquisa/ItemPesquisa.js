import './ItemPesquisa.css';

function ItemPesquisa(props) {
    return (
        <a className={props.className} href={props.url}>
            <img src={props.img}/>
            <div>
                <p>{props.titulo}</p>
                <p>Por: {props.criador}</p>
            </div>
        </a>
    );
}

export default ItemPesquisa;