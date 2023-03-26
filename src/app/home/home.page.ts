import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public pizza=[
    {cod:2,nome:'Pizza de frango' ,categoria:'pizza' ,descrição: 'A pizza de frango é uma opção deliciosa e saudável para quem prefere uma pizza com menos gordura e calorias. Esta pizza geralmente é feita com uma base de massa de pizza, que é coberta com molho de tomate, queijo mussarela e pedaços de frango cozido. ',valor:'R$32,00' ,},
    {cod:1 ,nome:'Pizza de calabresa' ,categoria:'pizza' ,descrição: 'A pizza de calabresa é um sabor clássico e muito popular em muitas partes do mundo. Esta pizza é normalmente feita com uma base de massa de pizza, que é coberta com molho de tomate, queijo mussarela e fatias finas de linguiça calabresa. A calabresa é um tipo de linguiça picante, que é bastante saborosa e dá um toque especial à pizza.' ,valor: 'R$30,00' ,},
    {cod:3 ,nome:'Pizza de 4 queijos' ,categoria:'pizza' ,descrição:'A pizza de 4 queijos é uma pizza clássica e popular que leva uma combinação de queijos deliciosos. Esta pizza é normalmente feita com uma base de massa de pizza, que é coberta com um molho de tomate suave e uma mistura de quatro queijos diferentes.' ,valor:'R$35,00'  ,},
  ];
  constructor() {}

}
