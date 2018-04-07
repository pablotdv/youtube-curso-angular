import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms - Second Edition: Hone your skills by learning classic data structures and algorithms in JavaScript',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/i6oGruv'
  };

  livros: string[] = ['C#', 'Angular 2'];

  filtro: string;

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 5000);
  });

  valorAsync2 = Observable.interval(5000)
    .map(valor => 'Valor assíncrono 2');

  constructor() { }

  ngOnInit() {
  }

  addCurso(value) {
    this.livros.push(value);
  }

  obterCursos() {
    if (this.livros.length === 0 || this.filtro === undefined
      || this.filtro === '') {
      return this.livros;
    }


    return this.livros.filter(
      v => {
        return v.toLocaleLowerCase().indexOf(this.filtro) != -1;
      }
    );
  }

}
