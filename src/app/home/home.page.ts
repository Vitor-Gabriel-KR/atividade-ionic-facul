import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  public pizza=[
    {cod:1,nome:'Pizza de frango' ,categoria:1 ,descrição: 'A pizza de frango é uma opção deliciosa e saudável para quem prefere uma pizza com menos gordura e calorias. Esta pizza geralmente é feita com uma base de massa de pizza, que é coberta com molho de tomate, queijo mussarela e pedaços de frango cozido. ',valor:'R$32,00' ,}, 
  ];
  public pizza2=[
    {cod:2 ,nome:'Pizza de calabresa' ,categoria:1 ,descrição: 'A pizza de calabresa é um sabor clássico e muito popular em muitas partes do mundo. Esta pizza é normalmente feita com uma base de massa de pizza, que é coberta com molho de tomate, queijo mussarela e fatias finas de linguiça calabresa. A calabresa é um tipo de linguiça picante, que é bastante saborosa e dá um toque especial à pizza.' ,valor: 'R$30,00' ,},
  ]
  public pizza3=[
    {cod:3 ,nome:'Pizza de 4 queijos' ,categoria:1 ,descrição:'A pizza de 4 queijos é uma pizza clássica e popular que leva uma combinação de queijos deliciosos. Esta pizza é normalmente feita com uma base de massa de pizza, que é coberta com um molho de tomate suave e uma mistura de quatro queijos diferentes.' ,valor:'R$35,00'  ,},
  ]
  public hamburguer=[
    {cod:4,nome:'Hambúrger de costela',valor:'R$ 25,00',detalhes:'Um hambúrguer de costela é uma variação do hambúrguer tradicional que e feoto a partir da carne moida de costela bovina. Em vez de usar corte de carne mais comuns como o patinho ou acém, o hambúrguer de costela é feito a partir de um corte mais suculento e saboroso da carne bovina'},
  ]
  public hamburguer2=[
    {cod:5,nome:'Hambúrger com cheddar',valor:'R$ 23,99',detalhes:'O hambúrguer com cheddar é uma variação do hambúrguer tradicional que é feito com uma fatia de queijo cheddar derretido sbre o hambúrguer gralhado, o queijo cheddar é um queijo amarelo-alaranjado, de origem inglesa muito popular em todo o mundo.'},
  ]
  public hamburguer3=[
    {cod:6,nome:'Hambúrguer americano',valor:'R$ 19,99',detalhes:'O hambúrguer americano é um clássico da cúlinaria dos Estados unidos, com ma receita que pode variar de região para região e de restaurante para restaurante.Em geral, o hambúrguer americano é um hambúrguer de carne bovina grelhado ou frito, servido co pão de hambúrguer, alface, tomate,cebola,picles e um molho especial, com o ketchup ou a maionese.'},
  ]
  
  

  constructor() {}

  showPizza() {
    const divPizza = document.querySelector('.div-pizza') as HTMLDivElement;
    const divBurguer = document.querySelector('.div-burguer') as HTMLDivElement;
  
    divPizza.classList.add('show');
    divBurguer.classList.remove('show');
  }
  
  showBurguer() {
    const divPizza = document.querySelector('.div-pizza') as HTMLDivElement;
    const divBurguer = document.querySelector('.div-burguer') as HTMLDivElement;
  
    divPizza.classList.remove('show');
    divBurguer.classList.add('show');
  }
  imagens1: string[] = [
    'assets/imagensio/pizza1.jpg',
    'assets/imagensio/pizza2.jpg',
    'assets/imagensio/pizza3.webp',
  ];
  imagens2: string[] = [
    'assets/imagensio/hamburguer1.jpg',
    'assets/imagensio/hamburguer2.jpg',
    'assets/imagensio/hamburguer3.webp',
  ];
}