import React, {useState, useEffect} from "react";
import ItemPesquisa from "./ItemPesquisa";
import './Pesquisa.css';

function Pesquisa(props) {
    
    const [resultadoPesquisa, setResultadoPesquisa] = useState([]);
    const [pesquisaAtiva, setPesquisaAtiva] = useState(false);
    
    const handleChange = (inputValue) => {
        if(inputValue === '') {
            setResultadoPesquisa([]);
        } else {
            
            //Dados de exemplo. Falta implementar a função que pega os dados do backend
            const dados = [
                {
                    url: "#",
                    img: "https://upload.wikimedia.org/wikipedia/pt/f/ff/One_Piece_vol._01.jpg",
                    titulo: "One Piece",
                    criador: "Eiichiro Oda"
                },
                {
                    url: "#",
                    img: "https://goyabu.com/capas/relife-episodios.jpg",
                    titulo: "ReLife",
                    criador: "Yayoiso"
                },
                {
                    url: "#",
                    img: "https://goyabu.com/capas/kuroko-no-basket-episodios.jpg",
                    titulo: "Kuroko No Basket",
                    criador: "Tadatoshi Fujimaki"
                }
            ];
            const resultado = dados.filter((valor) => {return valor.titulo.toLowerCase().includes(inputValue.toLowerCase())});
            setResultadoPesquisa(resultado);
        }
    };
    

    return (
        <div className={props.className}>
            <form className="container-input-pesquisa">
                <input type="text" name="input-pesquisa"
                placeholder=" Pesquisa ..."
                autoComplete="off"
                onChange={(e) => handleChange(e.target.value)}
                onBlur={() => setPesquisaAtiva(false)}
                onFocus={() => setPesquisaAtiva(true)}
                ></input>
            </form>
            
            {
                pesquisaAtiva === true ?
                <div className="listagem-pesquisa">
                {
                    resultadoPesquisa.length === 0 ? 
                    <span className="item-pesquisa"> Não encontramos nenhum anime, sorry 🥲 </span> :
                    
                    resultadoPesquisa.slice(0,5).map((anime) => 
                    <ItemPesquisa className="item-pesquisa" 
                    img={anime.img} 
                    titulo={anime.titulo} 
                    criador={anime.criador}
                    url={anime.url}></ItemPesquisa>)
                }
            </div>
            : <></>}

          
        </div>
        
    );
}

export default Pesquisa;