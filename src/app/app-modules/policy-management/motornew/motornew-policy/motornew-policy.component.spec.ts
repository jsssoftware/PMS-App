import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotornewPolicyComponent } from './motornew-policy.component';

describe('MotornewPolicyComponent', () => {
  let component: MotornewPolicyComponent;
  let fixture: ComponentFixture<MotornewPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotornewPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotornewPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
