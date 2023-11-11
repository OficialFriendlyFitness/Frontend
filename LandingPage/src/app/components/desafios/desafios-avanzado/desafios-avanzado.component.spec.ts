import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafiosAvanzadoComponent } from './desafios-avanzado.component';

describe('DesafiosAvanzadoComponent', () => {
  let component: DesafiosAvanzadoComponent;
  let fixture: ComponentFixture<DesafiosAvanzadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesafiosAvanzadoComponent]
    });
    fixture = TestBed.createComponent(DesafiosAvanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
