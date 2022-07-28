import React from 'react'
import S from './Home.module.css';
import Cards from '../../Components/Cards/Cards.jsx';
import Header from '../../Components/Header/Header.jsx';
import Separador from '../../Components/Separador/Separador.jsx';
import Foother from'../../Components/Foother/Foother.jsx';
import Produtos from '../../Components/Produtos/Produtos.jsx';
import Cadastro from '../../Components/Cadastro/Cadastro.jsx';
import Indique from '../../Components/Indique/Indique.jsx';

const Home = () => {
  return (
    <div>
        <Header/>
        <main className={S.cor}>
            <Cadastro/>
            <Separador text='Nossos produtos disponíveis'/>
            <Produtos/>
            <Separador text='Indique para um amigo'/>
            <Indique/>
        </main>
        <Foother/>
    </div>
  )
} 

export default Home




