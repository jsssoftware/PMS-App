import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndorsementInformationComponent } from './endorsement-information.component';

describe('EndorsementInformationComponent', () => {
  let component: EndorsementInformationComponent;
  let fixture: ComponentFixture<EndorsementInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndorsementInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndorsementInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
