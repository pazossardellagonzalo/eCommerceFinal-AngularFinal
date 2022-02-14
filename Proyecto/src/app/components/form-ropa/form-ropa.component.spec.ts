import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRopaComponent } from './form-ropa.component';

describe('FormRopaComponent', () => {
  let component: FormRopaComponent;
  let fixture: ComponentFixture<FormRopaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRopaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
