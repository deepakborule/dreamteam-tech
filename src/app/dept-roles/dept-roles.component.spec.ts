import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptRolesComponent } from './dept-roles.component';

describe('DeptRolesComponent', () => {
  let component: DeptRolesComponent;
  let fixture: ComponentFixture<DeptRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptRolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
