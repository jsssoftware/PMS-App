import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthnewPolicyManagementComponent } from './healthnew-policy-management.component';

describe('HealthnewPolicyManagementComponent', () => {
  let component: HealthnewPolicyManagementComponent;
  let fixture: ComponentFixture<HealthnewPolicyManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthnewPolicyManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthnewPolicyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
