import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncampanaComponent } from './gestioncampana.component';

describe('GestioncampanaComponent', () => {
  let component: GestioncampanaComponent;
  let fixture: ComponentFixture<GestioncampanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioncampanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncampanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
