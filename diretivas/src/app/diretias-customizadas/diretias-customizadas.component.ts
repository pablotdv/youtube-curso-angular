import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretias-customizadas',
  templateUrl: './diretias-customizadas.component.html',
  styleUrls: ['./diretias-customizadas.component.scss']
})
export class DiretiasCustomizadasComponent implements OnInit {

  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

  
}
