import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges,
  OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  valorInicial: number = 10;

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.log('ngOnChanges');
  }
  constructor() {
    this.log('constructor');
  }

  ngOnInit() {
    this.log('onInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  log(hook: string): any {
    console.log(hook);
  }

}
