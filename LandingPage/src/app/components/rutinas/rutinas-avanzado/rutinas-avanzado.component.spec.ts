import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasAvanzadoComponent } from './rutinas-avanzado.component';

describe('RutinasAvanzadoComponent', () => {
  let component: RutinasAvanzadoComponent;
  let fixture: ComponentFixture<RutinasAvanzadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutinasAvanzadoComponent]
    });
    fixture = TestBed.createComponent(RutinasAvanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
