import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoSocialComponent } from './foro-social.component';

describe('ForoSocialComponent', () => {
  let component: ForoSocialComponent;
  let fixture: ComponentFixture<ForoSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForoSocialComponent]
    });
    fixture = TestBed.createComponent(ForoSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
