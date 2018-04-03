import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  private service: CursosService;

  cursos: string[] = [];

  constructor() {
    this.service = new CursosService();
  }


  ngOnInit() {
    this.cursos = this.service.getCursos();
  }

}
