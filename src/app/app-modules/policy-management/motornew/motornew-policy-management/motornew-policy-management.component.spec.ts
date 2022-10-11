import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotornewPolicyManagementComponent } from './motornew-policy-management.component';

describe('MotornewPolicyManagementComponent', () => {
  let component: MotornewPolicyManagementComponent;
  let fixture: ComponentFixture<MotornewPolicyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotornewPolicyManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotornewPolicyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
