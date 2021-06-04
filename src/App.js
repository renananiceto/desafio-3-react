import React, { Component } from 'react';
import './App.css'

class Header extends Component {
  state = {
    nome: 'Renan Aniceto',
    idade: 26,
    comidaFavorita: 'Lasanha',
    musicas: ['Imagine Dragons  Nothing left to say','Titanic - My Heart Will Go On (Piano Cover)','The Game is Afoot'  ],
    
  }
  render() {
    return (
      <div className='header'>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ul className='list'>
          <li>{this.state.musicas[0]}</li>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mGv0ze0lHKA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <li>{this.state.musicas[1]}</li>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KAQWzHokZXg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <li>{this.state.musicas[2]}</li>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Q5GHpnQVkDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </ul>
      </div>
    )
  }
};

export default Header;