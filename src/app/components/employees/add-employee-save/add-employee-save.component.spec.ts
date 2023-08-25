import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeSaveComponent } from './add-employee-save.component';

describe('AddEmployeeSaveComponent', () => {
  let component: AddEmployeeSaveComponent;
  let fixture: ComponentFixture<AddEmployeeSaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeSaveComponent]
    });
    fixture = TestBed.createComponent(AddEmployeeSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
