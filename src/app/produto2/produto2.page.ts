import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto2',
  templateUrl: './produto2.page.html',
  styleUrls: ['./produto2.page.scss'],
})
export class Produto2Page implements OnInit {
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
  valor = 0;

  aumentar() {
    this.valor++;
  }

  diminuir() {
    if (this.valor > 0) {
      this.valor--;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
