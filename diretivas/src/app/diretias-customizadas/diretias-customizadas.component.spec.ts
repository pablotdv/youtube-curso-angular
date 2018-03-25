import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretiasCustomizadasComponent } from './diretias-customizadas.component';

describe('DiretiasCustomizadasComponent', () => {
  let component: DiretiasCustomizadasComponent;
  let fixture: ComponentFixture<DiretiasCustomizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretiasCustomizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretiasCustomizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
