import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';


@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  cursos: string[] = ['Angular 2', 'C#', 'Xamarin'];
  constructor(private log: LogService) {
    console.log('CursosService');
  }

  getCursos() {
    this.log.consoleLog('Obtendo lista de cursos!');
    return this.cursos;
  }

  addCurso(curso: string) {
    this.log.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
