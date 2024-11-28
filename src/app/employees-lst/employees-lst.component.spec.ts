import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesLstComponent } from './employees-lst.component';

describe('EmployeesLstComponent', () => {
  let component: EmployeesLstComponent;
  let fixture: ComponentFixture<EmployeesLstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesLstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
