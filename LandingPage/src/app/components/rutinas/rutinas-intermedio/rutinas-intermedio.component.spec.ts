import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinasIntermedioComponent } from './rutinas-intermedio.component';

describe('RutinasIntermedioComponent', () => {
  let component: RutinasIntermedioComponent;
  let fixture: ComponentFixture<RutinasIntermedioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RutinasIntermedioComponent]
    });
    fixture = TestBed.createComponent(RutinasIntermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
