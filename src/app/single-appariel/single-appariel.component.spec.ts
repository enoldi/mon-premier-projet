import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleApparielComponent } from './single-appariel.component';

describe('SingleApparielComponent', () => {
  let component: SingleApparielComponent;
  let fixture: ComponentFixture<SingleApparielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleApparielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleApparielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
