import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJoyaComponent } from './form-joya.component';

describe('FormJoyaComponent', () => {
  let component: FormJoyaComponent;
  let fixture: ComponentFixture<FormJoyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormJoyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormJoyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
