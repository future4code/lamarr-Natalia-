import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import Nah from './img/me.jpg'


function App() {
  return (
<div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Nah} 
          nome="Natalia Moraes" 
          descricao="Olá, Sou a Natália. Administradora de empresas do terceiro setor, engajada, porém desesperada para transicionar de área profissional para uma new techlife. " />
        
        
        <ImagemButton 
          imagem="https://img.icons8.com/nolan/452/chevron-down.png" 
          texto="Ver mais"
        />
      </div>

      <div className='page-section-container'>
      <CardPequeno
      imagem="https://img.icons8.com/fluency/344/email-open.png"
      info="Email:"
      conteudo="natalia.m@outlook.com.br"
      />
            <CardPequeno
      imagem="https://img.icons8.com/fluency/344/worldwide-location.png"
      info="Endereço:"
      conteudo="Rua Mº Joana Felix Diniz, 1566 - CEP: 18601-046 - Botucatu - SP"
      />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://scontent.fbau3-2.fna.fbcdn.net/v/t1.6435-9/208491724_2733514570272596_2860859000256048051_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tFH-bbQfn70AX89mQww&_nc_ht=scontent.fbau3-2.fna&oh=00_AT9N_Vad8HWmRP1ZEfsc7-ZQgG8Cyyh7Y3h6x9_gZixHYg&oe=62DDC55B" 
          nome="APAPE - ASSOCIAÇÃO DE PAIS E AMIGOS DAS PESSOAS PORTADORAS DE NECESSIDADES ESPECIAIS" 
          descricao="Administradora - Since 2019 Until Now." 
        />
        
        <CardGrande
          imagem="https://blog.fundace.org.br/wp-content/uploads/2020/06/parceria-fundace-fea-usp.png" 
          nome="Fundace" 
          descricao="Pesquisadora de Campo em Arquitetura de Software - Since 2019 - Until 2021" 
        />
      </div>

      <div className="page-section-container">
        <h2>Redes Sociais</h2>
        <ImagemButton 
          imagem="https://img.icons8.com/color/2x/linkedin-circled--v2.gif" 
          texto="LinkedIn" 
        />        

        <ImagemButton 
          imagem="https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/452/external-github-with-cat-logo-an-online-community-for-software-development-logo-tritone-tal-revivo.png" 
          texto="GitHub" 
        />        
      </div>
    </div>

);
}

export default App;