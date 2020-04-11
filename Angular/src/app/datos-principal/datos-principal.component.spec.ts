import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPrincipalComponent } from './datos-principal.component';

describe('DatosPrincipalComponent', () => {
  let component: DatosPrincipalComponent;
  let fixture: ComponentFixture<DatosPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
