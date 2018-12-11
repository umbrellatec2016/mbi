import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngestionComponent } from './ongestion.component';

describe('OngestionComponent', () => {
  let component: OngestionComponent;
  let fixture: ComponentFixture<OngestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
