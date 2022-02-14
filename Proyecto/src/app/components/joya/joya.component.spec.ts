import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoyaComponent } from './joya.component';

describe('JoyaComponent', () => {
  let component: JoyaComponent;
  let fixture: ComponentFixture<JoyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
