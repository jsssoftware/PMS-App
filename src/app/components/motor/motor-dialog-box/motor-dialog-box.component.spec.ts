import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorDialogBoxComponent } from './motor-dialog-box.component';

describe('MotorDialogBoxComponent', () => {
  let component: MotorDialogBoxComponent;
  let fixture: ComponentFixture<MotorDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
