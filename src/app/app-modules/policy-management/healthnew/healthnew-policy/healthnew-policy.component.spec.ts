import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthnewPolicyComponent } from './healthnew-policy.component';

describe('HealthnewPolicyComponent', () => {
  let component: HealthnewPolicyComponent;
  let fixture: ComponentFixture<HealthnewPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthnewPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthnewPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
