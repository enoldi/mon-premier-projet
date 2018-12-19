import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparielComponent } from './appariel.component';

describe('ApparielComponent', () => {
  let component: ApparielComponent;
  let fixture: ComponentFixture<ApparielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
