import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesafiosIntermedioComponent } from './desafios-intermedio.component';

describe('DesafiosIntermedioComponent', () => {
  let component: DesafiosIntermedioComponent;
  let fixture: ComponentFixture<DesafiosIntermedioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesafiosIntermedioComponent]
    });
    fixture = TestBed.createComponent(DesafiosIntermedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
